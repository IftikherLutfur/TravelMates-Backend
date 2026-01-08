import { prisma } from "../../../lib/prisma";
const travelCreate = async (payload, userEmail) => {
    const { startDate, endDate, budgetRange, description, travelType, destination } = payload;
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail
        }
    });
    const userTravelFind = await prisma.travel.findMany({
        where: {
            userEmail: userEmail
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    if (!user?.isPremium && userTravelFind.length >= 1) {
        throw new Error("You’ve reached the limit of your free plan. Subscribe to post more travel plans.");
    }
    const travel = await prisma.travel.create({
        data: {
            startDate: new Date(startDate), // ✅ FIX
            endDate: new Date(endDate), // ✅ FIX
            budgetRange: Number(budgetRange),
            description,
            travelType,
            destination,
            userEmail: user?.email
        }
    });
    console.log(travel);
    return travel;
};
const getAllTravel = async () => {
    return await prisma.travel.findMany({
        orderBy: {
            startDate: "asc", // upcoming trips first
        },
    });
};
const singleTravel = async (id) => {
    const travel = await prisma.travel.findUnique({
        where: {
            id: id
        }
    });
    return travel;
};
const getIndividualTravel = async (email) => {
    const travel = await prisma.travel.findMany({
        where: {
            userEmail: email
        }
    });
    return travel;
};
const travelDelete = async (email, id) => {
    const isAdmin = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (isAdmin?.email !== email) {
        throw new Error("You are not authorized");
    }
    return await prisma.travel.delete({
        where: { id: id }
    });
};
export const travelService = {
    travelCreate,
    getAllTravel,
    getIndividualTravel,
    singleTravel,
    travelDelete
};

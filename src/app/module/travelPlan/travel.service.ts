import { prisma } from "../../../lib/prisma"

const travelCreate = async (payload: any, userEmail: string) => {
    const { startDate, endDate, budgetRange, description, travelType, destination } = payload;
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail
        }
    })
    const travel = await prisma.travel.create({
        data: {
            startDate: new Date(startDate), // ✅ FIX
            endDate: new Date(endDate),     // ✅ FIX
            budgetRange: Number(budgetRange),
            description,
            travelType,
            destination,
            userEmail: user?.email as string
        }
    })
    console.log(travel)
    return travel;
}

const getAllTravel = async () => {
    return await prisma.travel.findMany({
        orderBy: {
            startDate: "asc", // upcoming trips first
        },
    });
};


const getIndividualTravel = async (email: string) => {
    const travel = await prisma.travel.findMany({
        where: {
            userEmail: email
        }
    })

    return travel;
}

export const travelService = {
    travelCreate,
    getAllTravel,
    getIndividualTravel
}
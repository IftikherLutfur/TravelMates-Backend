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
            startDate,
            endDate,
            budgetRange,
            description,
            travelType,
            destination,
            userId: user?.id as string
        }
    })
    return travel;
}

const getAllTravel = async () => {
    const travel = await prisma.travel.findMany()
    return travel;
}

export const travelService = {
    travelCreate,
    getAllTravel
}
import { prisma } from "../../../lib/prisma"

const travelCreate = async (payload: any) => {
    const { startDate, endDate, budgetRange, description, travelType, destination } = payload;
    const travel = await prisma.travel.create({
        data: {
            startDate,
            endDate,
            budgetRange,
            description,
            travelType,
            destination,
        }
    })
    return travel;
}

const getAllTravel = async () =>{
       const travel = await prisma.travel.findMany()
       return travel;
}

export const travelService = {
    travelCreate,
    getAllTravel
}
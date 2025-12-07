import { prisma } from "../../../lib/prisma"

const userCreation = async (payload: any) => {
      const user = await prisma.user.create({
        data:{
            name: payload.name,
            email: payload.email,
            password: payload.password
        }
      })
      return user
}
export const userService = {
    userCreation
} 
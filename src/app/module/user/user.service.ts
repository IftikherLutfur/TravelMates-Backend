import bcrypt from "bcryptjs"
import { prisma } from "../../../lib/prisma"

const userCreation = async (payload: any) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10)
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email
    }
  })
  if (isUserExist) {
    throw new Error("This email already taken")
  }
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword
    }
  })
  return user
}

export const userService = {
  userCreation
} 
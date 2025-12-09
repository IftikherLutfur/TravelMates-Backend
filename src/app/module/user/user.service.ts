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
      role: payload.role,
      password: hashedPassword,

    }
  })
  return user
}

const getOwnUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  return user;
}

const editUser = async (email: string, payload: any) => {
  const edit = await prisma.user.update({
    data: {
      bio: payload.bio,
      name: payload.name,
      currentLocation: payload.currentLocation,
      password: payload.password,
      profileImage: payload.profileImage,
      travelInterest: payload.travelInterest,
      visitedCountries: payload.visitedCountries,
    },
    where: {
      email: email
    }
  })
  return edit
}

export const userService = {
  userCreation,
  getOwnUser,
  editUser
} 
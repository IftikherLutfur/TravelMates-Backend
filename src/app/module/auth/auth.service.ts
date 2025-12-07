import bcrypt from "bcryptjs"
import { prisma } from "../../../lib/prisma"
import jwt, { Secret, SignOptions } from "jsonwebtoken"

const login = async (payload: any) => {
    // 1️⃣ user খোঁজা
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    })

    // 2️⃣ user না থাকলে
    if (!user) {
        throw new Error("User not found")
    }

    // 3️⃣ password match
    const isPasswordMatch = await bcrypt.compare(
        payload.password,
        user.password
    )

    // 4️⃣ password ভুল হলে
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials")
    }

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined")
    }

    const expiresIn: SignOptions["expiresIn"] =
        (process.env.JWT_EXPIRES as SignOptions["expiresIn"]) ?? "1d"

    const token = jwt.sign({
        userId: user.id,
        email: user.email
    },
        jwtSecret,
        {
            expiresIn
        }

    )

    // 5️⃣ success response (password ছাড়া)
    const { password, ...userWithoutPassword } = user

    return {
        accessToken: token,
        data: userWithoutPassword
    }
}
export const authService = {
    login
} 
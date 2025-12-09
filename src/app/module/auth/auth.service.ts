import bcrypt from "bcryptjs"
import { prisma } from "../../../lib/prisma"
import generateToken from "../../../utils/jwt"

const login = async (payload: { email: string, password: string }) => {
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

    const accessToken = generateToken({ email: user.email, role: user.role }, process.env.JWT_SECRET as string, process.env.JWT_EXPIRES as string)
    const refreshToken = generateToken({ email: user.email, role: user.role }, process.env.JWT_SECRET as string, process.env.JWT_EXPIRES as string)

    const { ...userWithoutPassword } = user

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        data: userWithoutPassword
    }
}
export const authService = {
    login
} 
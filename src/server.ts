import app from "./app";
import { prisma } from "./lib/prisma";

/**
 * Vercel Serverless Environment
 * - Do NOT use app.listen()
 * - Export the app as default
 * - Connect DB lazily
 */

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    try {
      await prisma.$connect();
      isConnected = true;
      console.log("✅ DB connected");
    } catch (error) {
      console.error("❌ DB connection failed", error);
      throw error;
    }
  }
}

// Ensure DB is connected before handling requests
app.use(async (_req, _res, next) => {
  await connectDB();
  next();
});

// Optional: health check
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Serverless API is running"
  });
});

// 🔥 IMPORTANT: export app (NO listen)
export default app;

-- CreateEnum
CREATE TYPE "Userstatus" AS ENUM ('ACTIVE', 'DEACTIVE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userStatus" "Userstatus" NOT NULL DEFAULT 'ACTIVE';

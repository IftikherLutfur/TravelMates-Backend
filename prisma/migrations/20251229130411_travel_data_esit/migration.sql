/*
  Warnings:

  - You are about to drop the column `userId` on the `Travel` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_userId_fkey";

-- AlterTable
ALTER TABLE "Travel" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

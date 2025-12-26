/*
  Warnings:

  - You are about to drop the column `rawResponse` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "rawResponse";

-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

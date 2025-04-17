/*
  Warnings:

  - The `completionDate` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "completionDate",
ADD COLUMN     "completionDate" TIMESTAMP(3);

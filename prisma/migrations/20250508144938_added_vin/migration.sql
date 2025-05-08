/*
  Warnings:

  - A unique constraint covering the columns `[VIN]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "VIN" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Car_VIN_key" ON "Car"("VIN");

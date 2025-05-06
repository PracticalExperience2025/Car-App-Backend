-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "vignetteDate" TIMESTAMP(3) NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL,
    "insuranceDate" TIMESTAMP(3) NOT NULL,
    "inspectionDate" TIMESTAMP(3) NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_license_key" ON "Car"("license");

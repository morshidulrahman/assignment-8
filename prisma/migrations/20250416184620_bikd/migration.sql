-- CreateTable
CREATE TABLE "Bike" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("bikeId")
);

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

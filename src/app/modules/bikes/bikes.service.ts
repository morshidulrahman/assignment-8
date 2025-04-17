import { Bike, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createBikeIntoDb = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBikeIntoDb = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const updateBikeIntoDb = async (id: string, payload: Partial<Bike>) => {
  const result = await prisma.bike.update({
    where: {
      bikeId: id,
    },
    data: payload,
  });
  return result;
};

const getBikeSingleIntoDb = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};

const deleteSingleBike = async (id: string) => {
  const result = await prisma.bike.delete({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const bikeService = {
  createBikeIntoDb,
  getAllBikeIntoDb,
  updateBikeIntoDb,
  getBikeSingleIntoDb,
  deleteSingleBike,
};

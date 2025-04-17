import { Service, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createServiceIntoDb = async (payload: Service) => {
  const result = await prisma.service.create({
    data: payload,
  });
  return result;
};

const getAllServiceIntoDb = async () => {
  const result = await prisma.service.findMany();
  return result;
};

const updateServiceIntoDb = async (id: string, payload: Partial<Service>) => {
  const result = await prisma.service.update({
    where: {
      serviceId: id,
    },
    data: {
      ...payload,
      status: "done",
    },
  });
  return result;
};

const getServiceSingleIntoDb = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const deleteSingleService = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      serviceId: id,
    },
  });
  return result;
};

export const ServicesService = {
  createServiceIntoDb,
  getAllServiceIntoDb,
  getServiceSingleIntoDb,
  updateServiceIntoDb,
  deleteSingleService,
};

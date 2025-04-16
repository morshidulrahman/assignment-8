import { Customer, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createCustomerIntoDb = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomerIntoDb = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const updateCustomerIntoDb = async (id: string, payload: Partial<Customer>) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

const getCustomerSingleIntoDb = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

const deleteSingleCustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const CustomerService = {
  createCustomerIntoDb,
  getAllCustomerIntoDb,
  getCustomerSingleIntoDb,
  updateCustomerIntoDb,
  deleteSingleCustomer,
};

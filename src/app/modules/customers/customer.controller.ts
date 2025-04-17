import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";
const createCustomerHandler = CatchAsync(async (req, res) => {
  const result = await CustomerService.createCustomerIntoDb(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomersHandler = CatchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomerIntoDb();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSingleCustomersHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerSingleIntoDb(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const deleteCustomersHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await CustomerService.deleteSingleCustomer(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: "",
  });
});

const updateCustomerHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerIntoDb(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

export const CustomerController = {
  createCustomerHandler,
  getAllCustomersHandler,
  getSingleCustomersHandler,
  updateCustomerHandler,
  deleteCustomersHandler,
};

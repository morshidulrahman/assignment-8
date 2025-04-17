import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { ServicesService } from "./services.service";

const createServiceHandler = CatchAsync(async (req, res) => {
  const result = await ServicesService.createServiceIntoDb(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServicesHandler = CatchAsync(async (req, res) => {
  const result = await ServicesService.getAllServiceIntoDb();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getSingleServicesHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServicesService.getServiceSingleIntoDb(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const deleteServicesHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await ServicesService.deleteSingleService(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record deleted successfully",
    data: "",
  });
});

const updateServiceHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServicesService.updateServiceIntoDb(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

export const ServiceController = {
  createServiceHandler,
  getAllServicesHandler,
  getSingleServicesHandler,
  updateServiceHandler,
  deleteServicesHandler,
};

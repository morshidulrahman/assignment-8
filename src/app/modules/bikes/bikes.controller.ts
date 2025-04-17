import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { bikeService } from "./bikes.service";
const createBikeHandler = CatchAsync(async (req, res) => {
  const result = await bikeService.createBikeIntoDb(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikesHandler = CatchAsync(async (req, res) => {
  const result = await bikeService.getAllBikeIntoDb();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBikesHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.getBikeSingleIntoDb(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

const deleteBikesHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await bikeService.deleteSingleBike(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike deleted successfully",
    data: "",
  });
});

const updateBikeHandler = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.updateBikeIntoDb(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike updated successfully",
    data: result,
  });
});

export const BikeController = {
  createBikeHandler,
  getAllBikesHandler,
  getSingleBikesHandler,
  updateBikeHandler,
  deleteBikesHandler,
};

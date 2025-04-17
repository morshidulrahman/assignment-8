import express from "express";
import { BikeController } from "./bikes.controller";

const router = express.Router();

router.post("/", BikeController.createBikeHandler);
router.get("/", BikeController.getAllBikesHandler);
router.get("/:id", BikeController.getSingleBikesHandler);
router.put("/:id", BikeController.updateBikeHandler);
router.delete("/:id", BikeController.deleteBikesHandler);

export const bikeRouter = router;

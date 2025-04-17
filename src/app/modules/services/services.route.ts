import express from "express";
import { ServiceController } from "./services.controller";

const router = express.Router();

router.post("/", ServiceController.createServiceHandler);
router.get("/", ServiceController.getAllServicesHandler);
router.get("/:id", ServiceController.getSingleServicesHandler);
router.put("/:id", ServiceController.updateServiceHandler);
router.delete("/:id", ServiceController.deleteServicesHandler);

export const serviceRouter = router;

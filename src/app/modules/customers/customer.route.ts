import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerController.createCustomerHandler);
router.get("/", CustomerController.getAllCustomersHandler);
router.get("/:id", CustomerController.getSingleCustomersHandler);
router.put("/:id", CustomerController.updateCustomerHandler);
router.delete("/:id", CustomerController.deleteCustomersHandler);

export const customerRouter = router;

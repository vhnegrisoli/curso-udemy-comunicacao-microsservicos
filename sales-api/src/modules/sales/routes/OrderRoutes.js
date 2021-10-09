import { Router } from "express";

import OrderController from "../controller/OrderController.js";

const router = new Router();

router.get("/api/order/:id", OrderController.findById);
router.post("/api/order/create", OrderController.createOrder);

export default router;

import { Router } from "express";

import UserController from "../controller/UserController.js";

const router = new Router();

router.get("/api/user/email/:email", UserController.findByEmail);
router.post("/api/user/auth", UserController.getAccessToken);

export default router;

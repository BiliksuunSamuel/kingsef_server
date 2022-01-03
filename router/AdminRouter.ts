import express from "express";
import { adminRoutes } from "../constants/Routes";
import { LoginController, RegisterController } from "../controller/admin";

const router = express.Router();

///POST REQUEST
router.post(adminRoutes.login, LoginController);
router.post(adminRoutes.register, RegisterController);
export default router;

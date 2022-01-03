import express from "express";
import { userRoutes } from "../constants/Routes";
import { LoginController, RegisterController } from "../controller/user";

const router = express.Router();

//POST REQUEST
router.post(userRoutes.login, LoginController);
router.post(userRoutes.register, RegisterController);

export default router;

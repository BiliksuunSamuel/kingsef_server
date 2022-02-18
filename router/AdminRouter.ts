import express from "express";
import { LoginController, RegisterController } from "../controller/admin";
import { Routes } from "../routes/Routes";

const router = express.Router();

///POST REQUEST
router.post(Routes.admin_login, LoginController);
router.post(Routes.admin_register, RegisterController);
export default router;

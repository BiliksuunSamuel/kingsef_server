import express from "express";
import { Routes } from "../constants/Routes";
import {
  AddCategoryController,
  GetCategoriesController,
} from "../controller/controllers";

const router = express.Router();

router.post(Routes.category_add, AddCategoryController);
router.post(Routes.categories_get, GetCategoriesController);
export default router;

import mongoose from "mongoose";
import { CategorySchema, ProductSchema } from "../schema/ProductSchema";

export const ProductInfoModel = mongoose.model("product", ProductSchema);
export const CategoryModel = mongoose.model("category", CategorySchema);

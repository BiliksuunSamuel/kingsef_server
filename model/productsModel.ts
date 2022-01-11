import mongoose from "mongoose";
import { ProductSchema } from "../schema/ProductSchema";

export const ProductInfoModel = mongoose.model("product", ProductSchema);

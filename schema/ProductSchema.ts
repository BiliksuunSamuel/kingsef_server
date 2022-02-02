import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  discount: String,
  images: [],
  vendor_id: String,
  category: String,
  status: Number,
  description: String,
  name: String,
  price: Number,
});

export const CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  sub_cate: [],
});

import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  approved: Boolean,
  vendor_id: String,
  cost_price: Number,
  selling_price: Number,
  discount: Number,
  description: String,
  quantity: Number,
  date_added: String,
  name: String,
  category: String,
  images: Array,
});

export const CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  sub_cate: [],
});

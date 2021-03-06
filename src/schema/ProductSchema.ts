import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  status: Object,
  vendor_id: String,
  regular_price: Number,
  sales_price: Number,
  description: Array,
  quantity: Number,
  date_added: String,
  name: String,
  category: String,
  up_sells: String,
  gallery: Array,
  image: String,
  cross_sells: String,
  type: String,
  seo: String,
  estimated_delivery: Object,
  brands: String,
  variable: Array,
  merit: Number,
  country_code: String,
  favorites: Array,
  available: Boolean,
  details_listing: Array,
  currency: String,
  country_info: Object,
  sub_category: String,
  search_keyword: String,
  ispackaging: Boolean,
});

export const CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  sub_cate: Array,
});

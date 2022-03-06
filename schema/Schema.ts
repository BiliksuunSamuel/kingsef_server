import mongoose from "mongoose";

export const DeliverPricingSchema = new mongoose.Schema({
  state_city: Object,
  vendor_id: String,
  amount: Number,
  reason: String,
});

export const NotificationSchema = new mongoose.Schema({
  subject: String,
  reference: Object,
  date: String,
  sender: Object,
  message: String,
  status: Object,
  receiver: String,
});

export const AdvertSchema = new mongoose.Schema({
  path: String,
});

export const ReviewsSchema = new mongoose.Schema({
  message: String,
  date_added: String,
  sender: Object,
});
export const DisplayCatSchema = new mongoose.Schema({
  cat_ref: String,
  image: String,
});

export const PackageSchema = new mongoose.Schema({
  name: String,
  description: String,
  sale_price: Number,
  date_added: String,
  quantity: Number,
  status: Number,
  seller: String,
  images: Array,
});

export const PackageOrderSchema = new mongoose.Schema({
  items: Array,
  cost: Number,
  total: Number,
  vendor: String,
  group: Number,
  date_ordered: String,
  status: Object,
});

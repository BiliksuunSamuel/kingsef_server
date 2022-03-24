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
  access: Object,
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
  favorites: Array,
  likes: Array,
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

export const AdminCommentsSchema = new mongoose.Schema({
  type: Number,
  receipient: Number,
  message: String,
  seen: Array,
  sender: String,
  date_added: String,
});

export const HelpCenterChatSchema = new mongoose.Schema({
  message: String,
  seen: Array,
  time: String,
  copied_text: String,
  sender: String,
  receiver: String,
  deleted: Boolean,
  ref: String,
  chat_id: String,
  sent: Boolean,
  id: String,
});

export const OrderSchema = new mongoose.Schema({
  date: String,
  amount: String,
  content: Array,
  buyer: String,
  buyer_response: Object,
  delivery: Object,
  status: Object,
  billing: Object,
  ratings: Object,
  cart: Array,
  currency: String,
  reference: String,
});

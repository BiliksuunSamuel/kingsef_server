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

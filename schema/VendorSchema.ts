import mongoose from "mongoose";

export const VendorSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
  store_id: String,
  state: String,
  status: Number,
  role: Number,
  verification_id: String,
  auth_id: String,
  verified: Boolean,
  account: {
    name: String,
    branch: String,
    number: String,
    iban: String,
  },
});

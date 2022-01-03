import mongoose from "mongoose";

export const UserInfoSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  country: String,
  state: String,
  phone: String,
  auth_id: String,
  verification_id: String,
  authenticated: Boolean,
  status: Number,
});

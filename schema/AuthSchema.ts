import mongoose from "mongoose";

export const AuthSchema = new mongoose.Schema({
  password: String,
  authenticated: Boolean,
  otp: { code: String, status: Number },
});

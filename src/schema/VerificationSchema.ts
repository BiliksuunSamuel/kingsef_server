import mongoose from "mongoose";

export const VerificationSchema = new mongoose.Schema({
  verification_code: String,
  verified: Boolean,
  code_time: String,
  user_id: String,
});

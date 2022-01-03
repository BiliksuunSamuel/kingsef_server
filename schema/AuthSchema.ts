import mongoose from "mongoose";

export const AuthSchema = new mongoose.Schema({
  password: String,
  email: String,
  phone: String,
});

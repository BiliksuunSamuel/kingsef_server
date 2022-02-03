import mongoose from "mongoose";

export const UserInfoSchema = new mongoose.Schema({
  info: {
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    auth_id: String,
    status: Number,
    authenticated: Boolean,
    otp_expiresIn: String,
  },
  country: {
    state_region: String,
    dial_code: String,
    name: String,
    code: String,
    flag: String,
    currency: String,
  },
});

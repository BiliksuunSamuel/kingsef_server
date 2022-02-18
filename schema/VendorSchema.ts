import mongoose from "mongoose";

export const VendorSchema = new mongoose.Schema({
  info: {
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    auth_id: String,
    authenticated: Boolean,
    otp_expiresIn: String,
  },
  country: {
    state_region: Object,
    dial_code: String,
    name: String,
    code: String,
    flag: String,
    currency: String,
  },
  account: { status: Number, role: Number },
  business: { title: String, motto: String, address: String },
  bank: {
    name: String,
    branch: String,
    account_number: String,
    iban: String,
    account_holder: String,
  },
});

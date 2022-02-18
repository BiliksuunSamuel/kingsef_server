import mongoose from "mongoose";

export const CountryStateSchema = new mongoose.Schema({
  name: String,
  isoCode: Number,
  countryCode: String,
  latitude: Number,
  longitude: Number,
});

export const DeliverPricingSchema = new mongoose.Schema({
  state_city: Object,
  vendor_id: String,
  amount: Number,
  reason: String,
});

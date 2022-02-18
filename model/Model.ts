import mongoose from "mongoose";
import { CountryStateSchema, DeliverPricingSchema } from "../schema/Schema";

export const CountryStatesModel = mongoose.model("state", CountryStateSchema);
export const DeliveryPricingModel = mongoose.model(
  "delivery_pricing",
  DeliverPricingSchema
);

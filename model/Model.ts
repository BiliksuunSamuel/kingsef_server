import mongoose from "mongoose";
import {
  AdvertSchema,
  DeliverPricingSchema,
  NotificationSchema,
} from "../schema/Schema";

export const DeliveryPricingModel = mongoose.model(
  "delivery_pricing",
  DeliverPricingSchema
);

export const NotificationModel = mongoose.model(
  "notification",
  NotificationSchema
);

export const AdvertModel = mongoose.model("advert", AdvertSchema);

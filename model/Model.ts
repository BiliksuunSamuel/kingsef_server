import mongoose from "mongoose";
import { DeliverPricingSchema, NotificationSchema } from "../schema/Schema";

export const DeliveryPricingModel = mongoose.model(
  "delivery_pricing",
  DeliverPricingSchema
);

export const NotificationModel = mongoose.model(
  "notification",
  NotificationSchema
);

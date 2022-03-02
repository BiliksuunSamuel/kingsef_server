import mongoose from "mongoose";
import {
  AdvertSchema,
  DeliverPricingSchema,
  NotificationSchema,
  ReviewsSchema,
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

export const ReviewsModel = mongoose.model("review", ReviewsSchema);

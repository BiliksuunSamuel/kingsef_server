import mongoose from "mongoose";
import {
  AdvertSchema,
  DeliverPricingSchema,
  DisplayCatSchema,
  NotificationSchema,
  PackageOrderSchema,
  PackageSchema,
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
export const DisplayCatModel = mongoose.model("display_cat", DisplayCatSchema);

export const PackageModel = mongoose.model("package", PackageSchema);
export const PackageOrderModel = mongoose.model(
  "package_order",
  PackageOrderSchema
);

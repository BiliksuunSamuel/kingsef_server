import mongoose from "mongoose";
import { VerificationSchema } from "../schema/VerificationSchema";

export const VerificationModel = mongoose.model(
  "verification",
  VerificationSchema
);

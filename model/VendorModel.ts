import mongoose from "mongoose";
import { VendorSchema } from "../schema/VendorSchema";

export const VendorInfoModel = mongoose.model("vendor", VendorSchema);

import mongoose from "mongoose";
import { AuthSchema } from "../schema/AuthSchema";

export const AuthModel = mongoose.model("auth", AuthSchema);

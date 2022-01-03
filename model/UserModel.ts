import mongoose from "mongoose";
import { UserInfoSchema } from "../schema/UserSchema";

export const UserModel = mongoose.model("user", UserInfoSchema);

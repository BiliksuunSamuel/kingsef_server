import mongoose from "mongoose";
import MeritSchema from "../schema/MeritSchema";

const MeritModel = mongoose.model("MeritModel", MeritSchema);

export default MeritModel;

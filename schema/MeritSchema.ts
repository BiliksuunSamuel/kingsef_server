import mongoose from "mongoose";

const MeritSchema = new mongoose.Schema({
  title: String,
  value: Number,
});

export default MeritSchema;

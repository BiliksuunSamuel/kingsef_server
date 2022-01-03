import mongoose from "mongoose";
import { Db_URL } from "../configuration/Config";

const connection = mongoose.connect(Db_URL, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("Database connected");
});

export default connection;

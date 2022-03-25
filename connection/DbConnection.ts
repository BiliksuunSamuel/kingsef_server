import mongoose from "mongoose";
import { connectionString, Db_URL } from "../configuration/Config";

const connection = mongoose.connect(connectionString, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("Database connected");
});

export default connection;

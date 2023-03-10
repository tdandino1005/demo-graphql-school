// This is where we connect Node to MongoDB using Mongoose
import mongoose from "mongoose";
import config from "./config.js";

const init = async () => {
  mongoose
    .connect(`${config.mongoURL}/school`)
    .then(() => {
      console.info("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err.message);
    });
};

export const conn = mongoose.connection;

export default init;

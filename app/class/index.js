import { Schema, model } from "mongoose";
import config from "../config.js";

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    building: {
      type: String,
      required: true,
    },
    creditHours: {
      type: Number,
      required: true,
    },
    professor: {
      type: Schema.Types.ObjectId,
      ref: "Professor",
    },
  },
  config.mongooseSchemaOptions
);

// Mongoose automatically looks for the plural, lowercased version of your model name (e.g. 'classes')
export default model("Class", classSchema);

import { Schema, model } from "mongoose";
import config from "../config.js";

const professorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    studentScore: {
      type: Number,
    },
    officeHours: {
      type: String,
      required: true,
    },
    officeLocation: {
      type: String,
      required: true,
    },
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
  },
  config.mongooseSchemaOptions
);

export default model("Professor", professorSchema);

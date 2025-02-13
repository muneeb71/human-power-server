import mongoose, { Schema } from "mongoose";
import {IClassReourcesDetails } from "./types/class-resources.types";

const schema = new mongoose.Schema(
  {
    class: {
      type: Schema.Types.ObjectId, ref: "Class"
    },
    candidate: {
      type: Schema.Types.ObjectId, ref: "Candidate"
    },
    status: {
      type: String,
      enum: ["hired", "terminated" , "withdrawn"],
      default: "hired",
    }
  },
  { timestamps: true }
);

export const ClassResource = mongoose.model<IClassReourcesDetails>("ClassResource", schema);

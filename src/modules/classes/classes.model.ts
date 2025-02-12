import mongoose from "mongoose";
import {IClassesDetails } from "./types/classes.types";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Class = mongoose.model<IClassesDetails>("Class", schema);

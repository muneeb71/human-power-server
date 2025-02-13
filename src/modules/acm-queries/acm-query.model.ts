import mongoose, { Schema } from "mongoose";
import { IAcmQueryDetails } from "./types/acm-query.types";

const schema = new mongoose.Schema(
  {
    question: { type: String },
    answer: { type: String }, 
    askedBy: { type: Schema.Types.ObjectId, ref: "Acm"},
    answeredBy: { type: Schema.Types.ObjectId, ref: "Manager"},
  },
  { timestamps: true }
);

export const AcmQuery = mongoose.model<IAcmQueryDetails>("AcmQuery", schema);

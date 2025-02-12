import mongoose from "mongoose";
import { IAcmDetails } from "./types/acm.types";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_location: {
      type: String,
      required: true,
    },
    joinedOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Acm = mongoose.model<IAcmDetails>("Acm", schema);

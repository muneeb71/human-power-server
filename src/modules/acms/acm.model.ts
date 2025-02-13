import mongoose, { Schema } from "mongoose";
import { IAcmDetails } from "./types/acm.types";

const schema = new mongoose.Schema(
  {
    login_role: { type: String, enum: ["acm"], default: "acm" },
    name: {
      type: String,
    },
    acmId: {
      type: String,
    },
    photo: {
      type: String
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    acm_location: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId, ref: "Client"
    },
    joinedOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Acm = mongoose.model<IAcmDetails>("Acm", schema);

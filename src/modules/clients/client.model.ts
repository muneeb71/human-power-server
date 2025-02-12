import mongoose from "mongoose";
import { IClientDetails } from "./types/client.types";

const schema = new mongoose.Schema(
  {
    companyName: {
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
    description: {
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

export const Client = mongoose.model<IClientDetails>("Client", schema);

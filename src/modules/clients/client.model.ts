import mongoose from "mongoose";
import { IClientDetails } from "./types/client.types";

const schema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    photo: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    description: {
      type: String,
    },
    company_location: {
      type: String,
    },
    company_logo: {
      type: String,
    },
    joinedOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Client = mongoose.model<IClientDetails>("Client", schema);

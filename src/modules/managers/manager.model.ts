import mongoose from "mongoose";
import { IManagerDetails } from "./types/manager.types";

const schema = new mongoose.Schema(
  {
    login_role: { type: String, enum: ["manager"], default: "manager" },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
    },
    contact: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Human Power","IT", "TP HR", "PM"],
    },
    allowed_permissions: {
      type: Number,
    },
 
  },
  { timestamps: true }
);

export const Manager = mongoose.model<IManagerDetails>("Manager", schema);

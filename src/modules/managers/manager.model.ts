import mongoose from "mongoose";
import { IManagerDetails } from "./types/manager.types";

const schema = new mongoose.Schema(
  {
    name: {
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
    },
    permissions: {
      createProfiles: {
        type: Boolean,
        default: false,
      },
      accessRequestedClasses: {
        type: Boolean,
        default: false,
      },
      rejectIncomingClassRequests: {
        type: Boolean,
        default: false,
      },
      deleteClasses: {
        type: Boolean,
        default: false,
      },
      editAndDeleteRequests: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

export const Manager = mongoose.model<IManagerDetails>("Manager", schema);

import mongoose from "mongoose";
import { ICandidateDetails } from "./types/candidate.types";


const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Candidate = mongoose.model<ICandidateDetails>("Candidate", schema);

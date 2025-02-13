import mongoose from "mongoose";
import { ICandidateDetails } from "../modules/candidates/types/candidate.types";

export interface ICandidateDocuments {
  candidateId: ICandidateDetails;
  name: string;
  size: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
    },
    name: {
      type: String,
    },
    size: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

export const CandidateDocuments = mongoose.model<ICandidateDocuments>("CandidateDocuments", schema);

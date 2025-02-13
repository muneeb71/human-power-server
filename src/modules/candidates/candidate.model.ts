import mongoose from "mongoose";
import { ICandidateDetails } from "./types/candidate.types";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    did: {
      type: String,
    },
    surname: {
      type: String,
    },
    photo: {
      type: String,
    },
    dob: {
      type: Date,
    },
    birthplace: {
      type: String,
    },
    email: { 
      type: String,
    },
    phoneNo: {
      type: String,
    },
    emergencyContactName: {
      type: String,
    },
    emergencyContactRelationship: {
      type: String,
    },
    emergencyContactPhoneNo: {
      type: String,
    },
    projectSelectedFor: {
      type: String,
    },
    joiningDate: {
      type: Date,
    },
    jobType: {
      type: String,
    },
    formerEmployee: {
      type: String,
    },
    workingHours: {
      type: String,
    },
    workingMode: {
      type: String,
    },
    previousExperience: {
      type: String,
    },
    professionOfCandidate: {
      type: String,
    },
    educationLevel: {
      type: String,
    },
    leanredGermanHow: {
      type: String,
    },
    recruitmentRepName: {
      type: String,
    },
    operaitonsRepName: {
      type: String,
    },
    englishLevel: {
      type: String,
    },
    germanLevel: {
      type: String,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Candidate = mongoose.model<ICandidateDetails>("Candidate", schema);

import mongoose, { Schema } from "mongoose";
import {IClassesDetails } from "./types/classes.types";

const schema = new mongoose.Schema(
  {
    classId: {
      type: String,
    },
    className:{
      type: String,
    },
    description:{
      type: String,
      default: "No Description",
    },
    status: {
      type: String,
      enum: ["pending", "approved" , "rejected"],
      default: "pending",
    },
    reqBy: {
      type: Schema.Types.ObjectId, ref: "Acm"
    },
    approvedBy: {
      type: Schema.Types.ObjectId, ref: "User"
    },
    approvedByHumanPower: {
      type: Boolean,
      default: false
    },
    approvedByIT: {
      type: Boolean,
      default: false
    },
    approvedByTPHR: {
      type: Boolean,
      default: false
    },
    approvedByPM: {
      type: Boolean,
      default: false
    },
    client: {
      type: Schema.Types.ObjectId, ref: "Client"
    },
    joinDate: {
      type: Date,
    },
    resourcesRequired: {
      type: Number,
    },
    projectName:{
      type: String,
    },
    trainingStartDate:{
      type: String,
    },
    trainingEndDate:{
      type: String,
    },
    operatingHours:{
      type: String,
    },
    trainingLocation:{
      type: String,
    },
    grossFixedSalary:{
      type: String,
    },
    bonusRange:{
      type: String,
    },
    comments:{
      type: String,
    },
    workingDays:[{
      type: String,
    }],
    partTimersAllowed:{
      type: Boolean,
    },
    trainingAtHome:{
      type: Boolean,
    },
    workAtHome:{
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const Class = mongoose.model<IClassesDetails>("Class", schema);

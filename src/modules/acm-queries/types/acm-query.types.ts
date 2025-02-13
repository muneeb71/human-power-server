import { Types } from "mongoose";
import { IAcmDetails } from "../../acms/types/acm.types";
import { IUserDetails } from "../../user/types/user.types";

export interface IAcmQueryDetails {
  question: string;
  answer: string;
  askedBy: Types.ObjectId | IAcmDetails;
  answeredBy: Types.ObjectId | IUserDetails;
  createdAt: Date;
  updatedAt: Date;
}

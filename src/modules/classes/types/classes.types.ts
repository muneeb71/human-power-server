import { Types } from "mongoose";
import { IClientDetails } from "../../clients/types/client.types";
import { IAcmDetails } from "../../acms/types/acm.types";
import { IUserDetails } from "../../user/types/user.types";

export interface IClassesDetails{
    classId: string;
    className: string;
    description: string;
    status: "approved" | "pending" | "rejected";
    reqBy: Types.ObjectId | IAcmDetails;
    approvedBy: IManagerApproval[];
    approvedByHumanPower: boolean;
    approvedByIT: boolean;
    approvedByTPHR: boolean;
    approvedByPM: boolean;
    resourcesRequired: number;
    client: Types.ObjectId | IClientDetails;
    projectName: string;
    trainingStartDate:  Date;
    trainingEndDate: Date;
    operatingHours: string;
    trainingLocation: string;
    grossFixedSalary: string;
    bonusRange: string;
    comments: string;
    workingDays: string[];
    partTimersAllowed: boolean;
    trainingAtHome: boolean;
    joinDate: Date;
    workAtHome: boolean;
}

export interface IManagerApproval {
    managerId: Types.ObjectId;
    role: "Human Power" | "IT" | "TP HR" | "PM";  
    approved: boolean;  
  }
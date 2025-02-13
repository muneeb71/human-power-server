import { Types } from "mongoose";
import { IClientDetails } from "../../clients/types/client.types";

export interface IAcmDetails {
    login_role: string;
    name: string;
    acmId: string;
    photo: string;
    email: string;
    phoneNo: string;
    password: string;
    address: string;
    acm_location: string;
    createdAt: Date;
    updatedAt: Date;
    joinedOn: Date;
    company: Types.ObjectId | IClientDetails;
}
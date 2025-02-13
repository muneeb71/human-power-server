import { Types } from "mongoose";
import { IClassesDetails } from "../../classes/types/classes.types";
import { ICandidateDetails } from "../../candidates/types/candidate.types";

export interface IClassReourcesDetails{
    class: Types.ObjectId | IClassesDetails;
    candidate: Types.ObjectId | ICandidateDetails;
    status: "hired" | "terminated" | "withdrawn";
}

export interface ClassResourceData{
    class: string;
    candidates: string[];
}
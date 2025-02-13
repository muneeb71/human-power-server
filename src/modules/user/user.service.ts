import { compare, hash } from "bcryptjs";
import { IUser, User } from "./user.model";
import { ILoginTypes, IRegisterTypes } from "./types/user.types";
import { Class } from "../classes/classes.model";
import { Manager } from "../managers/manager.model";
import { AcmQuery } from "../acm-queries/acm-query.model";
import { Acm } from "../acms/acm.model";
import { Candidate } from "../candidates/candidate.model";

export const getAllService = async () => await User.find();

export const createService = async (data: IRegisterTypes) => {
  const hashPassword = await hash(data.password, 10);

  return await User.create({ ...data, password: hashPassword });
};

export const updateService = async (id: string, data: Partial<IUser>) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

export const loginService = async (data: ILoginTypes) => {
  let user = await User.findOne({ email: data.email });
  if (!user) {
    user = await Manager.findOne({ email: data.email });

    if (!user) {
      user = await Acm.findOne({ email: data.email });
      if (!user) {
        throw new Error("User not found");
      } 
    }
  }

  const isMatch = await compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Password");
  }

  return user;
};

export const getCardsDataService = async () => {
  const [
    totalClasses,
    managers,
    pendingQueries,
    acms,
    acceptedClasses,
    rejectedClasses,
  ] = await Promise.all([
    Class.countDocuments(),
    Manager.countDocuments(),
    AcmQuery.countDocuments({ answer: { $exists: false } }),
    Acm.countDocuments(),
    Class.countDocuments({ status: "approved" }),
    Class.countDocuments({ status: "rejected" }),
  ]);

  return {
    totalClasses,
    managers,
    pendingQueries,
    acms,
    acceptedClasses,
    rejectedClasses,
  };
};

export const getAcmCardsFDataService = async (acmId: string) => {
  if (!acmId) {
    throw new Error("ACM ID is required");
  }

  const [candidates, pendingClasses, acceptedClasses] = await Promise.all([
    Candidate.countDocuments(),
    Class.countDocuments({ reqBy: acmId , status: "pending" }),
    Class.countDocuments({ reqBy: acmId, status: "approved" }),
  ]);

  return { candidates, pendingClasses, acceptedClasses };
};

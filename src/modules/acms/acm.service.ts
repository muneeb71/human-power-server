import { compare, hash } from "bcryptjs";
import { Acm } from "./acm.model";
import { IAcmDetails } from "./types/acm.types";

export const getAllService = async () => await Acm.find().populate("company");

export const createService = async (data: any) =>{
  const hashPassword = await hash(data.password, 10);
  return await Acm.create({ ...data, password: hashPassword });
} 

export const updateService = async (id: string, data: Partial<IAcmDetails>) => {
  const updatedAcm = await Acm.findByIdAndUpdate(id, data, { new: true });
  if (!updatedAcm) {
    throw new Error("Acm not found");
  }
  return updatedAcm;
};

export const deleteService = async (id: string) => {
  const deletedAcm = await Acm.findByIdAndDelete(id);
  if (!deletedAcm) {
    throw new Error("Acm not found");
  }
  return deletedAcm;
};

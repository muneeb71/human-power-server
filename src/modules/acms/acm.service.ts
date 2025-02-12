import { Acm } from "./acm.model";
import { IAcmDetails } from "./types/acm.types";

export const getAllService = async () => await Acm.find();

export const createService = async (data: any) => await Acm.create(data);

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

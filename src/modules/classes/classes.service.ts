import { Class } from "./classes.model";
import { IClassesDetails } from "./types/classes.types";

export const getAllService = async () => await Class.find().populate('reqBy').populate('approvedBy').populate('client');

export const createService = async (data: IClassesDetails) => await Class.create(data);

export const getClassesByAcmIdService = async (id: string) => await Class.find({ reqBy: id }).populate('reqBy').populate('approvedBy').populate('client');

export const updateService = async (id: string, data: Partial<IClassesDetails>) => {
  const updatedClass = await Class.findByIdAndUpdate(id, data, { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
};

export const approvedByHumanPowerService = async (id: string) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {approvedByHumanPower: true} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
}

export const approvedByITService = async (id: string) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {approvedByIT: true} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
}

export const approvedByTPHRService = async (id: string) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {approvedByTPHR: true} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
}

export const approvedByPMService = async (id: string) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {approvedByPM: true} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
}


export const updateAcceptService = async (id: string, ) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {status: "approved"} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
};

export const updateRejectService = async (id: string,) => {
  const updatedClass = await Class.findByIdAndUpdate(id, {status: "rejected"} , { new: true });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
};

export const deleteService = async (id: string) => {
  const deletedClass = await Class.findByIdAndDelete(id);
  if (!deletedClass) {
    throw new Error("Class not found");
  }
  return deletedClass;
};

export const getPendingStatusClasses = async () => await Class.find({status: "pending"}).populate('reqBy').populate('approvedBy').populate('client');
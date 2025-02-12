import { Class } from "./classes.model";
import { IClassesDetails } from "./types/classes.types";

export const getAllService = async () => await Class.find();

export const createService = async (data: IClassesDetails) => await Class.create(data);

export const updateService = async (id: string, data: Partial<IClassesDetails>) => {
  const updatedClass = await Class.findByIdAndUpdate(id, data, { new: true });
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

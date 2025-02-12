import { Manager } from "./manager.model";
import { IManagerDetails } from "./types/manager.types";

export const getAllService = async () => await Manager.find();

export const createServicve = async (data: IManagerDetails) =>
  await Manager.create(data);

export const getByIdService = async (id: string) =>
  await Manager.findById(id);

export const updateService = async (id: string, data: Partial<IManagerDetails>) => {
  const updatedManager = await Manager.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedManager) {
    throw new Error("Manager not found");
  }
  return updatedManager;
};

export const deleteService = async (id: string) => {
  const deletedManager = await Manager.findByIdAndDelete(id);
  if (!deletedManager) {
    throw new Error("Manager not found");
  }
  return deletedManager;
};

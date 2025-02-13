import { Acm } from "../acms/acm.model";
import { Client } from "./client.model";
import { IClientDetails } from "./types/client.types";

export const getAllService = async () => await Client.find();

export const createService = async (data: IClientDetails) =>
  await Client.create(data);

export const updateService = async (id: string, data: Partial<IClientDetails>) => {
  const updatedClient = await Client.findByIdAndUpdate(id, data, { new: true });

  if (!updatedClient) {
    throw new Error("Client not found");
  }
  return updatedClient;
};

export const deleteService = async (id: string) => {
  const deleteAcm = await Acm.deleteMany({ company: id });
  const deletedClient = await Client.findByIdAndDelete(id);

  if (!deletedClient) {
    throw new Error("Client not found");
  }
  return deletedClient;
}

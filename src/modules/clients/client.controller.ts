import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  updateService,
} from "./client.service";

//  -----------VIEW ALL CLIENTS----------
export const getAll = TryCatch(async (req, res) => {
  const clients = await getAllService();
  return res.status(200).json({
    success: true,
    data: clients,
    message: "All clients fetched successfully",
  });
});

//  -----------ADD A CLIENT----------
export const create = TryCatch(async (req, res) => {
  const newClient = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newClient,
  });
});

//  -----------UPDATE A CLIENT----------
export const updateById= TryCatch(async (req, res) => {
  const updatedClient = await updateService(req.params.id, req.body);

  return res.status(200).json({
    success: true,
    data: updatedClient,
    message: "Class updated successfully",
  });
});

//  -----------DELETE A CLIENT----------
export const deleteById = TryCatch(async (req, res) => {
  const deletedClient = await deleteService(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Client deleted successfully",
  });
});

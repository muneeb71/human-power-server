import { TryCatch } from "../../middleware/trycatch";
import {
  createServicve,
  deleteService,
  getAllService,
  getByIdService,
  updateService,
} from "./manager.service";

//  -----------VIEW ALL MANAGERS----------
export const getAll = TryCatch(async (req, res) => {
  const managers = await getAllService();

  return res.status(200).json({
    success: true,
    data: managers,
    message: "All managers fetched successfully",
  });
});

//  -----------ADD A MANAGER----------
export const create = TryCatch(async (req, res) => {
  const newManager = await createServicve(req.body);
  return res.status(201).json({
    success: true,
    data: newManager,
  });
});

export const getById = TryCatch(async (req, res) => {
  const manager = await getByIdService(req.params.id);
  return res.status(200).json({
    success: true,
    data: manager,
  });
});

//  -----------UPDATE A MANAGER----------
export const updateById = TryCatch(async (req, res) => {
  const updatedManager = await updateService(req.params.id, req.body);

  return res.status(200).json({
    success: true,
    data: updatedManager,
  });
});

//  -----------DELETE A MANAGER----------
export const deleteById = TryCatch(async (req, res) => {
  const deletedManager = await deleteService(req.params.id);

  return res.status(200).json({
    success: true,
    message: "Manager deleted successfully",
  });
});

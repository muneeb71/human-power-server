import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  updateService,
} from "./acm.service";

//  -----------VIEW ALL ACM----------
export const getAll = TryCatch(async (req , res) => {
  const acms = await getAllService();
  return res.status(200).json({
    success: true,
    data: acms,
    message: "All acms fetched successfully",
  });
});

//  -----------ADD OR CREATE AN ACM----------
export const create = TryCatch(async (req, res) => {
  const newAcm = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newAcm,
  });
});

//  -----------UPDATE A ACM----------
export const updateById = TryCatch(async (req, res) => {
  const updatedAcm = await updateService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedAcm,
      message: "Acm updated successfully",
    });
});

//  -----------DELETE A ACM----------
export const deleteById = TryCatch(async (req, res) => {
  const deletedAcm = await deleteService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Acm deleted successfully",
    });
});

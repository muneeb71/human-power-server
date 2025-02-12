import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  updateService,
} from "./classes.service";

//  -----------VIEW ALL CLASS----------
export const getAll = TryCatch(async (req , res) => {
  const Classes = await getAllService();
  return res.status(200).json({
    success: true,
    data: Classes,
    message: "All Classes fetched successfully",
  });
});

//  -----------ADD OR CREATE A CLASS----------
export const create = TryCatch(async (req , res) => {
  const newClass = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newClass,
  });
});

//  -----------UPDATE A CLASS----------
export const updateById = TryCatch(async (req , res) => {
  const updatedClass = await updateService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------DELETE A CLASS----------
export const deleteById = TryCatch(async (req , res) => {
  const deletedClass = await deleteService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Class deleted successfully",
    });
});

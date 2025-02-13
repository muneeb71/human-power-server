import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  getByClassIdService,
  updateHiredService,
  updateService,
  updateTerminatedService,
  updateWithdrawnService,
} from "./class-resources.service";

//  -----------VIEW ALL CLASS RESOURCES----------
export const getAll = TryCatch(async (req , res) => {
  const Classes = await getAllService();
  return res.status(200).json({
    success: true,
    data: Classes,
    message: "All Classes fetched successfully",
  });
});

//  -----------VIEW CLASS RESOURCES BY CLASS ID----------
export const getResourceByClassId = TryCatch(async (req , res) => {
  const Resources = await getByClassIdService(req.params.id);
  return res.status(200).json({
    success: true,
    data: Resources,
    message: "All resources fetched successfully",
  });
})

//  -----------ADD OR CREATE A CLASS RESOURCE----------
export const create = TryCatch(async (req , res) => {
  const newClass = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newClass,
  });
});

//  -----------HIred A CLASS RESOURCE----------
export const hiredById = TryCatch(async (req , res) => {
  const updatedResource = await updateHiredService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedResource,
      message: "Resource updated successfully",
    });
});

//  -----------WITHDRAW A CLASS RESOURCE----------
export const withdrawById = TryCatch(async (req , res) => {
  const updatedResource = await updateWithdrawnService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedResource,
      message: "Resource updated successfully",
    });
});

//  -----------TERMINATE A CLASS RESOURCE----------
export const terminateById = TryCatch(async (req , res) => {
  const updatedResource = await updateTerminatedService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedResource,
      message: "Resource updated successfully",
    });
}); 

//  -----------UPDATE A CLASS RESOURCE----------
export const updateById = TryCatch(async (req , res) => {
  const updatedClass = await updateService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------DELETE A CLASS RESOURCE----------
export const deleteById = TryCatch(async (req , res) => {
  const deletedClass = await deleteService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Class deleted successfully",
    });
});

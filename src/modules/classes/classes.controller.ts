import { TryCatch } from "../../middleware/trycatch";
import {
  approvedByHumanPowerService,
  approvedByITService,
  approvedByPMService,
  approvedByTPHRService,
  createService,
  deleteService,
  getAllService,
  getClassesByAcmIdService,
  getPendingStatusClasses,
  updateAcceptService,
  updateRejectService,
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

//  -----------VIEW ALL CLASSES BY ACM ID----------
export const getClassesByAcmId = TryCatch(async (req , res) => {
  const Classes = await getClassesByAcmIdService(req.params.id);
  return res.status(200).json({
    success: true,
    data: Classes,
    message: "All Classes for specific ACM fetched successfully",
  });
});

//  -----------VIEW ONLY THE PENDING STATUS CLASSES----------
export const getPending = TryCatch(async (req , res) => {
  const Classes = await getPendingStatusClasses();
  return res.status(200).json({
    success: true,
    data: Classes,
    message: "All pending Classes fetched successfully",
  });
})

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

//  -----------ACCEPT A CLASS----------
export const acceptById = TryCatch(async (req , res) => {
  const updatedClass = await updateAcceptService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------REJECT A CLASS----------
export const rejectById = TryCatch(async (req , res) => {
  const updatedClass = await updateRejectService(req.params.id);
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

//  -----------APPROVED BY HUMAN POWER----------
export const approvedByHumanPower = TryCatch(async (req , res) => {
  const updatedClass = await approvedByHumanPowerService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------APPROVED BY IT----------
export const approvedByIT = TryCatch(async (req , res) => {
  const updatedClass = await approvedByITService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------APPROVED BY TP HR----------
export const approvedByTPHR = TryCatch(async (req , res) => {
  const updatedClass = await approvedByTPHRService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});

//  -----------APPROVED BY PM----------
export const approvedByPM = TryCatch(async (req , res) => {
  const updatedClass = await approvedByPMService(req.params.id);
    return res.status(200).json({
      success: true,
      data: updatedClass,
      message: "Class updated successfully",
    });
});
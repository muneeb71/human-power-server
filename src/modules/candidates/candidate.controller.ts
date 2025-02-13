import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  updateService,
} from "./candidate.service";

//  -----------VIEW ALL Candidate----------
export const getAll = TryCatch(async (req , res) => {
  const Candidates = await getAllService();
  return res.status(200).json({
    success: true,
    data: Candidates,
    message: "All Candidates fetched successfully",
  });
});

//  -----------ADD OR CREATE AN Candidate----------
export const create = TryCatch(async (req , res) => {
  const newCandidate = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newCandidate,
  });
});

//  -----------UPDATE A Candidate----------
export const updateById = TryCatch(async (req , res) => {
  const updatedCandidate = await updateService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedCandidate,
      message: "Candidate updated successfully",
    });
});

//  -----------DELETE A Candidate----------
export const deleteById = TryCatch(async (req , res) => {
  const deletedCandidate = await deleteService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Candidate deleted successfully",
    });
});

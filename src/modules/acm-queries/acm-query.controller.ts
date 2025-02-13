import { TryCatch } from "../../middleware/trycatch";
import {
  createService,
  deleteService,
  getAllService,
  getByAcmIdService,
  getUnansweredAdminQueriesService,
  updateService,
} from "./acm-query.service";

//  -----------VIEW ALL ACM QUERIES----------
export const getAll = TryCatch(async (req , res) => {
  const acms = await getAllService();
  return res.status(200).json({
    success: true,
    data: acms,
    message: "All acm queries fetched successfully",
  });
});

export const getPending = TryCatch(async (req , res) => {
  const acms = await getUnansweredAdminQueriesService();
  return res.status(200).json({
    success: true,
    data: acms,
    message: "All pending acm queries fetched successfully",
  });
});

//  -----------ADD OR CREATE AN ACM QUERY----------
export const create = TryCatch(async (req, res) => {
  const newAcm = await createService(req.body);
  return res.status(201).json({
    success: true,
    data: newAcm,
  });
});

//  -----------VIEW QUERIES BY ACM ID----------
export const getQueriesByAcmId = TryCatch(async (req , res) => {
  const Queries = await getByAcmIdService(req.params.id);
  return res.status(200).json({
    success: true,
    data: Queries,
    message: "All queries fetched successfully",
  });
})

//  -----------UPDATE AN ACM QUERY----------
export const updateById = TryCatch(async (req, res) => {
  const updatedAcm = await updateService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedAcm,
      message: "Acm query updated successfully",
    });
});

//  -----------DELETE AN ACM QUERY----------
export const deleteById = TryCatch(async (req, res) => {
  const deletedAcm = await deleteService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Acm query deleted successfully",
    });
});

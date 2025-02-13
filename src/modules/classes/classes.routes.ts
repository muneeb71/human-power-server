import express from "express";
import {
  acceptById,
  approvedByHumanPower,
  approvedByIT,
  approvedByPM,
  approvedByTPHR,
  create,
  deleteById,
  getAll,
  getClassesByAcmId,
  getPending,
  rejectById,
  updateById,
} from "./classes.controller";
import { isAuthenticated } from "../../middleware/isAuthenticated";

const app = express.Router();

app.post("/", isAuthenticated, create);

app.get("/", isAuthenticated, getAll);

app.get("/class/pending", isAuthenticated, getPending);

app.get("/:id", isAuthenticated, getClassesByAcmId);

app.put("/:id", isAuthenticated, updateById);

app.patch("/:id/humanpower-approved", isAuthenticated, approvedByHumanPower);
app.patch("/:id/it-approved", isAuthenticated, approvedByIT);
app.patch("/:id/tphr-approved", isAuthenticated, approvedByTPHR);
app.patch("/:id/pm-approved", isAuthenticated, approvedByPM);

app.patch("/:id/accept", isAuthenticated, acceptById);

app.patch("/:id/reject", isAuthenticated, rejectById);

app.delete("/:id", isAuthenticated, deleteById);

export default app;

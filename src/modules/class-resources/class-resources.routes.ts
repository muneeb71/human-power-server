import express from 'express'
import { create, deleteById, getAll,getResourceByClassId,hiredById,terminateById,updateById, withdrawById } from './class-resources.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';
import { authorizeRoles } from '../../middleware/authorizeRoles';

const app = express.Router();

app.post("/", isAuthenticated,create)

app.get("/", isAuthenticated,getAll)

app.get("/class/:id",isAuthenticated, getResourceByClassId)

app.patch("/:id/hired",isAuthenticated, hiredById)

app.patch("/:id/withdrawn",isAuthenticated, withdrawById)

app.patch("/:id/terminated", isAuthenticated, terminateById)

app.put("/:id", isAuthenticated, updateById)

app.delete("/:id",isAuthenticated, authorizeRoles(["Human Power", "TP HR", "PM"]), deleteById)

export default app;
import express from 'express'
import { create, getAll, deleteById,updateById } from './client.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';
import { authorizeRoles } from '../../middleware/authorizeRoles';

const app = express.Router();

app.post("/", isAuthenticated,  create)

app.get("/", isAuthenticated,  getAll)

app.put("/:id", isAuthenticated,  updateById)

app.delete("/:id",isAuthenticated , authorizeRoles(["Human Power" , "TP HR", "PM"]), deleteById)

export default app;
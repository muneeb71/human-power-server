import express from 'express'
import { create, deleteById, getAll, updateById } from './acm.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';
import { authorizeRoles } from '../../middleware/authorizeRoles';

const app = express.Router();

app.post("/", isAuthenticated, authorizeRoles(["Human Power" ,"IT", "TP HR", "PM"]), create)

app.get("/",isAuthenticated, authorizeRoles(["Human Power" ,"IT", "TP HR", "PM"]), getAll)

app.put("/:id", isAuthenticated, authorizeRoles(["Human Power" ,"IT", "TP HR", "PM"]), updateById)

app.delete("/:id",isAuthenticated, authorizeRoles(["Human Power", "TP HR", "PM"]),deleteById)

export default app;
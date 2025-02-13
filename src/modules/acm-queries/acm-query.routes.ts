import express from 'express'
import { create, deleteById, getAll, getPending, getQueriesByAcmId, updateById } from './acm-query.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';

const app = express.Router();

app.post("/", isAuthenticated ,create)

app.get("/", isAuthenticated ,getAll)

app.get("/:id", isAuthenticated ,getQueriesByAcmId)

app.get("/pending",isAuthenticated ,getPending)

app.put("/:id", isAuthenticated, updateById)

app.delete("/:id", isAuthenticated,deleteById)

export default app;
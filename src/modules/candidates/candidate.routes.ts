import express from 'express'
import { create, deleteById, getAll, updateById } from './candidate.controller';

const app = express.Router();

app.post("/", create)

app.get("/", getAll)

app.put("/:id", updateById)

app.delete("/:id", deleteById)

export default app;
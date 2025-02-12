import express from 'express'
import { create, getAll, login } from './user.controller';

const app = express.Router();

app.post("/", create)

app.post("/login", login)

app.get("/", getAll)

export default app;
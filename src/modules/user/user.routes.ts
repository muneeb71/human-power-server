import express from 'express'
import { create, getAcmCardsData, getAll, getCardsData, login, updateById } from './user.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';

const app = express.Router();

app.post("/", isAuthenticated, create)

app.put("/:id", isAuthenticated, updateById)

app.post("/login", login)

app.get("/", isAuthenticated, getAll)

app.get("/cards",isAuthenticated,  getCardsData)

app.get("/acm-cards/:id",isAuthenticated,  getAcmCardsData)

export default app;
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import mongoose from "mongoose";
import {acmRoutes} from "./modules/acms"
import { managerRoutes } from "./modules/managers";
import { clientRoutes } from "./modules/clients";
import { userRoutes } from "./modules/user";
import { candidateRoutes } from "./modules/candidates";
import { classesRoutes } from "./modules/classes";


dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

const server = http.createServer(app);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/clients", clientRoutes);
app.use("/api/v1/managers", managerRoutes);
app.use("/api/v1/acms", acmRoutes);
app.use("/api/v1/candidates", candidateRoutes);
app.use("/api/v1/classes", classesRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API working FINE 1");
});

server.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

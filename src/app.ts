import express, { Request, Response } from "express";
import http, { Server } from "http";
import dotenv from "dotenv";
import cors from "cors";

import { dbConnect } from "./config/db";

import {
  acmRoutes,
  userRoutes,
  clientRoutes,
  classesRoutes,
  managerRoutes,
  candidateRoutes,
  acmQueryRoutes,
  classResourcesRoutes,
} from "./modules";

dotenv.config();
const PORT = parseInt(process.env.PORT!) || 4000;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3002",
      "http://localhost:3001",
      "http://localhost:3000",
      "http://192.168.18.118:3000",
      "http://192.168.18.118:3001",
      "https://humanpower-erf-integration.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const server = http.createServer(app);


app.use(express.json());

dbConnect();

app.use("/api/v1/acms", acmRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/clients", clientRoutes);
app.use("/api/v1/classes", classesRoutes);
app.use("/api/v1/managers", managerRoutes);
app.use("/api/v1/candidates", candidateRoutes);
app.use("/api/v1/acmQueries", acmQueryRoutes);
app.use("/api/v1/classResources", classResourcesRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API working FINE 1");
});

app.listen(PORT, "0.0.0.0" ,() => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

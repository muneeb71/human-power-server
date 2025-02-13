import mongoose from "mongoose";

export const dbConnect = () =>
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch(() => {
      console.log("Connection Failed");
    });

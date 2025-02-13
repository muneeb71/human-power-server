import mongoose from "mongoose";

export interface IUser extends Document {
  login_role: string;
  name: string;
  photo: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema = new mongoose.Schema(
  {
    login_role: {type : String, enum: ['admin'], default: 'admin'},
    name: {
      type: String,
    },
    role: {
      type: String,
      default: "Human Power",
    },
    photo: {
      type: String,  
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);

import { compare, hash } from "bcryptjs";
import { User } from "./user.model";
import { ILoginTypes, IRegisterTypes} from "./types/user.types";

export const getAllService = async () => await User.find();

export const createService = async (data: IRegisterTypes) => {
  const hashPassword = await hash(data.password, 10);

  return await User.create({ ...data, password: hashPassword });
};

export const loginService = async (data : ILoginTypes) => {
  let user = await User.findOne({ email: data.email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Password");
  }

  return user;
};

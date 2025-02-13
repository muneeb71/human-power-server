import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../modules/user/user.model";
import { Acm } from "../modules/acms/acm.model";
import { Manager } from "../modules/managers/manager.model";


interface AuthRequest extends Request {
  user?: any;
}

export const isAuthenticated = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, "jwtsecret") as { _id: string; login_role: string };

    let user;
    if (decoded.login_role === "admin") user = await User.findById(decoded._id);
    else if (decoded.login_role === "manager") user = await Manager.findById(decoded._id);
    else if (decoded.login_role === "acm") user = await Acm.findById(decoded._id);
    // const user = await User.findById(decoded._id).select("password");
    if (!user) {
      res.status(401).json({ message: "Unauthorized: User not found" });
      return;
    }
    req.user = user;
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

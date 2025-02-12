import Profile from "../modules/profile/profile.model";

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
    io: any;
  }
  interface Response {
    customProperty?: string;
  }
}

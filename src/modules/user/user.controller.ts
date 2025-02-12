import { TryCatch } from "../../middleware/trycatch";
import { sendToken } from "../../utils/token";
import { createService, getAllService, loginService } from "./user.service";

//  -----------CREATE A USER----------
export const create = TryCatch(async (req, res) => {
  const user = await createService(req.body);
  sendToken(user, res, `Welcome, ${user.name}`, 200, false);
});

//   -----------LOGIN USER----------
export const login = TryCatch(async (req, res) => {
    let user = await loginService(req.body)
    sendToken(user, res, `Welcome, ${user.name}`, 200, false);

});

//  -----------VIEW ALL USERS----------
export const getAll = TryCatch(async (req, res) => {
  const users = await getAllService();
  return res.status(200).json({
    success: true,
    data: users,
  });
});

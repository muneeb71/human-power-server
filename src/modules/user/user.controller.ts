import { TryCatch } from "../../middleware/trycatch";
import { sendToken } from "../../utils/token";
import { createService, getAcmCardsFDataService, getAllService, getCardsDataService, loginService, updateService } from "./user.service";

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

//  -----------UPDATE A USER----------
export const updateById = TryCatch(async (req, res) => {
  const updatedUser = await updateService(req.params.id, req.body);

  return res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

//  -----------VIEW ALL USERS----------
export const getAll = TryCatch(async (req, res) => {
  const users = await getAllService();
  return res.status(200).json({
    success: true,
    data: users,
  });
});

//  -----------GET REPORTING CARDS DATA----------
export const getCardsData = TryCatch(async (req, res) => {
  const cardsData = await getCardsDataService();
  return res.status(200).json({
    success: true,
    data: cardsData,
  });
});

//  -----------GET ACM CARDS DATA----------
export const getAcmCardsData = TryCatch(async (req, res) => {
  const cardsData = await getAcmCardsFDataService(req.params.id);
  return res.status(200).json({
    success: true,
    data: cardsData,
  });
});


import jwt from "jsonwebtoken";

export const sendToken = (
  user: any,
  res: any,
  message: string,
  statusCode = 200,
  check: boolean
) => {
  let token;
    token = jwt.sign({ _id: user._id, login_role: user.login_role }, "jwtsecret", {
      expiresIn: "1d",
    });
    res.status(statusCode).json({
      success: true,
      token,
      user,
      message,
    });
  // }
};

import { NextFunction, Request, Response } from 'express';

interface AuthRequest extends Request {
  user?: {
    role: string;
  };

}

export const authorizeRoles = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && roles.includes(req.user.role)) {
      next();
    } else {
      console.log("check the role:", req.user);
      res.status(403).json({ message: `Forbidden: ${req.user?.role} does not have access to this resource.` });
    }
  };
}; 

   
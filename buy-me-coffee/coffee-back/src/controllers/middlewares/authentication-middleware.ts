import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const authenticationMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Unauthenticated" });
    return;
  }

  try {
    const { userId } = jwt.verify(token, process.env.SECRET) as {
      userId: string;
    };
    req.userId = userId;
    next();
  } catch (error) {
    res.status(500).json({ message: "Invalid token", error });
  }
};

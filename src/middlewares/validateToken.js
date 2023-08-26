import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.user = user;
  });

  next();
};
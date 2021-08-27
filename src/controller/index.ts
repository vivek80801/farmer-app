import crypto from "crypto";
import { Request, Response } from "express";
import { myUser } from "../controller/services/user";

export const getIndex = (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ msg: "Hello world" });
};

export const postIndex = (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;
  const newPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const newUser = new myUser.MyUser(name, email, newPassword);
  newUser.save();
  res.json({ msg: "ok" });
};

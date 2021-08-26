import { Request, Response } from "express";

export const getLogIn = (req: Request, res: Response) => {
  res.json({ msg: "hello from log in" });
};

export const postLogIn = (req: Request, res: Response) => {
  const { name, password }: { name: string; password } = req.body;
  res.json({ msg: "ok" });
};

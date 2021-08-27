import { NextFunction, Request, Response } from "express";
import passport from "passport";

export const getLogIn = (req: Request, res: Response) => {
  res.json({ msg: "hello from log in" });
};

export const postLogIn = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", {
    failureRedirect: "/loginfail",
    successRedirect: "/dashboard",
  })(req, res, next);
};

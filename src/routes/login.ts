import express from "express";
import { getLogIn, postLogIn } from "../controller/login";

export const logInRouter = express.Router();

logInRouter.get("/", getLogIn);
logInRouter.post("/", postLogIn);

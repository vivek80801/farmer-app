import express from "express";
import { getIndex, postIndex } from "../controller/index";

export const router = express.Router();

router.get("/", getIndex);

router.post("/", postIndex);

router.get("/loginfail", (req, res) => {
  res.json({ msg: "log in failed" });
});

router.get("/dashboard", (req, res) => {
  res.json({ msg: "welcome to dashboard" });
});

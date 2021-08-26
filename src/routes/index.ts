import express from "express";
import { getIndex, postIndex } from "../controller/index";

export const router = express.Router();

router.get("/", getIndex);

router.post("/", postIndex);

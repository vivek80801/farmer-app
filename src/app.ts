import express, { NextFunction } from "express";
import { router } from "./routes/index";
import { logInRouter } from "./routes/login";

export const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  next();
});

app.use("/", router);
app.use("/login", logInRouter);

app.use((req, res, next) => {
  res.json({ msg: "not found" });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    if (err) {
      res.json({ msg: "something went wrong" });
    } else {
      next();
    }
  }
);

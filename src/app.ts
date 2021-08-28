import express from "express";
import passport from "passport";
import session from "express-session";
import { router } from "./routes/index";
import { logInRouter } from "./routes/login";
import { myPassport } from "./controller/services/microservices/passport";

export const app = express();

myPassport(passport);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  next();
});

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);
app.use("/login", logInRouter);

app.use((req, res, next) => {
  res.json({ msg: "not found" });
});

//app.use(
//  (
//    err: Error,
//    req: express.Request,
//    res: express.Response,
//    next: express.NextFunction
//  ) => {
//    if (err) {
//      res.json({ msg: "something went wrong" });
//    } else {
//      next();
//    }
//  }
//);

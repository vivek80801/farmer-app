import crypto from "crypto";
import { PassportStatic } from "passport";
import { Strategy } from "passport-local";
import { UserModal } from "../../../modal/user";

export const myPassport = (passport: PassportStatic) => {
  passport.use(
    new Strategy((username, password, done) => {
      UserModal.findOne({ name: username })
        .then((user) => {
          if (!user) {
            return done("can not find user", false);
          } else {
            const newPassword = crypto
              .createHash("sha256")
              .update(password)
              .digest("hex");
            if (user.password === newPassword) {
              return done(null, user);
            } else {
              return done("password did not matched", false);
            }
          }
        })
        .catch((err) => console.log(err));
    })
  );
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((userId, done) => {
    UserModal.findById(userId)
      .then((user) => {
        if (!user) {
          return done("can not find user", false);
        } else {
          return done(null, user);
        }
      })
      .catch((err) => console.log(err));
  });
};

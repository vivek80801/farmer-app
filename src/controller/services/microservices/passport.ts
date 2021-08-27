import crypto from "crypto";
import { PassportStatic } from "passport";
import { Strategy } from "passport-local";
import { UserModal } from "../../../modal/user";

export const myPassport = (passport: PassportStatic) => {
  passport.use(
    new Strategy((username, password, done) => {
      UserModal.findOne({ username: username })
        .then((user) => {
          if (!user) {
            console.log("can not find user");
            return done(JSON.stringify({ msg: "can not find user" }), false);
          } else {
            const newPassword = crypto
              .createHash("sha256")
              .update(password)
              .digest("hex");
            console.log("new passport password => " + newPassword);
            if (user.password === newPassword) {
              console.log("password matched!!");
              return done(null, user);
            } else {
              console.log("password did not matched");
              return done(
                JSON.stringify({ msg: "password did not matched" }),
                false
              );
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
          console.log("can not find user in deserializeUser");
          return done(JSON.stringify({ msg: "can not find user" }), false);
        } else {
          return done(null, user);
        }
      })
      .catch((err) => console.log(err));
  });
};

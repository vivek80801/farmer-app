import { UserModal } from "../../../modal/user";

export const saveUserToDatabase = (
  username: string,
  email: string,
  password: string
) => {
  const newUser = new UserModal({
    username: username,
    email: email,
    password: password,
  });
  newUser.save();
};

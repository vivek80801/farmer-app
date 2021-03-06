import { saveUserToDatabase } from "./microservices/user";

export module myUser {
  export class MyUser {
    username: string;
    email: string;
    password: string;
    constructor(username: string, email: string, password: string) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    save() {
      saveUserToDatabase(this.username, this.email, this.password);
    }
  }
}

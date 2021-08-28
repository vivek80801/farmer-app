import React from "react";
import Link from "next/link";
import form from "../styles/form.module.css";

const LogIn: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <form
        className={form.desktop}
        onSubmit={(e) => {
          e.preventDefault();
          (async () => {
            try {
              const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  username: username,
                  password: password,
                }),
              });
              const data = await res.json();
              console.log(data);
            } catch (err) {
              console.log(err);
            }
          })();
        }}
      >
        <h1 style={{ color: "#fff", textTransform: "capitalize" }}>log in</h1>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Enter your username"}
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Enter your password"}
          required
        />
        <input type="submit" value="login" />
      </form>
      <Link href="/">Go back</Link>
    </>
  );
};

export default LogIn;

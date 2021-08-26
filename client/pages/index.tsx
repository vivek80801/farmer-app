import React from "react";
import Link from "next/link";
import form from "../styles/form.module.css";

const Home: React.FC = (): JSX.Element => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <form
        className={form.desktop}
        onSubmit={(e) => {
          e.preventDefault();
          (async () => {
            try {
              const res = await fetch("http://localhost:5000/", {
                method: "POST",
                headers: {
                  Accept: "text/plain */*",
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password,
                }),
              });
              const data = await res.json();
              console.log(data);
            } catch (err) {
              console.log("error => " + err);
            }
          })();
        }}
      >
        <h1 style={{ color: "#fff", textTransform: "capitalize" }}>
          sign form
        </h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your username"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <input type="submit" value="sign up" />
        <Link href="/login">Login</Link>
      </form>
    </>
  );
};

export default Home;

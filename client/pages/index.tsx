import React from "react";
import form from "../styles/form.module.css";

const Home: React.FC = (): JSX.Element => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/json");
  //       const data: { msg: string } = await res.json();
  //       setName(data.msg);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);
  return (
    <>
      <form
        className={form.desktop}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
        <input type="submit" value="log in" />
      </form>
    </>
  );
};

export default Home;

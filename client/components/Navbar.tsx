import React from "react";
import Link from "next/link";
import navbar from "../styles/navbar.module.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className={navbar.desktop}>
        <h1>logo</h1>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/login">log in</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

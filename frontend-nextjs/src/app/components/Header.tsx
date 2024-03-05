import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Link href={"/home"}>
        <img src="../../../public/agrotech-logo.png" alt="agrotech-logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;

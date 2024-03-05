import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/home/us"}>Nosotros</Link>
        </li>
        <li>
          <Link href={"/home/addItem"}>Agregar Item</Link>
        </li>
        <li>
          <Link href={"/home/stock"}>Stock</Link>
        </li>
        <li>
          <Link href={"/home/login"}>Acceso Usuarios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

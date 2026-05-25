"use client";

import Image from "next/image";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
  <Link href="/"> 
    <Image
      src="/logo.jpeg"
      alt="Eotia Logo"
      width={150}
      height={150}
      className="logo"
    />
  </Link>

  <ul>
    <li>
      <a className="active-link">Inicio</a>
    </li>
    <li>Productos</li>
    <li>Personalizados</li>
    <li>Nosotros</li>
    <li>Contacto</li>
  </ul>

  <div className="nav-icons">
    <FiSearch />
    <FiUser />
    <FiShoppingCart />
  </div>
</nav>
  );
}

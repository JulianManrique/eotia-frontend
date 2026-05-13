import Image from "next/image";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav>
  <Image
    src="/logo.jpeg"
    alt="Eotia Logo"
    width={90}
    height={90}
    className="logo"
  />

  <ul>
    <li>Inicio</li>
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

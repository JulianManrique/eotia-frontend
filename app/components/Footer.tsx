import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>EOTIA</h2>
          <p>
            Postres artesanales creados con amor para momentos especiales.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>

          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Servicios</li>
            <li>Nosotros</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>+57 300 000 0000</p>
          <p>contacto@eotia.com</p>

          <div className="footer-socials">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
          </div>
        </div>

      </div>
    </footer>
  );
}
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Marca */}

        <div className={styles.footerBrand}>

          <h2>Eotia</h2>

          <span>PASTELERÍA ARTESANAL</span>

          <p>
            Dulces momentos hechos para inspirar, compartir y celebrar.
          </p>

          <div className={styles.footerSocials}>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Navegación */}

        <div className={styles.footerColumn}>

          <h3>NAVEGACIÓN</h3>

          <ul>

            <li>
              <Link href="/">Inicio</Link>
            </li>

            <li>
              <Link href="/catalog/tortas">Productos</Link>
            </li>

            <li>
              <Link href="/#services">Personalizados</Link>
            </li>

            <li>
              <Link href="/#about">Nosotros</Link>
            </li>

            <li>
              <Link href="/#contact">Contacto</Link>
            </li>

          </ul>

        </div>

        {/* Contacto */}

        <div className={styles.footerColumn}>

          <h3>CONTÁCTANOS</h3>

          <ul>

            <li>
              <FaWhatsapp />
              <span>Pedidos por WhatsApp</span>
            </li>

            <li>
              <HiOutlineEnvelope />
              <span>hola@eotia.com</span>
            </li>

            <li>
              <HiOutlineMapPin />
              <span>Cali, Colombia</span>
            </li>

          </ul>

        </div>

        {/* Suscripción */}

        <div className={styles.footerSubscribe}>

          <h3>SUSCRÍBETE</h3>

          <p>
            Recibe novedades y promociones exclusivas.
          </p>

          <form className={styles.subscribeForm}>

            <input
              type="email"
              placeholder="Tu correo electrónico"
            />

            <button type="submit">
              Suscribirme
            </button>

          </form>

        </div>

      </div>

      <div className={styles.footerBottom}>

        © {new Date().getFullYear()} EOTIA. Todos los derechos reservados.

      </div>

    </footer>
  );
}
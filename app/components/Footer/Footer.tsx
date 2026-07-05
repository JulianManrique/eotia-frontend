import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

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
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />
          </div>

        </div>

        {/* Navegación */}

        <div className={styles.footerColumn}>

          <h3>NAVEGACIÓN</h3>

          <ul>

            <li>Inicio</li>

            <li>Productos</li>

            <li>Personalizados</li>

            <li>Nosotros</li>

            <li>Contacto</li>

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
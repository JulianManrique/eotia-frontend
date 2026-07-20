import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContent}>

        <span className={styles.heroSubtitle}>
          PASTELERÍA ARTESANAL
        </span>

        <h1 className={styles.heroTitle}>
          Creamos   
          <br />
          inolvidables
        </h1>

        <div className="hero-divider">
          <span className="line"></span>
          <span className="heart">♥</span>
          <span className="line"></span>
        </div>

        <p className={styles.heroDescription}>
          Pastelería artesanal hecha con ingredientes seleccionados
          para celebrar cada ocasión especial.
        </p>

        <div className={styles.heroButtons}>

          <button className={styles.primaryButton}>
            Personaliza tu pedido
          </button>

        </div>

        <div className={styles.heroDots}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className={styles.heroImage}>

        <Image
          src="/hero-cake.jpeg"
          alt="Pastel EOTIA"
          fill
          priority
        />

      </div>

      <button className={styles.heroPrev}>❮</button>

      <button className={styles.heroNext}>❯</button>

    </section>
  );
}
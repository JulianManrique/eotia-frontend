import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <Image
        src="/hero-cake.jpeg"
        alt="Pastel EOTIA"
        fill
        priority
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>

        <span className={styles.heroSubtitle}>
          PASTELERÍA ARTESANAL
        </span>

        <h1 className={styles.heroTitle}>
          Creamos momentos
          <br />
          inolvidables
        </h1>

        <div className={styles.heroDecoration}>
          <span></span>
          <i>♥</i>
          <span></span>
        </div>

        <p className={styles.heroDescription}>
          Pastelería artesanal hecha con ingredientes seleccionados
          para celebrar cada ocasión especial.
        </p>

        <button className={styles.heroButton}>
          Personaliza tu pedido
        </button>

      </div>

      <button className={styles.heroPrev}>
        ❮
      </button>

      <button className={styles.heroNext}>
        ❯
      </button>

      <div className={styles.heroDots}>
        <span className={styles.active}></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}
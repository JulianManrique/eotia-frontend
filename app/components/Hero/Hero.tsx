"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Creamos\nmomentos inolvidables",
    subtitle: "PASTELERÍA ARTESANAL",
    description:
      "Pastelería artesanal hecha con ingredientes seleccionados para celebrar cada ocasión especial.",
    image: "/hero-cake.jpeg",
  },
  {
    id: 2,
    title: "Cada pastel\ncuenta una historia",
    subtitle: "DISEÑOS EXCLUSIVOS",
    description:
      "Diseñamos tortas personalizadas para bodas, cumpleaños y momentos únicos.",
    image: "/hero-cake-2.jpeg",
  },
  {
    id: 3,
    title: "El sabor que\nrecuerdas siempre",
    subtitle: "INGREDIENTES PREMIUM",
    description:
      "Ingredientes frescos, recetas artesanales y acabados que sorprenden.",
    image: "/hero-cake-3.jpeg",
  },
];



export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  return (
    <section className={styles.hero}>

      <Image
        src={slide.image}
        alt="Pastel EOTIA"
        fill
        priority
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>

        <span className={styles.heroSubtitle}>
          {slide.subtitle}
        </span>

        <h1 className={styles.heroTitle}>
          {slide.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <div className={styles.heroDecoration}>
          <span></span>
          <i>♥</i>
          <span></span>
        </div>

        <p className={styles.heroDescription}>
          {slide.description}
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
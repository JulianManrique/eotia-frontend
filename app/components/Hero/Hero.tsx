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
    image: "/hero-cake-2.png",
  },
  {
    id: 3,
    title: "Reuniones\neventos",
    subtitle: "INGREDIENTES PREMIUM",
    description:
      "Hacemos de tu evento, algo especial.",
    image: "/hero-cake-3.png",
  },
];



export default function Hero() {

  // Cambio automatico del slide cada 5 segundos 
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Flechas para cambiar manualmente el slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };
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

      <button
        className={styles.heroPrev}
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className={styles.heroNext}
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className={styles.heroDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === currentSlide ? styles.active : ""
            }
          ></span>
        ))}
      </div>

    </section>
  );
}
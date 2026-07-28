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
  const [fade, setFade] = useState(true);

  useEffect(() => {

    const interval = setInterval(() => {

      changeSlide(
        (currentSlide + 1) % slides.length
      );

    }, 8000);

    return () => clearInterval(interval);

  }, [currentSlide]);


  // 👇 ESTA FUNCIÓN FALTA EN TU CÓDIGO

  const changeSlide = (newIndex: number) => {

    if (newIndex === currentSlide) return;

    setFade(false);

    setTimeout(() => {

      setCurrentSlide(newIndex);

      setFade(true);

    }, 500);

  };
  return (
    <section className={styles.hero}>

      <div
        className={`${styles.imageContainer} ${fade ? "" : styles.imageFadeOut
          }`}
      >
        <Image
          src={slide.image}
          alt="Pastel EOTIA"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.overlay}></div>

      <div
        className={`${styles.heroContent} ${fade ? "" : styles.contentFadeOut
          }`}
      >

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
        onClick={() =>
          changeSlide(
            currentSlide === 0
              ? slides.length - 1
              : currentSlide - 1
          )
        }
      >
        ❮
      </button>

      <button
        className={styles.heroNext}
        onClick={() =>
          changeSlide(
            (currentSlide + 1) % slides.length
          )
        }
      >
        ❯
      </button>

      <div className={styles.heroDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? styles.active : ""}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>

      <div className={styles.heroDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? styles.active : ""}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>

    </section>
  );
}
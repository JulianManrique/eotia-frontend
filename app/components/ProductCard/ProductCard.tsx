import Image from "next/image";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

export default function ProductCard({
  title,
  description,
  image,
  icon,
}: ProductCardProps) {
  return (
    <article className={styles.card}>

      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>

        <div className={styles.icon}>
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <button className={styles.button}>
          →
        </button>

      </div>

    </article>
  );
}
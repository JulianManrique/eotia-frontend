import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-subtitle">
          PASTELERÍA ARTESANAL
        </span>

        <h1 className="hero-title">
          Creamos momentos
          <br />
          inolvidables
        </h1>

        <div className="hero-divider">
          <span className="line"></span>
          <span className="heart">♥</span>
          <span className="line"></span>
        </div>

        <p className="hero-description">
          Pastelería artesanal hecha con ingredientes seleccionados
          para celebrar cada ocasión especial.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Personaliza tu pedido
          </button>

        </div>

        <div className="hero-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className="hero-image">

        <Image
          src="/hero-cake.jpeg"
          alt="Pastel EOTIA"
          fill
          priority
        />

      </div>

      <button className="hero-prev">❮</button>

      <button className="hero-next">❯</button>

    </section>
  );
}
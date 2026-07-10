import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";
import products from "@/app/data/products";

export default function CheesecakePage() {
  const cheesecakes = Object.entries(products).filter(
    ([_, product]) => product.category === "cheesecake"
  );

  return (
    <>
      <Navbar />

      <main className="catalog-page">

        {/* Hero */}

        <section className="cheesecake-hero">

          <div className="hero-subtitle">

            <span className="line"></span>

            <p>PASTELERÍA ARTESANAL</p>

            <span className="line"></span>

          </div>

          <h1>Nuestros Cheesecake</h1>

          <p className="hero-description">
            Suaves, cremosos y elaborados con los mejores ingredientes.
            <br />
            El equilibrio perfecto entre textura y sabor.
          </p>

        </section>

        {/* Productos */}

        <section className="catalog-grid">

          {cheesecakes.map(([slug, product]) => (
            <article key={slug} className="catalog-card">

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <h3>{product.price}</h3>

              <Link href={`/producto/${slug}`}>
                <button>Ver producto</button>
              </Link>

            </article>
          ))}

        </section>

      </main>

      <Footer />
    </>
  );
}
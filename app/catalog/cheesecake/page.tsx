import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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

        <section className="catalog-header">
          <h1>Nuestros Cheesecakes</h1>

          <p>
            Una selección exclusiva de cheesecakes artesanales.
          </p>
        </section>

        <section className="catalog-hero">

          <img
            src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1600&auto=format&fit=crop"
            alt="Cheesecake"
          />

          <h2>Próximamente más sabores</h2>

          <p>
            Estamos preparando nuevas referencias de temporada para ofrecerte
            una experiencia aún más deliciosa.
          </p>

        </section>

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
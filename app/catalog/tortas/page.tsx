import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import products from "@/app/data/products";

export default function TortasPage() {
  const tortas = Object.entries(products).filter(
  ([_, product]) => product.category === "tortas"
);
  return (
    <>
      <Navbar />

      <main className="catalog-page">

        <section className="catalog-header">
          <h1>Nuestras Tortas</h1>

          <p>
            Descubre nuestra selección de tortas artesanales premium.
          </p>
        </section>

        <section className="catalog-grid">

          {tortas.map(([slug, product]) => (
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
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";
import products from "@/app/data/products";

export default function AlfajoresPage() {

  const alfajores = Object.entries(products).filter(
    ([_, product]) => product.category === "alfajores"
  );

  return (
    <>
      <Navbar />

      <main className="catalog-page">

        <section className="catalog-header">
          <h1>Nuestros Alfajores</h1>

          <p>
            Descubre nuestra selección de alfajores artesanales premium.
          </p>
        </section>

        <section className="catalog-grid">

          {alfajores.map(([slug, product]) => (
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
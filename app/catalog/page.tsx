import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function CatalogPage() {
  return (
    <>
      <Navbar />

      <main className="catalog-page">
        <h1>Nuestro Catálogo</h1>

        <section className="catalog-grid">
          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop"
              alt="Torta Chocolate"
            />
            <h2>Torta de Chocolate</h2>
            <p>Deliciosa torta artesanal.</p>
            <Link href="/catalog/tortas">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop"
              alt="Red Velvet"
            />
            <h2>Red Velvet</h2>
            <p>Esponjosa y elegante.</p>
            <button>Ver producto</button>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
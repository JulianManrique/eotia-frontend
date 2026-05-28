import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function TortasPage() {
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

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop"
              alt="Torta Chocolate"
            />

            <h2>Torta de Chocolate</h2>

            <p>Chocolate premium artesanal.</p>

            <h3>$120.000</h3>

            <Link href="/producto/torta-chocolate">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop"
              alt="Red Velvet"
            />

            <h2>Red Velvet</h2>

            <p>Suave y elegante.</p>

            <h3>$115.000</h3>

            <Link href="/producto/red-velvet">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop"
              alt="Arequipe"
            />

            <h2>Torta de Arequipe</h2>

            <p>Relleno artesanal cremoso.</p>

            <h3>$110.000</h3>

            <Link href="/producto/torta-arequipe">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1200&auto=format&fit=crop"
              alt="Frutos del Bosque"
            />

            <h2>Frutos del Bosque</h2>

            <p>Frutas frescas premium.</p>

            <h3>$125.000</h3>

            <Link href="/producto/frutos-del-bosque">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop"
              alt="Cookies and Cream"
            />

            <h2>Cookies & Cream</h2>

            <p>Chocolate y galleta artesanal.</p>

            <h3>$118.000</h3>

            <Link href="/producto/cookies-cream">
              <button>Ver producto</button>
            </Link>
          </article>

          <article className="catalog-card">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop"
              alt="Cheesecake Mora"
            />

            <h2>Cheesecake de Mora</h2>

            <p>Cheesecake artesanal premium.</p>

            <h3>$122.000</h3>

            <Link href="/producto/cheesecake-mora">
              <button>Ver producto</button>
            </Link>
          </article>

        </section>

      </main>

      <Footer />
    </>
  );
}
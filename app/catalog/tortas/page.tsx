import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main className="product-page">
        <div className="product-container">

          <img
            src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop"
            alt="Torta Chocolate"
          />

          <div className="product-info">
            <h1>Torta de Chocolate</h1>

            <p>
              Deliciosa torta artesanal elaborada con ingredientes premium.
            </p>

            <h2>$120.000</h2>

            <button>Comprar ahora</button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
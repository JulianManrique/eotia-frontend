import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import products from "@/app/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <>
      <Navbar />

      <main className="product-page">
        <section className="product-container">

          <img
            src={product.image}
            alt={product.name}
          />

          <div className="product-info">

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <h2>{product.price}</h2>

            <button>Comprar ahora</button>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
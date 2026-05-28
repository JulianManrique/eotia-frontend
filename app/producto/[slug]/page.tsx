import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const products = {
  "torta-chocolate": {
    name: "Torta de Chocolate",
    description:
      "Deliciosa torta artesanal elaborada con cacao premium y relleno cremoso.",
    price: "$120.000",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop",
  },

  "red-velvet": {
    name: "Red Velvet",
    description:
      "Bizcocho rojo aterciopelado con crema suave artesanal.",
    price: "$115.000",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop",
  },

  "torta-arequipe": {
    name: "Torta de Arequipe",
    description:
      "Capas suaves rellenas con arequipe artesanal premium.",
    price: "$110.000",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
  },

  "frutos-del-bosque": {
    name: "Frutos del Bosque",
    description:
      "Torta premium con frutas frescas seleccionadas.",
    price: "$125.000",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1200&auto=format&fit=crop",
  },

  "cookies-cream": {
    name: "Cookies & Cream",
    description:
      "Combinación de vainilla, chocolate y trozos de galleta.",
    price: "$118.000",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop",
  },

  "cheesecake-mora": {
    name: "Cheesecake de Mora",
    description:
      "Cheesecake artesanal con mora natural premium.",
    price: "$122.000",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  },
};

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
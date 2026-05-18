export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {

  return (
    <main className="product-page">
      <div className="product-container">
        <img
          src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop"
          alt="Producto"
        />

        <div className="product-info">
          <h1>{params.slug}</h1>

          <p>
            Delicioso producto artesanal premium.
          </p>

          <h2>$85.000 COP</h2>

          <button>Ordenar por WhatsApp</button>
        </div>
      </div>
    </main>
  );
}
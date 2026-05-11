export default function Catalog() {
  return (
    <section className="catalog">
      <h2>Nuestros Productos</h2>

      <div className="catalog-container">
        <article>
          <img
            src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c"
            alt="Tartas"
          />
          <h3>Tartas</h3>
        </article>

        <article>
          <img
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e"
            alt="Alfajores"
          />
          <h3>Alfajores</h3>
        </article>

        <article>
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
            alt="Galletas"
          />
          <h3>Galletas</h3>
        </article>

        <article>
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
            alt="Cheesecake"
          />
          <h3>Cheesecake</h3>
        </article>
      </div>
    </section>
  );
}
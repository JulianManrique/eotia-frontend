export default function Catalog() {
  return (
    <section className="catalog">
      <h2>Nuestros Productos</h2>

      <div className="catalog-container">
        <article>
          <img
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop"
            alt="Tartas"
          />
          <h3>Tortas</h3>
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
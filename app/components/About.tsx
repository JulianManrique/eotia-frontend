export default function About() {
    return (
      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
            alt="Pastelería artesanal"
          />
        </div>
  
        <div className="about-content">
          <span>HECHO CON AMOR</span>
  
          <h2>
            Tradición, creatividad y amor en cada creación
          </h2>
  
          <p>
            En Eotia combinamos técnicas tradicionales con ingredientes
            seleccionados para crear postres únicos pensados para momentos
            especiales.
          </p>
  
          <button>Conoce Nuestra Historia</button>
        </div>
      </section>
    );
  }
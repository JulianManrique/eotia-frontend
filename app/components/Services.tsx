import {
    FaTruck,
    FaClock,
    FaCreditCard,
    FaWhatsapp,
  } from "react-icons/fa";
  
  export default function Services() {
    return (
      <section className="services">
        <h2>Nuestros Servicios</h2>
  
        <div className="services-container">
          <article className="service-card">
            <FaTruck className="service-icon" />
            <h3>Entregas</h3>
            <p>Realizamos entregas rápidas y seguras.</p>
          </article>
  
          <article className="service-card">
            <FaClock className="service-icon" />
            <h3>Pedidos Anticipados</h3>
            <p>Programa tus pedidos con tiempo.</p>
          </article>
  
          <article className="service-card">
            <FaCreditCard className="service-icon" />
            <h3>Pagos Seguros</h3>
            <p>Aceptamos múltiples métodos de pago.</p>
          </article>
  
          <article className="service-card">
            <FaWhatsapp className="service-icon" />
            <h3>WhatsApp</h3>
            <p>Atención rápida y personalizada.</p>
          </article>
        </div>
      </section>
    );
  }
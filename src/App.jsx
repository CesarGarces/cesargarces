import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./App.css";
import heroImage from "./assets/hero-background-top-mask.png";
import video from "./assets/q-85a3b9fd.webm";
import { Button } from "@nextui-org/react";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/webm" />
      </video>
      <div className="container" onMouseMove={handleMouseMove}>
        {/* Hero Section */}
        <section className="hero">
          <div className="overlay"></div>
          <img src={heroImage} alt="Hero Image" />
          <h1>Desarrollo de Software César Garcés</h1>
          <h2>
            Desarrollamos soluciones de software a la medida de tu negocio
          </h2>
        </section>

        {/* Servicios Section */}
        <section className="services">
          <div
            className="service-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Desarrollo de Aplicaciones Web</h3>
            <p>Aplicaciones web escalables y seguras para tu empresa.</p>
          </div>
          <div
            className="service-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Desarrollo de Aplicaciones Móviles</h3>
            <p>Aplicaciones móviles potentes para iOS y Android.</p>
          </div>
          <div
            className="service-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Consultoría en Transformación Digital</h3>
            <p>
              Modernizamos tus sistemas y procesos con tecnología de vanguardia.
            </p>
          </div>
        </section>

        {/* Proyectos Section */}
        <section className="projects">
          <div
            className="project-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Proyecto E-med</h3>
            <p>
              Desarrollo de plataforma de comercio electrónico con módulo de
              gestión de clientes.
            </p>
          </div>
          <div
            className="project-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Proyecto ABA</h3>
            <p>
              Creación de aplicación web para crear citas médicas y gestionar
              turnos.
            </p>
          </div>
          <div
            className="project-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <h3>Proyecto DoBetter</h3>
            <p>
              Creación de un portal de gestión de rutas GPS y monitoreo de
              camiones para operaciones logísticas.
            </p>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="testimonials">
          <div
            className="testimonial-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <p>
              El equipo de César Garcés transformó nuestra visión en una
              solución tecnológica efectiva.
            </p>
          </div>
          <div
            className="testimonial-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <p>
              Gracias a su experticia, nuestra empresa ha mejorado su eficiencia
              operativa.
            </p>
          </div>
          <div
            className="testimonial-card"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)`,
            }}
          >
            <p>
              Profesionalismo y calidad, recomendamos sus servicios sin dudarlo.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <h4>Desarrollo de Software César Garcés</h4>
          <p>© 2024. Todos los derechos reservados.</p>
          <div className="social-buttons">
            <Button
              isIconOnly
              onClick={() => window.open("https://github.com/cesargarces")}
            >
              <FaGithub size={24} color="#fff" />
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/cesargarces/")
              }
            >
              <FaLinkedin size={24} color="#fff" />
            </Button>
          </div>
        </footer>
      </div>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573507424296" // Reemplaza con tu número de WhatsApp
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} color="#fff" />
        <span>Solicita una Consulta Gratis</span>
      </a>
    </>
  );
};

export default App;

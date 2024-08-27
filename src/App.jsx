import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./App.css";
import heroImage from "./assets/hero-background-top-mask.png";
import video from "./assets/q-85a3b9fd.webm";
import { Button } from "@nextui-org/react";
import BentoGrid from "./components/BentoGrid";

const App = () => {

  return (
    <>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/webm" />
      </video>
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="overlay"></div>
          <img src={heroImage} alt="Hero Image" />
          <h1>Desarrollo de Software César Garcés</h1>
          <h2>
            Desarrollamos soluciones de software a la medida de tu negocio
          </h2>
        </section>

       <BentoGrid />

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

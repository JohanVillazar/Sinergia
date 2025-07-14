
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import AboutSection from '@/components/sections/AboutSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ContactSection from '@/components/sections/ContactSection';
import CalificacionesSection  from '@/components/sections/CalificacionesSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useSectionObserver from "./hooks/useSectionObserver";

// ✅ ENVOLTORIO que se usará para el fondo dinámico
const BackgroundWrapper = ({ background, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
      }}
      className="min-h-screen w-full"
    >
      {children}
    </div>
  );
};

function App() {
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState("inicio");

  // ✅ Referencias a cada sección
  const sectionRefs = {
    inicio: useRef(null),
    AboutSection: useRef(null),
    MissionVisionSection: useRef(null),
    PortfolioSection: useRef(null),
    ClientsSection: useRef(null),
    ContactSection: useRef(null),
  };

  // ✅ Hook personalizado para detectar sección activa
  useSectionObserver(sectionRefs, setCurrentSection);

  // ✅ Fondo por sección
  const backgrounds = {
    inicio: "/fondo-inicio.jpg",
    AboutSection: "https://cdn.pixabay.com/photo/2019/10/02/03/09/cargo-ships-4519830_1280.jpg",
    MissionVisionSection: "/fondo-mision-vision.jpg",
    PortfolioSection: "/fondo-portafolio.jpg",
    ClientsSection: "/fondo-clientes.jpg",
    ContactSection: "/fondo-contacto.jpg",
  };

  // ✅ Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // ✅ Scroll hacia una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Mostrar toast
  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Sinergia - Soluciones y Sistemas</title>
        <meta
          name="description"
          content="Sinergia desarrolla software especializado para aduanas y comercio marítimo."
        />
      </Helmet>

      {/* ✅ Fondo dinámico según sección */}
      <BackgroundWrapper background={backgrounds[currentSection]}>
        <Header scrollToSection={scrollToSection} />

        <main>
          <div ref={sectionRefs.inicio}>
            <HeroSlider scrollToSection={scrollToSection} />
          </div>

          <div ref={sectionRefs.AboutSection} className="wave-pattern">
            <AboutSection />
          </div>

          <div ref={sectionRefs.MissionVisionSection}>
            <MissionVisionSection />
          </div>

          <div ref={sectionRefs.PortfolioSection} className="wave-pattern">
            <PortfolioSection handleContactClick={handleContactClick} />
          </div>

          <div ref={sectionRefs.ClientsSection}>
            <ClientsSection />
          </div>

          <div ref={sectionRefs.ContactSection} className="wave-pattern">
            <ContactSection handleContactClick={handleContactClick} />
          </div>
        </main>

        <Footer />
        <Toaster />
      </BackgroundWrapper>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
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

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,  // duración de la animación
    once: true      // animar solo una vez
  });
}, []);
  const { toast } = useToast();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

    const backgrounds = {
    
    AboutSection: "https://cdn.pixabay.com/photo/2019/10/02/03/09/cargo-ships-4519830_1280.jpg",
    MissionVisionSection: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    PortfolioSection: "/fondo-portafolio.jpg",
    ClientsSection: "/fondo-clientes.jpg",
    CopntactSection: "/fondo-contacto.jpg",
  };

  return (
    <>
      <Helmet>
        <title>Sinergia - Soluciones y Sistemas</title>
        <meta name="description" content="Sinergia desarrolla software especializado para aduanas y comercio marítimo. Soluciones tecnológicas innovadoras para optimizar procesos portuarios y aduaneros." />
      </Helmet>

      <div className="min-h-screen bg-[#333]">
        <Header scrollToSection={scrollToSection} />
        
        <main>
          <HeroSlider scrollToSection={scrollToSection} />
          <div className="wave-pattern">
            <AboutSection />
          </div>
          <MissionVisionSection />
          <div className="wave-pattern">
            <PortfolioSection handleContactClick={handleContactClick} />
          </div>
          <ClientsSection />
          <CalificacionesSection />
          <div className="wave-pattern">
            <ContactSection handleContactClick={handleContactClick} />
          </div>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;

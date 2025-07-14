import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "glass-card"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/siner.png"
              alt="Logo Sinergia"
              className="h-16 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white">
              Sinergia Soluciones y Sistemas
            </span>
          </motion.div>

      

          <div className="hidden md:flex space-x-8">
            {['inicio', 'nosotros', 'mision-vision', 'portafolio', 'clientes', 'contacto'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#e64d24] transition-colors capitalize"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.replace('-', ' & ')}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {['inicio', 'nosotros', 'mision-vision', 'portafolio', 'clientes', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-white hover:text-[#e64d24] transition-colors capitalize"
              >
                {item.replace('-', ' & ')}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;

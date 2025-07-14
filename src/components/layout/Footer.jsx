
import React from 'react';
import { Ship } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
  <div className="flex items-center space-x-2">
    <img
      src="/siner.png"
      alt="Logo Sinergia"
      className="h-16 w-auto object-contain"
    />
    <span className="text-2xl font-bold text-white">Sinergia</span>
  </div>
  <p className="text-gray-400">Sistemas y Soluciones</p>
</div>

      

          <div>
            <span className="font-semibold text-lg mb-4 block">Servicios</span>
            <div className="space-y-2">
              <p className="text-gray-400">Intercomex</p>
              <p className="text-gray-400">Intercomex Z-F</p>
             
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Empresa</span>
            <div className="space-y-2">
              <p className="text-gray-400">Sobre Nosotros</p>
              <p className="text-gray-400">Mision y Vision</p>
              <p className="text-gray-400">Porfafolio</p>
              
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Contacto</span>
            <div className="space-y-2">
              <p className="text-gray-400">info@sinergiasoluciones.com.co</p>
              <p className="text-gray-400">+57 300 484 0819</p>
              <p className="text-gray-400">Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sinergia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

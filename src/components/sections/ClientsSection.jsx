
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import ModernCard from '../ModernCard';

// Lista de clientes con logo y link
const clients = [
  {
    name: 'SIAP',
    logo: 'siap.png',
    url: 'https://www.siap.com.co/'
  },
  {
    name: 'Pasar Logistica Integral',
    logo: 'pasar.png',
    url: 'https://pasarltda.com/'
  },
  {
    name: 'Zona Franca Occidente',
    logo: 'zfo.png',
    url: 'https://zonafrancaoccidente.com/'
  },
  {
    name: 'Sin Limite',
    logo: 'sinlimite.png',
    url: 'https://aduanasinlimite.info/'
  },
  {
    name: 'Move Cargo',
    logo: 'move.png',
    url: 'https://www.portauthority.com'
  },
  
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas líderes que confían en nuestras soluciones
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <AnimatedSection key={client.name} animation="flip" delay={index * 0.1}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform"
              >
                <ModernCard>
                  <div className=" mx-auto mb-4 flex items-center justify-center">
                    <img  
                      src={client.logo}
                      alt={client.name}
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-center">{client.name}</h3>
                </ModernCard>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

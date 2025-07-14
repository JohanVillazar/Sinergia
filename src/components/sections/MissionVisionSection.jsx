
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ModernCard from '@/components/common/ModernCard';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section id="mision-vision" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Misión & Visión
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <ModernCard className="h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-[#e64d24]" />
                  <h3 className="text-3xl font-bold">Misión</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                 Brindar soluciones innovadoras y sistemas empresariales integrados que optimicen los procesos de nuestros clientes, impulsando su crecimiento y eficiencia. Nos proyectamos como líderes en la automatización y digitalización del comercio exterior, ofreciendo un valor sostenible y adaptado a las nuevas necesidades del mercado global.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Innovación constante</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Excelencia en el servicio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Compromiso con el cliente</span>
                  </div>
                </div>
              </div>
            </ModernCard>
          </AnimatedSection>

          <AnimatedSection animation="flip" delay={0.4}>
            <ModernCard className="h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-[#e64d24]" />
                  <h3 className="text-3xl font-bold">Visión</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  En 2030 seremos la empresa líder en soluciones integradas de comercio exterior, impulsando la transformación digital y la sostenibilidad en la cadena de suministro, a través de la innovación tecnológica y la optimización de procesos, para ofrecer un servicio ágil, transparente y eficiente a todos los actores del sector.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Liderazgo global</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Transformación digital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e64d24] rounded-full"></div>
                    <span className="text-gray-300">Valor sostenible</span>
                  </div>
                </div>
              </div>
            </ModernCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

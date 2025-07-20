
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ModernCard from '@/components/common/ModernCard';
import { Anchor, Users, Globe, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white text-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#333]">
              Quiénes Somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sinergia Soluciones y Sistemas SAS es una empresa líder en soluciones informáticas para el sector aduanero y de comercio exterior.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <ModernCard className="light-card">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Anchor className="h-8 w-8 text-[#e64d24]" />
                  <h3 className="text-2xl font-bold text-[#333]">Nuestra Historia</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nacimos para responder a la necesidad del mercado de herramientas tecnológicas que optimicen los costos operativos, agilicen los procesos y minimicen los errores humanos en los trámites aduaneros.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro equipo de expertos combina conocimiento profundo del sector marítimo con
                  las últimas tecnologías para crear soluciones que realmente transforman la industria.
                </p>
              </div>
            </ModernCard>
          </AnimatedSection>

          <AnimatedSection animation="flip" delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              <ModernCard className="text-center light-card">
                <Users className="h-12 w-12 text-[#e64d24] mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2 text-[#333]">50+</h4>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </ModernCard>
              <ModernCard className="text-center light-card">
                <Globe className="h-12 w-12 text-[#e64d24] mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2 text-[#333]">30+</h4>
                <p className="text-gray-600">Agencias y Aduanas</p>
              </ModernCard>
              <ModernCard className="text-center light-card">
                <Award className="h-12 w-12 text-[#e64d24] mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2 text-[#333]">500+</h4>
                <p className="text-gray-600">Transacciones efectuadas diariamente</p>
              </ModernCard>
              <ModernCard className="text-center light-card">
                <Briefcase className="h-12 w-12 text-[#e64d24] mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2 text-[#333]">14+</h4>
                <p className="text-gray-600">Años de Experiencia</p>
              </ModernCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

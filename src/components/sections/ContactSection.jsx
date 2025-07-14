
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ModernCard from '@/components/common/ModernCard';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = ({ handleContactClick }) => {
  return (
    <section id="contacto" className="py-20 bg-white text-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#333]">
              Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para contactarnos, ingrese sus datos en el siguiente formulario o escribanos al correo electrónico: info@sinergiasoluciones.com.co y estaremos en contacto con usted.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <ModernCard className="light-card">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 text-[#333]">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#e64d24] rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#333]">Email</p>
                      <p className="text-gray-600">info@sinergiasoluciones.com.co</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#e64d24] rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#333]">Teléfono</p>
                      <p className="text-gray-600">57 (1) 749 8345 +57 (1) 755 2624 Móvil: +57 300 484 0819</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#e64d24] rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#333]">Dirección</p>
                      <p className="text-gray-600">Bogotá, Colombia</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
           
                </div>
              </div>
            </ModernCard>
          </AnimatedSection>

          <AnimatedSection animation="flip" delay={0.4}>
            <ModernCard className="light-card">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-[#333]">Envíanos un Mensaje</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e64d24] text-[#333]"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e64d24] text-[#333]"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Empresa</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e64d24] text-[#333]"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Mensaje</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e64d24] text-[#333]"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <Button
                    onClick={handleContactClick}
                    className="w-full bg-[#e64d24] hover:bg-[#c43b1a] text-white py-3"
                  >
                    Enviar Mensaje
                  </Button>
                </div>
              </div>
            </ModernCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

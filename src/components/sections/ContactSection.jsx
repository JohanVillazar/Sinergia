
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ModernCard from '@/components/common/ModernCard';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactoItem from '../ui/ContactoItem';

const ContactSection = ({ handleContactClick }) => {
  return (
<section id="contacto" className="py-20 bg-white text-[#333]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection animation="zoom">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#333]">Contacto</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Para contactarnos, escríbenos al correo <strong>info@sinergiasoluciones.com.co</strong> y estaremos en contacto contigo.
        </p>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-20">
      {/* Contacto técnico y administrativo */}
      <AnimatedSection animation="slideLeft" delay={0.2}>
        <ModernCard className="light-card">
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-center text-[#333]">Información de Contacto</h3>

            {/* Soporte */}
            <div>
              <h4 className="text-xl font-bold text-[#333] mb-4">Soporte</h4>
              <div className="space-y-6">
                <ContactoItem icon={<Mail />} label="Email" text="intercomex.zonafranca@sinergiasoluciones
                .com.co" />
                <ContactoItem icon={<Phone />} label="Teléfono" text="+57 (601) 755 2624" />
                <ContactoItem icon={<Phone />} label="WhatsApp" text="+57 3004840819" />
              </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-gray-300" />

            {/* Administración */}
            <div>
              <h4 className="text-xl font-bold text-[#333] mb-4">Administración</h4>
              <div className="space-y-6">
                <ContactoItem icon={<Mail />} label="Email" text="admon@sinergiasoluciones.com.co" />
                <ContactoItem icon={<Phone />} label="Teléfono" text="+57 3212459413" />
              </div>
            </div>
          </div>
        </ModernCard>
      </AnimatedSection>

      {/* Información extra y horarios */}
      <AnimatedSection animation="flip" delay={0.4}>
        <ModernCard className="light-card">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold text-[#333]">Contáctanos</h3>
            <div className="bg-white shadow-md rounded-xl px-6 py-8 mx-auto">
              <h4 className="text-xl font-semibold text-[#e64d24] mb-4">Estamos aquí para ayudarte</h4>
              <p className="text-gray-700 text-left max-w-xl mx-auto leading-relaxed">
                <strong>Horario de Atención</strong><br />
                Soporte estándar: Lunes a Viernes, 8:00 a.m. – 10:00 p.m. (hora Colombia)<br />
                Soporte crítico (alta prioridad): Lunes a Viernes, 10:00 p.m. – 07:00 a.m. (hora Colombia).<br />
                Sábados desde las 5:00 p.m. y domingos/festivos todo el día (solo casos críticos).<br />
                WhatsApp emergencias: <strong>+57 315 263 8769</strong>
              </p>
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

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const portfolioItems = [
  {
    title: "INTERCOMEX",
    description:
      "Solución Inteligente para tus Importaciones INTERCOMEX es nuestra plataforma insignia para la gestión automatizada de importaciones, diseñada para reducir costos operativos, tiempos de proceso y errores en trámites con la DIAN. Desde 2011, INTERCOMEX ha evolucionado con la tecnología y la normativa aduanera para mantenerse como una herramienta robusta, ágil y segura. Ideal para empresas que buscan simplificar y transformar su gestión aduanera.",
    longDescription: [
      "🚀 ¿Qué ofrece INTERCOMEX?",
      "🤖 Automatización completa de trámites de importación.",
      "🔗 Integración directa con DIAN y otros sistemas clave.",
      "⏱️ Reducción de errores y tiempos de espera.",
      "⚙️ Optimización operativa con mínimo esfuerzo humano.",
      "📊 Control total y trazabilidad de cada proceso."
    ],
    imgSrc:
      "./inter.jpg",
    alt: "Sistema de importación"
  },
  {
    title: "INTERCOMEX-ZF",
    description:
      "Control Total en el Régimen Franco.INTERCOMEX-ZF es la solución especializada para la gestión y control de operaciones en zonas francas. Asegura el cumplimiento normativo, optimiza inventarios y automatiza tareas clave como el Formulario de Movimiento de Mercancías (FMM). ¿Listo para transformar tu gestión aduanera?Con Intercomex e Intercomex-ZF, en Sinergia impulsamos la transformación digital del comercio exterior.",
    longDescription: [
      "📜 Cumplimiento normativo automático (Decreto 2685/1999, art. 393-2)",
      "📲 Acceso remoto desde cualquier dispositivo.",
      "📋 Generación automática del FMM.",
      "🧾 Control detallado de inventarios y seguimiento de mercancías.",
      "🔐 Bloqueos operacionales para garantizar seguridad y cumplimiento."
    ],
    imgSrc: "./intercomex.jpg",
    alt: "Control portuario"
  }
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="portafolio" className="w-full bg-white py-20">
      <h2 className="text-center text-4xl font-bold mb-16 text-[#333]">
        PORTAFOLIO
      </h2>

      <div className="grid gap-10 px-4 md:grid-cols-2 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col items-center"
          >
            <img
              src={item.imgSrc}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.description.substring(0, 160)}...
              </p>
              <button
                onClick={() => setSelectedItem(item)}
                className="border border-gray-500 px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200 transition"
              >
                SABER MÁS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#e64d24]">
              {selectedItem.title}
            </h2>

            <ul className="space-y-2 text-gray-700">
              {selectedItem.longDescription.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;

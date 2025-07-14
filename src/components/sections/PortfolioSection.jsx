import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const portfolioItems = [
  {
    title: "INTERCOMEX",
    description: "Solución Inteligente para tus Importaciones INTERCOMEX es nuestra plataforma insignia para la gestión automatizada de importaciones, diseñada para reducir costos operativos, tiempos de proceso y errores en trámites con la DIAN. Desde 2011, INTERCOMEX ha evolucionado con la tecnología y la normativa aduanera para mantenerse como una herramienta robusta, ágil y segura. Ideal para empresas que buscan simplificar y transformar su gestión aduanera.",
    longDescription: [
      "🚀 ¿Qué ofrece INTERCOMEX?",

  "🤖 Automatización completa de trámites de importación.",
  "🔗 Integración directa con DIAN y otros sistemas clave.",
  "⏱️ Reducción de errores y tiempos de espera.",
  "⚙️ Optimización operativa con mínimo esfuerzo humano.",
  "📊 Control total y trazabilidad de cada proceso."

      
    ],
    imgSrc: "https://cdn.pixabay.com/photo/2021/10/29/11/09/container-6751623_960_720.jpg",
    alt: "Sistema de importación",
  },
  {
    title: "INTERCOMEX-SF",
    description: "Control Total en el Régimen Franco.INTERCOMEX-ZF es la solución especializada para la gestión y control de operaciones en zonas francas. Asegura el cumplimiento normativo, optimiza inventarios y automatiza tareas clave como el Formulario de Movimiento de Mercancías (FMM). ¿Listo para transformar tu gestión aduanera?Con Intercomex e Intercomex-ZF, en Sinergia impulsamos la transformación digital del comercio exterior.",
    longDescription: [
      "📜 Cumplimiento normativo automático (Decreto 2685/1999, art. 393-2)",
      "📲 Acceso remoto desde cualquier dispositivo.",
      "📋 Generación automática del FMM.",
      "🧾 Control detallado de inventarios y seguimiento de mercancías.",
      "🔐 Bloqueos operacionales para garantizar seguridad y cumplimiento.",
    ],
    imgSrc: "https://cdn.pixabay.com/photo/2018/05/10/17/31/antwerp-3388127_960_720.jpg",
    alt: "Control portuario",
  },
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

      <div className="space-y-24">
        {portfolioItems.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              data-aos={isEven ? "fade-right" : "fade-left"}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } w-full h-[400px] overflow-hidden rounded-xl shadow-xl`}
            >
              {/* Imagen sin overlay ni degradado */}
              <div className="w-full md:w-1/2 h-full">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido con fondo sólido */}
              <div
                className={`w-full md:w-1/2 h-full text-white flex flex-col justify-center px-10 py-8 ${
                  index === 1 ? "bg-[#3d3d3d]" : "bg-[#e64d24]"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="mb-6 text-white/90">{item.description}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#e64d24] transition-all w-fit"
                >
                  SABER MÁS
                </button>
              </div>
            </div>
          );
        })}
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
            <span className="text-green-500 text-lg"></span>
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
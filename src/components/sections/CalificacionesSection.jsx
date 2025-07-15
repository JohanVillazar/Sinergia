const calificaciones = [
  {
    nombre: "Agencia de Aduanas Interlogística S.A.",
    pdf: "/pdfs/interlogistica.pdf",
    color: "bg-white",
  },
  {
    nombre: "Agencia de Aduanas Comercio Exterior Líderes S.A.S.",
    pdf: "cert2.pdf",
    color: "bg-gray-50",
  },
  {
    nombre: "Agencia de Aduanas Servade S.A",
    pdf: "cert3.pdf",
    color: "bg-white",
  },
];

export default function CalificacionesSection() {
  return (
    <section className="py-20 bg-[#e64d24]/90" id="Calificaciones">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Calificaciones</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {calificaciones.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-xl hover:scale-105 transition-transform ${item.color} text-center`}
            >
              <div className="text-[#e64d24] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                {item.nombre}
              </h3>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-[#e64d24] text-white rounded hover:bg-[#cc3f1f] transition-colors"
              >
                Ver Certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

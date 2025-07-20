
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
   {
    image: "/aniversario.png",
    alt: "",
    title: "14 Años creando soluciones  innovadoras.",
    subtitle: "",
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/05/29/17/21/container-789488_960_720.jpg",
    alt: "Puerto marítimo moderno con contenedores al atardecer",
    title: "Mantenga de forma facil el control de su inventario",
    subtitle: "Optimizando cada eslabón de la cadena de suministro global.",
  },
  {
    image: "https://cdn.pixabay.com/photo/2021/09/06/06/32/container-ship-6600956_1280.jpg",
    alt: "Vista aérea de un gran buque de carga en el océano",
    title: "Optimice sus tramites de mercancia",
    subtitle: "Agilizando trámites y garantizando el cumplimiento normativo.",
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    alt: "Trabajadores portuarios supervisando la carga de contenedores",
    title: "Ahorre tiempo y aumente su eficiencia",
    subtitle: "Soluciones de software que eliminan fronteras comerciales.",
  },
   
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const HeroSlider = ({ scrollToSection }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      paginate(1);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[imageIndex].image})` }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center text-white p-4">
          <motion.h1 
            key={`${imageIndex}-title`}
            className="text-5xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {slides[imageIndex].title}
          </motion.h1>
          <motion.p 
            key={`${imageIndex}-subtitle`}
            className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {slides[imageIndex].subtitle}
          </motion.p>
          <motion.div 
            key={`${imageIndex}-buttons`}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
           >
            <Button
              onClick={() => scrollToSection('portafolio')}
              className="bg-[#e64d24] hover:bg-[#c43b1a] text-white px-8 py-3 text-lg"
            >
              Ver Portafolio
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contacto')}
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
            >
              Contactar
            </Button>
          </motion.div>
      </div>

      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-4">
        <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:bg-white/20 hover:text-white" onClick={() => paginate(-1)}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4">
        <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:bg-white/20 hover:text-white" onClick={() => paginate(1)}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${i === imageIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

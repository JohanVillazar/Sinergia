import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, animation = "zoom", delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const animations = {
    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    },
    flip: {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { opacity: 1, rotateY: 0 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations[animation]}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
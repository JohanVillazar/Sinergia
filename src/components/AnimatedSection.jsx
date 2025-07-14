import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedSection = ({ children, animation = 'fade-up', delay = 0 }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay * 100}>
      {children}
    </div>
  );
};

export default AnimatedSection;
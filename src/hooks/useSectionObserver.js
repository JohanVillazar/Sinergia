import { useEffect } from "react";

const useSectionObserver = (refs, setCurrent) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = Object.keys(refs).find(
            (key) => refs[key].current === visible.target
          );
          if (id) setCurrent(id);
        }
      },
      { threshold: 0.6 } // visible cuando el 60% de la sección entra
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs, setCurrent]);
};

export default useSectionObserver;

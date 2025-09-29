import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return ref;
};

export const useScrollSnap = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const main = document.querySelector('main');
      if (!main) return;

      const sections = main.querySelectorAll('section');
      const currentScrollTop = main.scrollTop;
      const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
      const currentSectionIndex = sectionHeight > 0 ? Math.floor(currentScrollTop / sectionHeight) : 0;
      
      console.log(`⌨️ Keyboard navigation: scrollTop=${currentScrollTop}, sectionHeight=${sectionHeight}, currentIndex=${currentSectionIndex}`);

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentSectionIndex < sections.length - 1) {
            main.scrollTo({
              top: (currentSectionIndex + 1) * sectionHeight,
              behavior: 'smooth',
            });
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSectionIndex > 0) {
            main.scrollTo({
              top: (currentSectionIndex - 1) * sectionHeight,
              behavior: 'smooth',
            });
          }
          break;
        case 'Home':
          e.preventDefault();
          main.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          break;
        case 'End':
          e.preventDefault();
          main.scrollTo({
            top: (sections.length - 1) * sectionHeight,
            behavior: 'smooth',
          });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
import React, { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  sections: string[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
      const currentSection = sectionHeight > 0 ? Math.round(scrollTop / sectionHeight) : 0;
      setActiveSection(Math.max(0, Math.min(currentSection, sections.length - 1)));
    };

    main.addEventListener('scroll', handleScroll);
    return () => main.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const main = document.querySelector('main');
    if (!main) return;

    main.scrollTo({
      top: typeof window !== 'undefined' ? index * window.innerHeight : 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(index)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index
              ? 'bg-primary scale-125'
              : 'bg-slate-300 hover:bg-slate-400'
          }`}
          aria-label={`Go to ${section} section`}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {section}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollIndicator;
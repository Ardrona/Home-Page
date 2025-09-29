import React, { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  sections: string[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {

    if (!main) return;

    const sectionElements = main.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let mostVisibleEntry = null;
        let highestRatio = 0;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            mostVisibleEntry = entry;
            highestRatio = entry.intersectionRatio;
          }
        });
        
        if (mostVisibleEntry) {
          const sectionIndex = Array.from(sectionElements).indexOf(mostVisibleEntry.target as HTMLElement);
          if (sectionIndex !== -1) {
            console.log(`🔍 ScrollIndicator: Section ${sectionIndex} (${sections[sectionIndex]}) is now active (ratio: ${highestRatio.toFixed(2)})`);
            setActiveSection(sectionIndex);
          }
        }
      },
      {
        root: main,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px'
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const main = document.querySelector('main');
    if (!main) return;

    const targetScrollTop = typeof window !== 'undefined' ? index * window.innerHeight : 0;
    console.log(`👆 ScrollIndicator click: Scrolling to section ${index} (${sections[index]}) at position ${targetScrollTop}`);
    
    main.scrollTo({
      top: targetScrollTop,
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
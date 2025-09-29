import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
        background: 'radial-gradient(circle, rgba(139, 195, 74, 0.15) 0%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
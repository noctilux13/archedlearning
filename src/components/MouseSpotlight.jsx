import React, { useRef, useEffect } from 'react';

export default function MouseSpotlight({ children, className = '', style = {} }) {
  const containerRef = useRef(null);
  const posRef = useRef({ targetX: -9999, targetY: -9999, currentX: -9999, currentY: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      // Update card-local mouse coordinates for cards hovered
      const card = e.target.closest?.('.card, .card-editorial');
      if (card) {
        const cardRect = card.getBoundingClientRect();
        card.style.setProperty('--card-mouse-x', `${e.clientX - cardRect.left}px`);
        card.style.setProperty('--card-mouse-y', `${e.clientY - cardRect.top}px`);
      }
    };

    const handleMouseLeave = () => {
      posRef.current.targetX = -9999;
      posRef.current.targetY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth RAF loop with linear interpolation (LERP) for fluid cursor trail
    const updatePosition = () => {
      const { targetX, targetY, currentX, currentY } = posRef.current;
      
      if (targetX !== -9999) {
        if (currentX === -9999) {
          posRef.current.currentX = targetX;
          posRef.current.currentY = targetY;
        } else {
          // LERP factor 0.14 for buttery smooth trailing
          posRef.current.currentX += (targetX - currentX) * 0.14;
          posRef.current.currentY += (targetY - currentY) * 0.14;
        }

        document.documentElement.style.setProperty('--mouse-x', `${posRef.current.currentX.toFixed(1)}px`);
        document.documentElement.style.setProperty('--mouse-y', `${posRef.current.currentY.toFixed(1)}px`);
      }

      rafRef.current = requestAnimationFrame(updatePosition);
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`mouse-spotlight-wrapper ${className}`} style={style}>
      {/* Global Interactive Fluid Spotlight Background Glow */}
      <div className="spotlight-glow-canvas" aria-hidden="true" />
      <div className="spotlight-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

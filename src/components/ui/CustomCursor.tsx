
"use client";

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isGrab, setIsGrab] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) {
        setHasMoved(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseDown = () => setIsGrab(true);
    const handleMouseUp = () => setIsGrab(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, hasMoved]);

  const cursorSize = isHovering ? 40 : 20;

  return (
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block bg-primary"
        style={{ 
            mixBlendMode: 'difference',
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
        }}
        animate={{
            opacity: hasMoved ? 1 : 0,
            width: isGrab ? 60 : cursorSize,
            height: isGrab ? 60 : cursorSize,
            scale: hasMoved ? 1 : 0.5,
        }}
        transition={{
            width: { duration: 0.2 },
            height: { duration: 0.2 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
        }}
      />
  );
}

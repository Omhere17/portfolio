import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      
      // Check if hovering over text elements (excluding buttons and no-custom-cursor elements)
      const isText = target.matches('p, h1, h2, h3, h4, h5, h6, span, a, li, label');
      const hasNoCustomCursor = target.closest('.no-custom-cursor');
      setIsOverText(isText && !hasNoCustomCursor);
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const getSize = () => {
    if (isOverText) return { width: 3, height: 32 };
    return { width: 24, height: 24 };
  };

  const size = getSize();

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out`}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        transform: `translate(${position.x - size.width / 2}px, ${position.y - size.height / 2}px)`,
        willChange: 'transform',
      }}
    >
      <div className={`w-full h-full flex items-center justify-center ${
        isOverText 
          ? 'bg-primary/60' 
          : 'rounded-full bg-black/50 dark:bg-white/50 border-2 border-black dark:border-white'
      }`}>
      </div>
    </div>
  );
};

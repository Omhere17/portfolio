import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over text elements
      const target = e.target as HTMLElement;
      const isText = target.matches('p, h1, h2, h3, h4, h5, h6, span, a, li, label, button');
      setIsOverText(isText);
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ${
        isOverText ? 'w-[2px] h-[24px]' : 'w-[24px] h-[24px]'
      }`}
      style={{
        transform: isOverText 
          ? `translate(${position.x - 1}px, ${position.y - 12}px)`
          : `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      <div className={`w-full h-full ${
        isOverText 
          ? 'bg-primary' 
          : 'rounded-full bg-black dark:bg-white'
      }`} />
    </div>
  );
};

import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
      }}
    >
      <div className="w-full h-full rounded-full bg-black/70 dark:bg-white/70 blur-md" />
    </div>
  );
};

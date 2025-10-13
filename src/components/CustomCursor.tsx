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
      className="fixed top-0 left-0 w-[42px] h-[42px] pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 21}px, ${position.y - 21}px)`,
      }}
    >
      <div className="w-full h-full rounded-full bg-black dark:bg-white" />
    </div>
  );
};

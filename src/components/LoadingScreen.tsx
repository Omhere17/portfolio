import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 600);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#4A3428] transition-opacity duration-600 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Stylized Name */}
      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-bold text-[#F5F1E8] tracking-wide" style={{ 
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          Om Tiwari
        </h1>
      </div>

      {/* Progress Section */}
      <div className="w-64 md:w-80 space-y-4">
        {/* Percentage */}
        <div className="text-center">
          <span className="text-4xl md:text-5xl font-light text-[#F5F1E8] tracking-wider">
            {Math.round(progress)} %
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1 bg-[#F5F1E8]/20 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#F5F1E8] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isWhiteExpanding, setIsWhiteExpanding] = useState(false);

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
          setIsComplete(true);
          setTimeout(() => {
            setIsExpanding(true);
            setTimeout(() => {
              setIsWhiteExpanding(true);
              setTimeout(() => {
                onLoadingComplete();
              }, 600);
            }, 1000);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Calculate stroke dasharray for circular progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden">
      {/* Blue Expanding Circle Background */}
      <div
        className={`absolute bottom-8 left-8 transition-all ease-in-out ${
          isExpanding ? "scale-[50] duration-1000" : "scale-100 duration-300"
        }`}
        style={{ transformOrigin: "center" }}
      >
        <div 
          className={`w-32 h-32 rounded-full transition-all duration-300 ${
            isComplete ? "bg-primary border-primary" : "bg-background border-border"
          } border-2`}
        />
      </div>

      {/* White Expanding Circle - Reveals Home Page */}
      <div
        className={`absolute bottom-8 left-8 transition-all ease-in-out ${
          isWhiteExpanding ? "scale-[50] duration-600" : "scale-0 duration-300"
        }`}
        style={{ transformOrigin: "center" }}
      >
        <div className="w-32 h-32 rounded-full bg-background border-2 border-background" />
      </div>

      {/* Content */}
      <div
        className={`absolute bottom-8 left-8 flex items-center gap-8 transition-opacity duration-500 ${
          isExpanding ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <svg className="w-32 h-32 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-border"
            />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`transition-all duration-300 ease-linear ${
              isComplete ? "text-white" : "text-foreground"
            }`}
            strokeLinecap="round"
          />
          </svg>
          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-light tracking-wider">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex items-center justify-center">
          <h2 className="text-5xl font-bold text-muted-foreground flex items-center gap-1">
            Loading
            <span className="flex gap-1">
              <span className="animate-[bounce_1.4s_ease-in-out_0s_infinite]">.</span>
              <span className="animate-[bounce_1.4s_ease-in-out_0.2s_infinite]">.</span>
              <span className="animate-[bounce_1.4s_ease-in-out_0.4s_infinite]">.</span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

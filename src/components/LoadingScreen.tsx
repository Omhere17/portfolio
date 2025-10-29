import { useState, useEffect } from "react";

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

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
            setIsExpanding(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Calculate stroke dasharray for circular progress
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Expanding Circle Background */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-800 ${
          isExpanding ? "scale-[20]" : "scale-100"
        }`}
      >
        <div className="w-48 h-48 rounded-full bg-background" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex items-center gap-12 transition-opacity duration-500 ${
          isExpanding ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center">
          <svg className="w-48 h-48 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-border"
            />
            {/* Progress circle */}
            <circle
              cx="96"
              cy="96"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-foreground transition-all duration-100 ease-linear"
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-light tracking-wider">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-md">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Designing with intent, blending innovation and aesthetics to create intuitive, 
            user-centered experiences. Passionate about using design for social good, 
            currently honing my craft as a UXD student at MIT-SD.
          </p>
        </div>
      </div>
    </div>
  );
};

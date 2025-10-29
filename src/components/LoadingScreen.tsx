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
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden">
      {/* Expanding Circle Background */}
      <div
        className={`absolute bottom-8 left-8 transition-all duration-800 ease-in-out ${
          isExpanding ? "scale-[50]" : "scale-100"
        }`}
        style={{ transformOrigin: "center" }}
      >
        <div className="w-32 h-32 rounded-full bg-background border-2 border-border" />
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
              className="text-foreground transition-all duration-100 ease-linear"
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
        <div className="max-w-xs">
          <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wide">
            Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences. Passionate about using design for social good, currently honing my craft as a UXD student at MIT-SD.
          </p>
        </div>
      </div>
    </div>
  );
};

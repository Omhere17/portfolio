import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 animate-fade-out">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-24 h-24 border-4 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 w-24 h-24 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full animate-pulse" />
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 w-24 h-24 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 w-24 h-24 animate-spin" style={{ animationDuration: '2s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
        </div>
        <div className="absolute inset-0 w-24 h-24 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </div>
  );
};

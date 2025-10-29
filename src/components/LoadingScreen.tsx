import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Complete loading after progress reaches 100
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  const letters = "Om Tiwari".split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Left half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="fixed left-0 top-0 bottom-0 w-1/2 z-[9999] bg-primary"
          />

          {/* Right half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="fixed right-0 top-0 bottom-0 w-1/2 z-[9999] bg-primary"
          />

          {/* Content overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Animated letters */}
            <div className="relative mb-16 h-32 flex items-center justify-center">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-6xl md:text-7xl font-bold text-white absolute"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    y: 0,
                    rotate: 0
                  }}
                  animate={{
                    opacity: [0, 1, 1, 1],
                    x: [
                      Math.random() * 200 - 100,
                      Math.random() * 100 - 50,
                      (index - letters.length / 2) * (letter === " " ? 40 : 50),
                    ],
                    y: [
                      Math.random() * 200 - 100,
                      Math.random() * 100 - 50,
                      0,
                    ],
                    rotate: [
                      Math.random() * 360,
                      Math.random() * 180,
                      0,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.3, 1],
                    ease: "easeInOut",
                    delay: index * 0.05,
                  }}
                  style={{ 
                    display: letter === " " ? "inline-block" : "inline-block",
                    width: letter === " " ? "0.5em" : "auto"
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Progress bar and percentage */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-white"
              >
                {progress}%
              </motion.div>
              
              <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

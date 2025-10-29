import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullName, setShowFullName] = useState(true);

  useEffect(() => {
    // Show full name for 1.2 seconds, then shrink to "Om"
    const shrinkTimer = setTimeout(() => {
      setShowFullName(false);
    }, 1200);

    // Complete loading after 2.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="relative">
            {/* Animated background circles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 -m-20 rounded-full bg-primary/10 blur-3xl"
            />

            {/* Main text */}
            <motion.div
              className="relative flex items-center justify-center gap-3 text-6xl font-bold"
              animate={showFullName ? { scale: 1 } : { scale: 0.7 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.span
                className="text-primary"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Om
              </motion.span>

              <AnimatePresence>
                {showFullName && (
                  <motion.span
                    initial={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary overflow-hidden"
                  >
                    Tiwari
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullName, setShowFullName] = useState(true);

  useEffect(() => {
    // Shrink to "Om" after 1.5 seconds
    const shrinkTimer = setTimeout(() => {
      setShowFullName(false);
    }, 1500);

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
        <>
          {/* Left half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed left-0 top-0 bottom-0 w-1/2 z-[9999] bg-primary flex items-center justify-end pr-4"
          >
            <motion.div
              className="text-8xl font-bold text-white"
              animate={showFullName ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Om
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 w-1/2 z-[9999] bg-primary flex items-center justify-start pl-4"
          >
            <AnimatePresence>
              {showFullName && (
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl font-bold text-white"
                >
                  Tiwari
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

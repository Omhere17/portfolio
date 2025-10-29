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

    // Complete loading after 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated moving bar that traces around */}
          <motion.div
            className="absolute w-16 h-1 bg-primary rounded-full"
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{
              x: [
                "50vw", "60vw", "65vw", "65vw", "60vw", "40vw", "35vw", "35vw", "40vw", "50vw"
              ],
              y: [
                "20vh", "25vh", "35vh", "50vh", "65vh", "65vh", "50vh", "35vh", "25vh", "20vh"
              ],
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360, 405],
              scale: [1, 1.5, 1, 1.5, 1, 1.5, 1, 1.5, 1, 1],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
            }}
          />

          {/* Animated circle that follows */}
          <motion.div
            className="absolute w-8 h-8 rounded-full border-2 border-primary"
            animate={{
              x: [
                "50vw", "58vw", "63vw", "63vw", "58vw", "42vw", "37vw", "37vw", "42vw", "50vw"
              ],
              y: [
                "22vh", "27vh", "37vh", "50vh", "63vh", "63vh", "48vh", "37vh", "27vh", "22vh"
              ],
              scale: [0.5, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
              delay: 0.1,
            }}
          />

          {/* Center content */}
          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center gap-3 text-7xl font-bold"
              animate={showFullName ? { scale: 1 } : { scale: 0.6 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Om
              </motion.span>

              <AnimatePresence>
                {showFullName && (
                  <motion.span
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary"
                  >
                    Tiwari
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

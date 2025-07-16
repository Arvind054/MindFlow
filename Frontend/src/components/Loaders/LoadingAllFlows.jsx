import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const thinkingPhrases = [
  "Fetching your brilliant flows...",
  "Analyzing brainwaves 🧠...",
  "Waking up your mind maps...",
  "Organizing creative chaos...",
  "Preparing your flow deck..."
];

const LoadingAllFlows = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % thinkingPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* Spinner */}
      <div className="relative mb-8">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-60"></div>
        <div className="absolute top-1 left-1 text-3xl animate-pulse">🧠</div>
      </div>

      {/* Animated phrase */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={thinkingPhrases[phraseIndex]}
          className="text-2xl font-semibold text-center px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {thinkingPhrases[phraseIndex]}
        </motion.h2>
      </AnimatePresence>

      <p className="text-gray-400 mt-2 text-sm text-center">
        Please wait while we prepare your workspace ✨
      </p>
    </div>
  );
};

export default LoadingAllFlows;

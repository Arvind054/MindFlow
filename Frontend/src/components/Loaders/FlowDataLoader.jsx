import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

const phrases = [
  "Connecting ideas...",
  "Generating your mind flow...",
  "Analyzing thoughts...",
  "Mapping your creativity...",
  "Organizing brilliance..."
];

const FlowDataLoader = () => {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-blue-500 opacity-30"
            initial={{ y: '100vh', x: `${Math.random() * 100}%` }}
            animate={{ y: '-10vh' }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Spinner */}
      <motion.div
        className="z-10 text-5xl text-blue-400 mb-4"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <FaBrain />
      </motion.div>

      {/* Loading Text */}
      <motion.h1
        className="z-10 text-2xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {randomPhrase}
      </motion.h1>

      <p className="z-10 mt-2 text-gray-400 text-sm">Please wait while we visualize your flow...</p>
    </div>
  );
};

export default FlowDataLoader;

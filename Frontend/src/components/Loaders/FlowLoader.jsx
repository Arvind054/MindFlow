import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';
const phrases = [
  "Connecting ideas...",
  "Generating your mind flow...",
  "Analyzing thoughts...",
  "Mapping your creativity...",
  "Organizing brilliance..."
];

const emojiList = ["📌", "🗺️", "🧠", "💭"];

const FlowLoader = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Rotate emojis every 1.2s
  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emojiList.length);
    }, 1200);
    return () => clearInterval(emojiInterval);
  }, []);

  // Rotate phrase every 3s
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(phraseInterval);
  }, []);

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
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* One-at-a-time emoji animation */}
      <div className="z-10 mb-6 text-5xl h-[3rem]">
        <AnimatePresence mode="wait">
          <motion.span
            key={emojiList[emojiIndex]}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {emojiList[emojiIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Loading Phrase */}
      <motion.h1
        className="z-10 text-2xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {phrases[phraseIndex]}
      </motion.h1>

      {/* Subtext */}
      <p className="z-10 mt-2 text-gray-400 text-sm">
        Please wait while we create your flow...
      </p>
    </div>
  );
};

export default FlowLoader;

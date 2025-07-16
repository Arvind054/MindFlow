import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Insights",
    emoji: "🤖",
    description: "Analyze text intelligently using cutting-edge language models to extract key ideas.",
  },
  {
    title: "Interactive Mind Maps",
    emoji: "🗺️",
    description: "Easily visualize relationships and ideas in a beautifully rendered mind map.",
  },
  {
    title: "Lightning Fast Workflow",
    emoji: "⚡",
    description: "Transform your thoughts into structured visual content in seconds.",
  },
  {
    title: "Save & Collaborate",
    emoji: "💾",
    description: "Securely save your mind maps and collaborate in real time (coming soon!).",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-25 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-blue-400 text-center mb-6"
      >
        About MindFlow.AI 🧠
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 text-lg text-center max-w-3xl mb-12"
      >
        MindFlow.AI is an intelligent platform that converts your content into beautiful, interactive mind maps —
        simplifying the way you understand, organize, and retain information.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{feature.emoji}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-2xl"
      >
        <h2 className="text-2xl font-semibold mb-2">Built With ❤️</h2>
        <p className="text-gray-400 text-sm">
          React • TailwindCSS • Express • MongoDB • Google Gemini API • React Flow • Framer Motion
        </p>
      </motion.div>

      <div className="mt-12 text-gray-600 text-sm">
        © {new Date().getFullYear()} MindFlow.AI — Built by Arvind Choudhary
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { Brain, MessageCircle, Map, Rocket, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { createFlowAPI } from "../Store/API/FlowApi";
import toast from "react-hot-toast";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Chat",
    description: "Engage with an intelligent assistant for learning, brainstorming, or getting coding help.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Mind Map Generator",
    description: "Convert your thoughts or text into visually organized mind maps in seconds.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Real-Time Collaboration",
    description: "Collaborate with teammates and share ideas seamlessly through chat and maps.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Seamless UI/UX",
    description: "A beautifully designed and intuitive interface to help you stay focused.",
    color: "from-green-500 to-green-600"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const HomePage = () => {
  const navigator = useNavigate();
  const handleCreateFlow = async()=>{
     try{
         const id = await createFlowAPI();
         console.log(id);
         navigator(`/create/${id}`);
     }catch(err){
       console.log(err);
       toast.error("Internal Server Error, please Try Again");
     }
  }
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1a233a] to-[#1e293b] text-white min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-900/20 rounded-full filter blur-3xl animate-float-delay-2"></div>
        </div>

        <motion.div
          className="max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* LOGO */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 animate-pulse-slow">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            className="text-5xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Organize Chaos <span className="whitespace-nowrap">into Clarity</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            className="text-gray-300/90 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            transforms your ideas into structured, intelligent mind maps — guided by AI, built for clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button
              className="relative group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 overflow-hidden" onClick={handleCreateFlow}
            >
              <span className="relative z-10">🚀 Get Started Free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute right-4 group-hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-5 h-5" />
              </span>
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl shadow transition-all duration-300"
            >
              <span>See How It Works</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Tutorial Video */}
      <section className="px-4 py-20 md:py-32 flex justify-center relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0f172a] to-transparent z-0"></div>
        <motion.div
          className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 relative z-10 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg animate-pulse cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop" alt="App preview" className="w-full h-full object-cover opacity-70" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#0f172a] z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white/5 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-4 border border-white/10">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Workflow</span>
            </h2>
            <p className="text-gray-300/90 text-lg max-w-2xl mx-auto">
              Everything you need to organize ideas, collaborate with your team, and bring your projects to life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] p-6 backdrop-blur-sm border border-white/10 hover:border-transparent transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feat.color}"></div>
                <div className="relative z-10">
                  <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${feat.color} shadow-md`}>
                    {React.cloneElement(feat.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feat.title}</h3>
                  <p className="text-gray-300/90 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="px-6 py-20 md:py-32 flex justify-center">
        <motion.div
          className="w-full max-w-5xl rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-white/10 backdrop-blur-sm p-12 text-center rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your ideas?</h3>
            <p className="text-gray-300/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators and teams who are already using MindFlow to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="relative group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl shadow transition-all duration-300"
              >
                <span>Schedule Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;    
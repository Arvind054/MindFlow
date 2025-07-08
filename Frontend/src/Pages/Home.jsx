import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Sparkles, BrainCircuit, Rocket, Globe, Zap,PencilRuler,FileText,ShieldCheck} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full bg-[#121222] border-gray-800 hover:border-purple-500 transition-all duration-300 text-white-400">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function HomePage() {
  const navigator = useNavigate();
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI-Powered Generation",
      description: "Transform bullet points into structured mind maps instantly with our advanced AI.",
    },
    {
      icon: <Globe size={24} />,
      title: "Cloud Sync",
      description: "Access your mind maps anywhere, anytime. All changes sync across devices.",
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Real-time collaboration and editing with no lag or delays.",
    },
    {
      icon: <PencilRuler size={24}/>,
      title: "Customise Your Flows",
      description: "Customise Your Mind Maps based on you Understanding and requirements"
    }, {
      icon: <FileText size={24} />,
      title: "Download As PDF",
      description: "on One Click Easily Download your Flows to your Local Machine"
    },{
      icon: <ShieldCheck size={24}/>,
      title: "100% secure",
      description: "your data is 100% safe and Secure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#151515] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <main className="relative flex flex-col items-center justify-center text-center px-6 py-32 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={48} className="text-purple-500 mb-6 mx-auto animate-pulse" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            Visualize Your <br />Thoughts Instantly
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mb-10"
          >
            MindFlow.AI transforms your unstructured ideas into beautiful, editable mind maps with the power of artificial intelligence.
          </motion.p>
          <p className="front-sm border border-white rounded-lg px-2 mb-4">MindFlow.AI v1.0⚡</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer" onClick= {()=>navigator("/create")}>
              <Rocket className="mr-2" /> Get Started for Free
            </Button>
          </motion.div>
        </main>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to organize your thoughts and boost productivity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="px-6 py-20 bg-gradient-to-b from-[#151515] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <Card className="w-full mx-auto shadow-2xl border-gray-800 bg-[#121212] overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="text-purple-500" /> How MindFlow.AI Works
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="MindFlow.AI Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 text-center bg-gradient-to-b from-[#0a0a0a] to-[#151515]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of creators, thinkers, and innovators who use MindFlow.AI daily.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all">
              Start Mapping for Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} MindFlow.AI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            Crafted with ❤️ by Arvind
          </div>
        </div>
      </footer>
    </div>
  );
}
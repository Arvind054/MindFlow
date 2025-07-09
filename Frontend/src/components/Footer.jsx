import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MindFlow</h2>
          <p className="text-sm text-gray-400">
            Turn thoughts into structured clarity with AI-powered mind maps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#tutorial" className="hover:text-blue-400">Tutorial</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="https://github.com/Arvind054" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/arvind-choudhary-18a23728a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="arvindchoudhary054@gmail.com">
              <Mail className="w-5 h-5 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500 flex flex-col md:flex-row items-center justify-center gap-1">
        <span>&copy; {new Date().getFullYear()} MindFlow. All rights reserved.</span>
        <span className="flex items-center gap-1">
          | Made with{" "}
          <Heart className="inline w-4 h-4 text-red-500 animate-pulse" />
          by <span className="font-semibold text-white">Arvind</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

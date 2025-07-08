import React from "react";
import Logo from "../assets/MindFlowLogo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="MindFlow Logo" className="h-8 drop-shadow-lg" />
          <h2 className="font-cursive text-2xl text-purple-300 tracking-wide">
            MindFlow.AI
          </h2>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a
            href="#features"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Features
          </a>
          <a
            href="#tutorial"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Tutorial
          </a>
          <a
            href="#about"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button (Optional) */}
        <a
          href="#get-started"
          className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition duration-200 shadow-md"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

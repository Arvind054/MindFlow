import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Chat", href: "/createFlow" },
    { name: "MindMap", href: "/myflows" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="bg-[#0f172a] text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-blue-400 tracking-tight">
            MindFlow
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Avatar */}
          <div className="hidden md:block">
            <img
              src="https://api.dicebear.com/7.x/identicon/svg?seed=MindFlow"
              alt="avatar"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-400"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pt-2 pb-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-white hover:text-blue-400 transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

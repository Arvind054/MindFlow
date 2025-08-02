import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import { getUserProfile } from '../Store/API/UserApi';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.user);
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "MyMap", href: "/myflows" },
    { name: "About", href: "/about" },
    { name: "Tutorial", href: ""}
  ];
const handleLogin = ()=>{
  navigator("/login");
}
useEffect(()=>{
  const tokenInfo = JSON.parse(localStorage.getItem('VerificationToken'));
 try{
   if(isAuthenticated || !tokenInfo)return ;
   getUserProfile(tokenInfo,dispatch);
  
 }catch(err){
  console.log(err);
 }
}, []);
  return (
    <nav className="bg-[#0f172a] text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {console.log("user is", user)}
          <div className="text-2xl font-extrabold text-blue-400 tracking-tight cursor-pointer" onClick={()=>navigator('/')}>
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
            {!isAuthenticated && <button className="h-9 bg-blue-800 p-2 cursor-pointer rounded-md" onClick={handleLogin}>Login</button>}
           { isAuthenticated && <img
              src={user?.picture}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://api.dicebear.com/7.x/identicon/svg?seed=MindFlow";
              }}
              alt="avatar"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-400"
            />}
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

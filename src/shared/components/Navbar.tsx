import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Destinations", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">

      {/* 🔵 Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <span>📧 support@edusetu.com</span>

          <div className="space-x-4">
            <button className="hover:underline">Login</button>
            <button className="hover:underline">Register</button>
          </div>
        </div>
      </div>

      {/* 🟣 Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">EduSetu</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-sm border rounded hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-purple-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block">
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t space-y-2">
            <button className="w-full text-left">Login</button>
            <button className="w-full text-left text-primary font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
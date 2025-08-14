"use client";

import { Button } from "@/components/ui/button";
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
    {/* Logo */}
    <div className="text-2xl font-bold">Esma Portfolio</div>

    {/* Navigation Links */}
    <div className="flex items-center space-x-4">
      <a href="#home" className="flex items-center space-x-1 hover:text-blue-400">
        <FaHome /> <span>Home</span>
      </a>
      <a href="#about" className="flex items-center space-x-1 hover:text-blue-400">
        <FaUser /> <span>About</span>
      </a>
      <a href="#skills" className="flex items-center space-x-1 hover:text-blue-400">
        <FaLaptopCode /> <span>Skills</span>
      </a>
      <a href="#projects" className="flex items-center space-x-1 hover:text-blue-400">
        <FaProjectDiagram /> <span>Projects</span>
      </a>
      <a href="#contact" className="flex items-center space-x-1 hover:text-blue-400">
        <FaEnvelope /> <span>Contact</span>
      </a>
    </div>

    {/* CTA Button */}
    <Button
      variant="default"
      className="transition-transform transform hover:scale-105 hover:bg-blue-600 text-white"
    >
      Hire Me
    </Button>
  </div>
</nav>
  );
}
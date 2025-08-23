"use client";

import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import {
  Navbar,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme(); // ✅ Initialize theme

  // Track scroll
  const { scrollY } = useScroll({ target: ref });
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 w-full z-50"
      animate={{
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        backgroundColor: scrolled
          ? "rgba(17, 24, 39, 0.85)"
          : "rgba(17, 24, 39, 0.6)",
        paddingTop: scrolled ? 6 : 12,
        paddingBottom: scrolled ? 6 : 12,
        boxShadow: scrolled
          ? "0 8px 24px rgba(0,0,0,0.2)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="px-6 flex items-center justify-between">
          <NavbarLogo />
          <NavItems
            items={navItems}
            className={`gap-6 transition-colors duration-500 ${
              scrolled ? "text-gray-300" : "text-white"
            }`}
          />
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="px-4 py-3 flex justify-between items-center">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-4 rounded text-white hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Dark Mode Toggle */}
            <div className="mt-4 flex justify-center">
              <button
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}
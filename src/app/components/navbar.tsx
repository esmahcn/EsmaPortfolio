"use client";

import { useState, useRef } from "react";
import {
  Navbar,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
            className={`gap-6 transition-colors duration-300 ${
              scrolled ? "text-gray-600" : "text-white"
            }`}
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              href="#contact"
              className={`transition transform hover:scale-105 ${
                scrolled
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Hire Me
            </NavbarButton>
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
                className={`block py-2 px-4 rounded transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-200 hover:text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              variant="primary"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
              href="#contact"
            >
              Hire Me
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}
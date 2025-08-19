"use client";

import { useState } from "react";
import { Navbar, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavBody, NavItems, NavbarButton, NavbarLogo } from "@/components/ui/resizable-navbar";

export default function NavbarComponent() { // <-- your custom navbar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-white" />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="#contact">
              Hire Me
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-gray-900 text-white"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              variant="primary"
              className="mt-4 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              href="#contact"
            >
              Hire Me
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

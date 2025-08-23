"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import React, { useRef, useState } from "react";

// Types
interface NavbarProps { children: React.ReactNode; className?: string; }
interface NavBodyProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface NavItemsProps { items: { name: string; link: string }[]; className?: string; onItemClick?: () => void; }
interface MobileNavProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface MobileNavHeaderProps { children: React.ReactNode; className?: string; }
interface MobileNavMenuProps { children: React.ReactNode; className?: string; isOpen: boolean; onClose: () => void; }

// Navbar
export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 100));

  return (
    <motion.div ref={ref} className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

// NavBody
export const NavBody = ({ children, className, visible }: NavBodyProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset"
        : "none",
      width: visible ? "40%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ minWidth: "800px" }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
      visible && "bg-white/10",
      className
    )}
  >
    {children}
  </motion.div>
);

// NavItems
export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white hover:text-gray-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100/10"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// MobileNav
export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset"
        : "none",
      width: visible ? "90%" : "100%",
      paddingRight: visible ? "12px" : "0px",
      paddingLeft: visible ? "12px" : "0px",
      borderRadius: visible ? "4px" : "2rem",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    className={cn(
      "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
      visible && "bg-white/10",
      className
    )}
  >
    {children}
  </motion.div>
);

// MobileNavHeader
export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

// MobileNavMenu
export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white/10 px-4 py-8 shadow-lg text-white",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

// MobileNavToggle
export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) =>
  isOpen ? <IconX className="text-white" onClick={onClick} /> : <IconMenu2 className="text-white" onClick={onClick} />;

// NavbarLogo
export const NavbarLogo = () => (
  <a href="#" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white">
    <img src="/img/logo.avif" alt="logo" width={30} height={30} />
  </a>
);

// NavbarButton
export const NavbarButton = ({ href, children, className }: { href?: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={cn(
      "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition",
      className
    )}
  >
    {children}
  </a>
);
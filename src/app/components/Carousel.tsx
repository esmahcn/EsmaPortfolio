"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    image: "/img/portfolio.png",
    link: "#",
  },
  {
    title: "ToDo App",
    description: "A React + Redux ToDo application with local storage support.",
    image: "/img/todo.png",
    link: "#",
  },
  {
    title: "E-commerce Store",
    description: "Sneaker store frontend built with React and ShadCN UI.",
    image: "/img/ecommerce.png",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A modern blog built with Next.js and Markdown.",
    image: "/img/blog.png",
    link: "#",
  },
  {
    title: "Dashboard App",
    description: "Admin dashboard with charts and analytics.",
    image: "/img/dashboard.png",
    link: "#",
  },
];

const GAP = 16;
const CARD_WIDTH = 260; // medium width
const CARD_HEIGHT = 220; // medium height
const SPRING = { type: "spring", stiffness: 300, damping: 30 };

export default function ProjectsMiniCarousel({
  autoplay = true,
  autoplayDelay = 3000,
}: {
  autoplay?: boolean;
  autoplayDelay?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackItemOffset = CARD_WIDTH + GAP;

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      if (!isHovered) setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -50 || velocity < -300) setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    else if (offset > 50 || velocity > 300)
      setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full max-w-[800px] mx-auto p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -trackItemOffset * (PROJECTS.length - 1), right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x }}
        animate={{ x: -currentIndex * trackItemOffset }}
        transition={SPRING}
      >
        {PROJECTS.map((project, index) => (
          <Card
            key={index}
            className="min-w-[260px] h-[220px] flex-shrink-0 flex flex-col justify-between bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md p-3"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-28 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
              onClick={() => window.open(project.link, "_blank")}
            >
              View
            </Button>
          </Card>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
        }
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % PROJECTS.length)}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {PROJECTS.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(i)}
            animate={{ scale: currentIndex === i ? 1.2 : 1 }}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Hyperspeed from "@/blocks/Backgrounds/Hyperspeed/Hyperspeed";
import Typed from "react-typed";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        {/* <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            lanesPerRoad: 4,
            fov: 90,
            colors: {
              roadColor: 0x080808,
              background: 0x000000,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
              islandColor: 0x222222,
              shoulderLines: 0xffffff,
              brokenLines: 0xffff00,
            },
          }}
        /> */}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center px-6 md:px-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm Esma
        </h1>

        {/* Typing animation with gradient + glow */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
  <ReactTyped
    strings={[
      "Full Stack Web Developer",
      "Frontend Enthusiast",
      "Backend Explorer",
      "Biomedical Informatics Graduate",
    ]}
    typeSpeed={60}
    backSpeed={40}
    loop
    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
  />
</h2>

        <Button
          variant="default"
          className="transition-transform transform hover:scale-105 hover:bg-blue-600"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        {/* <AboutSection /> */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10">
        <ContactSection />
      </section>
    </div>
  );
}
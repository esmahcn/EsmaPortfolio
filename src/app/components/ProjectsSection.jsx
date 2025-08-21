"use client";

import ProjectsCarousel from "./Carousel";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
      <ProjectsCarousel baseWidth={320} />
    </section>
  );
}
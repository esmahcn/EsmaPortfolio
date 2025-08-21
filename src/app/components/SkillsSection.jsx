"use client";

import GlassIcons from "@/blocks/Components/GlassIcons/GlassIcons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiPostgresql,
  SiNodedotjs, // correct name

  SiHtml5,
  SiCss3,
} from "react-icons/si";
export default function SkillsSection() {
  const items = [
    { icon: <SiReact size={24} />, color: "blue", label: "React" },
    { icon: <SiNextdotjs size={24} />, color: "black", label: "Next.js" },
    { icon: <SiTailwindcss size={24} />, color: "cyan", label: "Tailwind CSS" },
    { icon: <SiRedux size={24} />, color: "purple", label: "Redux" },
    { icon: <SiJavascript size={24} />, color: "yellow", label: "JavaScript" },
    { icon: <SiPostgresql size={24} />, color: "indigo", label: "PostgreSQL" },
    { icon:<SiNodedotjs size={24} />, color: "green", label: "Node.js" },
    
    { icon: <SiHtml5 size={24} />, color: "orange", label: "HTML5" },
    { icon: <SiCss3 size={24} />, color: "blue", label: "CSS3" },
  ];

  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Skills</h2>
      <div style={{ height: "400px", position: "relative" }}>
        <GlassIcons items={items} className="custom-class" />
      </div>
    </section>
  );
}
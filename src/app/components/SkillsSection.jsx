import { Card } from "@/components/ui/card";

export default function SkillsSection() {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Redux", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
  ];

  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <Card
            key={i}
            className="
              p-6 text-center
              bg-white/10 backdrop-blur-lg
              border border-white/20
              rounded-2xl
              shadow-lg
              transition-transform transform
              hover:shadow-2xl hover:-translate-y-2
              duration-300
            "
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {skill.name}
            </h3>
            <p className="text-gray-200">{skill.level}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
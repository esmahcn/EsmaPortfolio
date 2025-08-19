import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind CSS.",
      link: "#",
      image: "/img/portfolio.png", // replace with your image
    },
    {
      title: "ToDo App",
      description: "A React + Redux ToDo application with local storage support.",
      link: "#",
      image: "/img/todo.png",
    },
    {
      title: "E-commerce Store",
      description: "Sneaker store frontend built with React and ShadCN UI.",
      link: "#",
      image: "/img/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="
              p-6 flex flex-col justify-between
              bg-white/10 backdrop-blur-lg
              border border-white/20
              rounded-2xl shadow-lg
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
            </div>

            {/* View Button */}
            <Button
              variant="default"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
              onClick={() => window.open(project.link, "_blank")}
            >
              View Project
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
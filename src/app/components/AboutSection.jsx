import { Card } from "@/components/ui/card";

export default function AboutSection({ id }) {
  return (
    <section id={id} className="max-w-3xl md:max-w-4xl mx-auto my-16 px-6 md:px-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
  <Card className="p-6 transition-transform transform hover:shadow-lg hover:-translate-y-1 duration-300">
    <p className="text-gray-700 mb-4">
      Hi! I'm Esma, a Full Stack Web Developer with a Master’s degree in Biomedical Informatics.
    </p>
    <p className="text-gray-700">
      Skills: React, Next.js, Tailwind CSS, Redux, and more.
    </p>
  </Card>
</section>
  );
}
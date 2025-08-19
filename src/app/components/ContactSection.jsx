import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>

      <Card
        className="
          p-6
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-2xl shadow-lg
          text-white
        "
      >
        {/* Contact Form */}
        <form className="flex flex-col gap-4 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white"
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white"
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-300">Or reach me on social media:</p>
          <div className="flex justify-center gap-6 mt-3">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-sky-400 hover:text-sky-500 transition-colors"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
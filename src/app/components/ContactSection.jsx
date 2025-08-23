"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-white">
        {/* Contact Form */}
        <form className="flex flex-col gap-4 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-blue-500"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-blue-500"
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            className="bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-blue-500"
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
          <p className="text-gray-300 mb-3">Or reach me on social media:</p>
          <div className="flex justify-center gap-6">
            <a
              href="esma-hacene"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors transform hover:scale-110"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/esmahcn"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://wa.me/213798379164"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors transform hover:scale-110"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
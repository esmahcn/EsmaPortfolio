import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>

      <Card className="p-6">
       <form className="flex flex-col gap-4 max-w-xl mx-auto">
  <Input type="text" placeholder="Your Name" />
  <Input type="email" placeholder="Your Email" />
  <Textarea placeholder="Your Message" rows={5} />
  <Button type="submit" className="transition-transform transform hover:scale-105 hover:bg-blue-600">
    Send Message
  </Button>
</form>

        <div className="mt-6 text-center text-gray-700">
          <p>Or reach me on social media:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" target="_blank" className="underline">
              LinkedIn
            </a>
            <a href="#" target="_blank" className="underline">
              GitHub
            </a>
            <a href="#" target="_blank" className="underline">
              Twitter
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/allzgora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "❌ Failed to send message.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "❌ An error occurred.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let’s build something meaningful together.
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            My inbox is always open.
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/aswini-sm-97292629a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_.aswini._10?igsh=MmZvdXA2bnRxYnli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300 shadow-lg"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full p-8 bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="What should I call you?"
                className="bg-gray-900/70 border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I reach you?"
                className="bg-gray-900/70 border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="bg-gray-900/70 border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Slide into DMs (Professionally)"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

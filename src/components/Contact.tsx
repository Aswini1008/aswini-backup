import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const newErrors = {
      name: name ? "" : "Name is required",
      email: email
        ? isValidEmail(email)
          ? ""
          : "Enter a valid email"
        : "Email is required",
      message: message ? "" : "Message is required",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err !== "")) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://getform.io/f/allzgora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: "✅ Message sent!",
          description: "I'll get back to you soon. Thanks for reaching out!",
        });
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        toast({
          title: "❌ Error!",
          description: "Something went wrong. Try again later.",
        });
        setStatus("error");
      }
    } catch (error) {
      toast({
        title: "❌ Submission failed",
        description: "Network issue or server error.",
      });
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 3000); // Reset after animation
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900/80 via-slate-900 to-slate-950 text-white"
    >
      <div className="section-container max-w-6xl mx-auto px-4 sm:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-400">
            Have an idea or opportunity? Let’s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={fadeInUp()}>
                <label htmlFor="name" className="text-sm text-slate-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp(0.1)}>
                <label htmlFor="email" className="text-sm text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp(0.2)}>
                <label htmlFor="message" className="text-sm text-slate-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp(0.3)}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-lg py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-pink-600/30 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.form>

            {/* Status feedback (motion-based) */}
            {status && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-2 text-sm mt-4"
              >
                {status === "success" ? (
                  <span className="flex items-center text-green-400">
                    <CheckCircle2 className="w-5 h-5 mr-1" /> Message sent
                    successfully!
                  </span>
                ) : (
                  <span className="flex items-center text-red-400">
                    <XCircle className="w-5 h-5 mr-1" /> Something went wrong.
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-5 p-8 bg-slate-800 rounded-xl shadow-xl border border-slate-700 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white">Let’s Collaborate</h3>
            <p className="text-slate-400">
              I’m Aswini, a full-stack developer passionate about design and
              backend logic. Always open to freelance, collaborations, or tech
              convos!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:smaswini006@gmail.com"
                className="text-pink-400 hover:underline block"
              >
                smaswini006@gmail.com
              </a>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Aswini1008"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="bg-slate-700 p-2 rounded-md hover:bg-pink-600/20 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aswini-sm-97292629a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="bg-slate-700 p-2 rounded-md hover:bg-pink-600/20 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PR Power Infrastructure – Company Portfolio Website",
      description:
        "A responsive corporate website built with animated routing, reusable components, and scroll-based navigation across 6+ sections. Enhanced UX led to a 35% lower bounce rate.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Framer Motion",
        "Vite",
      ],
      image: "/images/pr.png",
      demoUrl: "https://pr-power.netlify.app",
      codeUrl: "https://github.com/Aswini1008/PR-Final",
    },
    {
      title: "Church Website",
      description:
        "Responsive portal for event updates, media gallery, and announcements. Built with MERN stack and deployed on Netlify.",
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
      image: "/images/church-screenshot.jpg",
      demoUrl: "https://cosmic-squirrel-a9efa8.netlify.app/",
      codeUrl: "https://github.com/aravinthbalu15/panchu",
    },
    {
      title: "Task Manager Tool",
      description:
        "A full-stack task management tool with drag-drop feature, analytics, and real-time updates using WebSockets.",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-task-manager.vercel.app",
      codeUrl: "https://github.com/yourusername/task-manager",
    },
    {
      title: "E-Commerce Website",
      description:
        "An e-commerce platform with payment integration, product filtering, authentication, and admin dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-ecommerce-demo.netlify.app",
      codeUrl: "https://github.com/yourusername/ecommerce-platform",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white"
    >
      <div className="section-container max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Showcasing impactful apps I’ve built with modern tech — from
            corporate portfolios to e-commerce.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-pink-500/60 overflow-hidden shadow-xl hover:shadow-pink-600/40 transition-all duration-300"
            >
              {/* Image with Hover Overlay */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-slate-700 text-pink-300 border border-pink-500/30 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white w-full transition-transform hover:scale-105"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-slate-900 border border-slate-300 hover:bg-pink-50 w-full transition-transform hover:scale-105"
                  >
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

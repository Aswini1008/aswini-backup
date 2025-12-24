
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "PR Power Infrastructure – Corporate Website",
    description: "A professional corporate portfolio website built using React with smooth animations, reusable components, and clean section-based navigation. The site improves brand presence and user engagement through responsive design and modern UI patterns.",
    highlights: [
      "Fully responsive across all devices",
      "Animated section transitions",
      "Clean corporate UI/UX",
      "SEO-friendly structure",
    ],
    tech: ["React.js", "Tailwind CSS", "React Router", "Framer Motion", "Vite"],
    liveLink: "https://www.prpowerinfra.com/",
    githubLink: "https://github.com/Aswini1008/PR-Final",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c20?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Church Website – Events & Announcements Portal",
    description: "A responsive web application developed to manage church announcements, event updates, and media galleries. The platform provides an organized and accessible interface for community engagement.",
    highlights: [
      "Responsive layout",
      "Event and announcement sections",
      "Media gallery integration",
      "Simple and clean UI",
    ],
    tech: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
    liveLink: "https://cosmic-squirrel-a9efa8.netlify.app/",
    githubLink: "https://github.com/aravinthbalu15/panchu",
    image: "https://images.unsplash.com/photo-1518365664917-2115517a4c49?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Things I've Built
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                A selection of my professional and personal work.
            </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className={index % 2 === 0 ? "" : "lg:order-first"}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{highlight}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-blue-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-2 border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 shadow-md transition-all hover:border-gray-500 hover:bg-gray-800/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { motion } from "framer-motion";
import { Rocket, Wrench, Pen, Zap } from "lucide-react";

const skills = [
  {
    title: "Languages",
    items: ["Java", "SQL", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Java", "JDBC", "Servlets", "Basic Spring"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Firebase", "VS Code"],
  },
  {
    title: "Interests",
    items: ["AI & Intelligent Systems", "Backend Architecture", "Problem Solving"],
  },
];

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-12">
          Here’s the tea ☕
        </h2>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-gray-700/50"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an engineering student and passionate Full-Stack Java Developer
            with a strong interest in backend systems, scalable architectures,
            and AI-powered applications. I enjoy transforming ideas into
            real-world solutions and continuously improving my skills through
            projects, internships, and hands-on learning.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I focus on writing clean, maintainable code and building
            applications that are both technically strong and user-friendly.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-700/40"
            >
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                {skill.title}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

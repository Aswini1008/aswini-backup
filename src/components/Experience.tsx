import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Meta Taaraka AI Pvt. Ltd",
    position: "AI & Python Research Intern",
    location: "Remote",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Designed and implemented an AI-powered Expense Tracker using Python and machine learning to deliver personalized financial insights.",
      "Developed and deployed a real-time Weather Forecasting API using Flask and OpenWeatherMap, integrating dynamic geolocation-based updates.",
    ],
    tech: ["Python", "Artificial Intelligence", "Machine Learning", "Flask", "API", "OpenWeatherMap"]
  },
  {
    company: "Test Yatra Pvt. Ltd",
    position: "Web Development Intern",
    location: "Chennai",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Built responsive, modular web UIs using React.js and Tailwind CSS with reusable components for scalability.",
      "Reduced development time by 25% through modular design implementation and efficient component reuse.",
      "Collaborated in Agile sprints, leveraging GitHub for version control, peer code reviews, and CI/CD pipelines.",
    ],
    tech: ["React.js", "Tailwind CSS", "GitHub", "Agile", "Modular Design"]
  },
  {
    company: "Integral Coach Factory (ICF)",
    position: "Intern – Electrical Design",
    location: "Chennai",
    period: "May 2024 – Jun 2024",
    points: [
      "Gained practical knowledge of electrical circuit design and wiring layouts for railway coach systems.",
      "Assisted engineers in preparing safety-compliant electrical layouts, schematic diagrams, and design documentation.",
    ],
    tech: ["Electrical Wiring", "Circuit Design", "Rail Coach Systems", "Layout Planning", "Safety Standards"]
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white"
    >
      <div className="section-container max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text flex items-center justify-center gap-2">
            Experience
          </span>
        </motion.h2>

        <div className="relative border-l border-pink-500/30 pl-6 space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-slate-800/40 border border-pink-500/10 rounded-xl p-6 shadow-md hover:shadow-pink-600/20 transition-all"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[38px] top-5 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow" />

              {/* Company & Role */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-pink-400">{exp.company}</h3>
                <div className="text-sm text-pink-200">
                  {exp.period} | {exp.location}
                </div>
              </div>

              <h4 className="text-lg font-medium text-white mb-2">{exp.position}</h4>

              <ul className="list-disc list-inside text-sm text-pink-100 leading-relaxed space-y-1 mb-4">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-900 text-pink-300 px-3 py-1 rounded-full border border-pink-500/20 hover:bg-pink-700/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

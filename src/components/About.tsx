import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Laptop2,
  Code2,
  Award,
} from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 text-white px-4 md:px-0 relative"
    >
      <div className="section-container px-4 max-w-6xl mx-auto py-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT: Bio & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-lg text-pink-100 mb-5 leading-relaxed">
              I’m a <span className="text-pink-400 font-semibold">Full- Stack Developer, Java Programmer & AI Enthusiast  </span> 
              passionate about building scalable systems and intelligent applications that make a real impact.
            </p>

            <p className="text-lg text-pink-100 mb-5 leading-relaxed">
              Along with strong backend expertise in <span className="text-pink-300 font-medium">Java</span>, 
              I have hands-on experience in <span className="text-pink-300 font-medium">React, RESTful APIs, MongoDB, and Tailwind CSS</span>. 
              My focus lies in designing clean architectures, reusable components, and delivering seamless user experiences.
            </p>

            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
              I also completed an internship as a <span className="text-pink-300 font-medium">Python & AI Research Intern</span>, 
              where I worked on machine learning models, explored intelligent systems, and built end-to-end 
              Python-based AI projects. 
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/60 p-6 rounded-xl text-center shadow hover:shadow-xl transition">
                <h3 className="text-3xl font-bold text-pink-400">4+</h3>
                <p className="text-sm mt-1 text-pink-100">Projects Delivered</p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-xl text-center shadow hover:shadow-xl transition">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-pink-300" />
                </div>
                <p className="text-base font-medium text-pink-200">
                  3+ Professional Internships
                </p>
                <p className="text-xs text-pink-100">ICF, Test Yatra, BSNL, AI Research</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%]"
          >
            <div className="bg-slate-800/40 rounded-2xl p-6 shadow-md hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">
                Quick Facts
              </h3>
              <ul className="space-y-5 text-pink-100">
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-pink-400" />
                  B.E in Electronics & Communication – Panimalar Engineering College
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-pink-400" />
                  Internships in Full-Stack, Python & AI Research, and Electronics domains
                </li>
                <li className="flex items-center gap-3">
                  <Laptop2 className="w-5 h-5 text-pink-400" />
                  Tech Stack: Java, Python, React js, Tailwind CSS, Firebase,AI, Git
                </li>
                <li className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-pink-400" />
                  Delivered AI-powered Python projects & scalable web applications
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Rocket,
  Code2,
  ServerCog,
  Users,
} from 'lucide-react';

const highlights = [
  {
    title: 'Java & DSA Proficiency',
    description:
      'Cracked 500+ problems in Java, focusing on data structures, recursion, and optimization.',
    icon: <Code2 className="w-12 h-12 text-pink-500" />,
  },
  {
    title: 'Full-Stack Development',
    description:
      'Crafted full-stack apps using React.js, Firebase, Tailwind, MongoDB & Express.',
    icon: <Rocket className="w-12 h-12 text-pink-500" />,
  },
  {
    title: 'System Design Skills',
    description:
      'Applied scalable architecture principles to design APIs and modular frontend.',
    icon: <ServerCog className="w-12 h-12 text-pink-500" />,
  },
  {
    title: 'Hackathon Leadership',
    description:
      'Led a Flutter hackathon team, building a mobile app prototype in 24 hours.',
    icon: <Users className="w-12 h-12 text-pink-500" />,
  },
];

const TechHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="tech-highlights"
      className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold gradient-text mb-4">Tech Highlights</h2>
        <p className="text-lg text-slate-300">
          A few engineering wins I’m proud of from my coding journey 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-pink-500/30 transition duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-pink-400 mb-2">{item.title}</h3>
            <p className="text-slate-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechHighlights;

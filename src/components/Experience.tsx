
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Integral Coach Factory (ICF)",
    subtitle: "Electrical & Technical Internship",
    description: "Worked on electric circuits and wiring systems, gaining practical engineering exposure.",
    date: "Jun 2024 - Jul 2024",
    type: "internship",
  },
  {
    title: "BSNL",
    subtitle: "Networking & Telecom Internship",
    description: "Learned networking fundamentals and telecom infrastructure.",
    date: "Apr 2024 - May 2024",
    type: "internship",
  },
  {
    title: "Test Yatra",
    subtitle: "Software Testing Internship",
    description: "Understood testing processes and quality assurance basics.",
    date: "Feb 2024 - Mar 2024",
    type: "internship",
  },
];

const educationData = [
  {
    title: "B.Tech, ECE",
    subtitle: "Panimalar Engineering College",
    description: "Focusing on electronics, communication, and software engineering principles.",
    date: "2023 - 2027",
  },
  {
    title: "HSC",
    subtitle: "SBOA MHSS",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    date: "2022 - 2023",
  },
];

const TimelineItem = ({ data, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="relative pl-12 mb-8"
  >
    <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-blue-400">
      {icon}
    </div>
    <div className="absolute left-[15px] top-10 h-full w-px bg-gray-700" />

    <p className="text-xs text-gray-400 uppercase tracking-wider">{data.date}</p>
    <h3 className="text-lg font-semibold text-white mt-1">{data.title}</h3>
    <h4 className="text-md font-medium text-blue-300">{data.subtitle}</h4>
    <p className="text-sm text-gray-400 mt-2">{data.description}</p>
  </motion.div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-400" /> Experience (The
            Serious Stuff)
          </h2>
          <div className="relative">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                data={item}
                icon={<Briefcase className="w-4 h-4 text-blue-400" />}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-400" /> Education (Where I
            Hang Out)
          </h2>
          <div className="relative">
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                data={item}
                icon={<GraduationCap className="w-4 h-4 text-blue-400" />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

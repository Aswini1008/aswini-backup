
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaBolt, FaRobot } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Web Application Development",
    description:
      "I build complete, production-ready web applications with a focus on clean architecture and long-term scalability to drive business growth.",
  },
  {
    icon: FaDatabase,
    title: "Backend APIs (Java)",
    description:
      "I design and implement high-performance, secure RESTful APIs using Java and Spring Boot, enabling robust communication between your frontend and backend.",
  },
  {
    icon: FaBolt,
    title: "Firebase Integration",
    description:
      "Leverage the power of Firebase for rapid development. I integrate Authentication, Firestore, and Hosting to build and deploy your app efficiently.",
  },
  {
    icon: FaRobot,
    title: "AI-Powered Solutions",
    description:
      "I integrate cutting-edge AI and machine learning models to create intelligent features that provide your users with a smarter, more personalized experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          What I Offer
        </h2>
        <p className="text-blue-300 text-sm mb-12">SERVICES</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-800/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-gray-700/50 flex flex-col items-center text-center"
            >
              <div className="text-blue-400 mb-4">
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

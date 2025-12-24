
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  const identityLine =
    "I build scalable, clean, and efficient web applications using Java, modern web technologies, and AI-driven solutions.";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-gray-900 py-24 text-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto flex max-w-6xl flex-col items-center px-4 text-center lg:flex-row lg:text-left">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-gray-800/50 px-4 py-1 text-sm font-semibold tracking-wider text-blue-300"
          >
            WELCOME TO MY CORNER OF THE INTERNET
          </motion.div>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Hi, I'm <span className="text-blue-400">S M Aswini</span>.
          </h1>

          <h2 className="mt-4 text-3xl font-semibold text-gray-300 md:text-4xl">
            Full-Stack Java Developer & AI Enthusiast
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400 lg:max-w-none">
            {identityLine}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Let's Make Magic
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full border-2 border-gray-700 px-8 py-3 text-lg font-medium text-gray-300 shadow-md transition-all hover:border-gray-500 hover:bg-gray-800/50"
            >
              Stalk My Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-10 flex items-center justify-center space-x-6 lg:justify-start"
          >
            <a
              href="https://github.com/Aswini1008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/aswini-sm-97292629a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/_.aswini._10?igsh=MmZvdXA2bnRxYnli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <FaInstagram className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>

        {/* Optional Image Placeholder - can be added later */}
        {/* <div className="lg:w-1/3 mt-10 lg:mt-0"> ... </div> */}
      </div>
    </section>
  );
};

export default Hero;

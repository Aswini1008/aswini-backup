import { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "@/hooks/use-mobile";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Aswini
          </h1>
        </Link>

        {isMobile ? (
          <div className="flex items-center">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 p-2 text-gray-700 dark:text-gray-300">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80} // Offset for fixed header
                className="relative cursor-pointer text-lg font-medium text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:text-pink-600 after:hover:w-full dark:text-gray-400 dark:hover:text-pink-500"
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="bg-white/95 dark:bg-gray-900/95">
          <nav className="container mx-auto flex flex-col items-center space-y-4 px-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-lg font-medium text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
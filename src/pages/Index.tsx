import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import TechHighlights from "@/components/TechHighlights";
import { Toaster } from "@/components/ui/sonner";
import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900">
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <TechHighlights />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Services />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Index;
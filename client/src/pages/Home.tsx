import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

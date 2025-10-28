import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Media />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navbar } from "@/components/portfolio/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about" className="pt-24">
          <AboutSection />
        </section>
        <section id="experience" className="pt-24">
          <ExperienceSection />
        </section>
        <section id="projects" className="pt-24">
          <ProjectsSection />
        </section>
        <section id="contact" className="pt-24">
          <ContactSection />
        </section>
      </main>
    </>
  );
};

export default Index;
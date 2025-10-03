import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

// Lazy load sections for better performance with preloading
const AboutSection = lazy(() => import("@/components/portfolio/AboutSection").then(module => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import("@/components/portfolio/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection").then(module => ({ default: module.ContactSection })));

// Loading component for lazy sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
        </section>
        <section id="experience">
          <Suspense fallback={<SectionLoader />}>
            <ExperienceSection />
          </Suspense>
        </section>
        <section id="projects">
          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
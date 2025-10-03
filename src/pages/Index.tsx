import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

// Lazy load sections with intersection observer
const AboutSection = lazy(() => import("@/components/portfolio/AboutSection").then(module => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import("@/components/portfolio/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection").then(module => ({ default: module.ContactSection })));

// Optimized loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Intersection observer hook for lazy loading
const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' } // Start loading 50px before visible
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isIntersecting] as const;
};

// Lazy section component with intersection observer
const LazySection = ({ 
  id, 
  Component, 
  fallback = <SectionLoader /> 
}: { 
  id: string; 
  Component: React.ComponentType; 
  fallback?: React.ReactNode;
}) => {
  const [ref, isIntersecting] = useIntersectionObserver(0.1);

  return (
    <section id={id} ref={ref}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        <div className="h-96 flex items-center justify-center">
          <div className="w-4 h-4 border border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section id="hero">
          <HeroSection />
        </section>
        <LazySection id="about" Component={AboutSection} />
        <LazySection id="experience" Component={ExperienceSection} />
        <LazySection id="projects" Component={ProjectsSection} />
        <LazySection id="contact" Component={ContactSection} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
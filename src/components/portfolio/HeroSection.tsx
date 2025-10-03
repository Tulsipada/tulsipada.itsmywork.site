import { Suspense, useRef, useMemo, lazy, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CSS3DProfile } from "./ProfileImage3D";
import profileImage from "@/assets/Tulsipada.avif";
import personalData from "@/data/personal.json";
import { calculateExperience, processDynamicText } from "@/lib/experience";

// Lazy load Three.js components with user interaction trigger
const ThreeJSBackground = lazy(() => 
  new Promise<{ default: React.ComponentType }>(resolve => {
    // Only load Three.js after user interaction or 3 seconds
    const loadThreeJS = () => {
      import("./ThreeJSBackground").then(module => {
        resolve({ default: module.default });
      });
    };

    // Load on first user interaction
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    const loadOnInteraction = () => {
      loadThreeJS();
      events.forEach(event => document.removeEventListener(event, loadOnInteraction));
    };

    events.forEach(event => document.addEventListener(event, loadOnInteraction, { once: true }));

    // Fallback: load after 3 seconds if no interaction
    setTimeout(loadThreeJS, 3000);
  })
);

// Enhanced CSS-based background fallback
const CSSBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
    <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(79,70,229,0.05)_90deg,transparent_180deg,rgba(139,92,246,0.05)_270deg,transparent_360deg)] animate-spin-slow" />
  </div>
);

export const HeroSection = () => {
  // Calculate dynamic experience
  const experienceYears = calculateExperience(personalData.personalInfo.careerStartDate);
  const dynamicDescription = processDynamicText(personalData.personalInfo.description, {
    experience: experienceYears
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* 3D Background with fallback */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<CSSBackground />}>
          <ThreeJSBackground />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4"
        >
          {/* Profile Image with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1.2, type: "spring", bounce: 0.4 }}
            className="mb-3 sm:mb-4"
          >
            <CSS3DProfile imageUrl={profileImage} />
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent glow-text leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {personalData.personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-glow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {personalData.personalInfo.title}
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {dynamicDescription}
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={personalData.personalInfo.email}>
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Me
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={personalData.socialLinks[0].href} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={personalData.socialLinks[1].href} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="pt-3 sm:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-sm sm:text-base text-muted-foreground mb-2 px-2 sm:px-0">
              📍 {personalData.personalInfo.location} • 📞 {personalData.personalInfo.phone}
            </p>
            
            {/* Availability Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mb-3"
            >
              <Card className="glass-card border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 max-w-md mx-auto">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-semibold text-primary text-sm sm:text-base">
                      {personalData.availability.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {personalData.availability.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <ChevronDown className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};
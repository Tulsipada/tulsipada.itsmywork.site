import { Suspense, useRef, useMemo, lazy } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CSS3DProfile } from "./ProfileImage3D";
import profileImage from "@/assets/Tulsipada.avif";

// Lazy load Three.js components
const ThreeJSBackground = lazy(() => import("./ThreeJSBackground"));

// Simple CSS-based background fallback
const CSSBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
  </div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24">
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
          className="space-y-6 sm:space-y-8"
        >
          {/* Profile Image with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1.2, type: "spring", bounce: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <CSS3DProfile imageUrl={profileImage} />
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent glow-text leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Tulsipada Das
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-glow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Node.js Developer
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about creating cutting-edge solutions with Node.js, RESTful APIs, and secure payment systems. 
              1+ years of experience building scalable applications.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="mailto:tulsipada55@gmail.com">
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
              <a href="https://github.com/tulsipada" target="_blank" rel="noopener noreferrer">
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
              <a href="https://linkedin.com/in/tulsipada" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-sm sm:text-base text-muted-foreground mb-4 px-2 sm:px-0">
              📍 Tamluk, India • 📞 +917699283549
            </p>
            <ChevronDown className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};
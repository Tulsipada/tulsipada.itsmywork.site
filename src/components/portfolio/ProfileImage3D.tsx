import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Removed the WebGL-dependent Profile3D component to prevent context conflicts

interface CSS3DProfileProps {
  imageUrl: string;
}

export function CSS3DProfile({ imageUrl }: CSS3DProfileProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      style={{ perspective: "1000px" }}
    >
      {/* Main profile container with 3D transform - responsive sizing */}
      <motion.div
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
        whileHover={{ 
          rotateY: 15,
          rotateX: 10,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background glow rings */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
          <div className="absolute inset-1 sm:inset-2 rounded-full border border-accent/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        
        {/* Main profile image */}
        <motion.div
          className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-primary/50 shadow-glow group-hover:shadow-accent transition-all duration-500"
          style={{ transform: "translateZ(20px)" }}
          whileHover={{ boxShadow: "0 0 50px rgba(79, 70, 229, 0.6)" }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-secondary/50 animate-pulse flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={imageUrl}
            alt="Tulsipada Das - Node.js Developer"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => console.error('Failed to load profile image')}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        {/* Floating particles around the image - responsive sizing */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-primary rounded-full"
              animate={{
                x: [0, Math.cos(i * 60) * 50, 0], // Reduced orbit size for mobile
                y: [0, Math.sin(i * 60) * 50, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Simplified reflection effect - responsive sizing */}
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 opacity-10 rounded-full bg-gradient-to-b from-primary to-transparent blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}
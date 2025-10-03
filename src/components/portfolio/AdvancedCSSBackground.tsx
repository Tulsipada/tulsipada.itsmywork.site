import { motion } from "framer-motion";

// Advanced CSS-only background with sophisticated animations
export function AdvancedCSSBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multi-layer gradient system */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
      
      {/* Primary animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_60%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_60%)",
            "radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_60%)",
            "radial-gradient(circle_at_30%_70%,rgba(79,70,229,0.15),transparent_60%)",
            "radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_60%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Secondary gradient layer */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_80%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_80%)",
            "radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.08),transparent_80%)",
            "radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_80%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Tertiary gradient layer */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(79,70,229,0.05),transparent_90%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_90%_10%,rgba(79,70,229,0.05),transparent_90%)",
            "radial-gradient(circle_at_10%_90%,rgba(139,92,246,0.05),transparent_90%)",
            "radial-gradient(circle_at_90%_10%,rgba(79,70,229,0.05),transparent_90%)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i * 0.5) * 15, 0],
              opacity: [0.1, 0.9, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Complex geometric animation system */}
      <div className="absolute inset-0">
        {/* Large outer ring */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 border border-primary/25 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Medium inner ring */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.7, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Square with complex animation */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-32 h-32 border border-accent/25"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Triangle with floating motion */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24 border border-primary/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: 180,
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Hexagon with pulsing effect */}
        <motion.div
          className="absolute top-1/3 left-2/3 w-20 h-20 border border-accent/20"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          animate={{
            rotate: -180,
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Diamond with complex motion */}
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-16 h-16 border border-primary/15"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotate: 360,
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Octagon */}
        <motion.div
          className="absolute top-2/3 left-1/6 w-14 h-14 border border-accent/15"
          style={{ clipPath: "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)" }}
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 28, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Star shape */}
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-12 h-12 border border-primary/10"
          style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
          animate={{
            rotate: 360,
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>
      
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/15 via-transparent to-background/8" />
      
      {/* Additional shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

import { motion } from "framer-motion";

// Enhanced CSS-based animated background with more visual effects
export function CSSBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated radial gradients */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)",
            "radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.1),transparent_50%)",
            "radial-gradient(circle_at_40%_60%,rgba(79,70,229,0.1),transparent_50%)",
            "radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Secondary animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_70%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_70%)",
            "radial-gradient(circle_at_20%_80%,rgba(79,70,229,0.05),transparent_70%)",
            "radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_70%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Enhanced geometric shapes with more variety */}
      <div className="absolute inset-0">
        {/* Large rotating circle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Square with different rotation */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-28 h-28 border border-accent/20"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Triangle */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/15"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: 180,
            y: [0, -15, 0],
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Hexagon */}
        <motion.div
          className="absolute top-1/3 left-2/3 w-16 h-16 border border-accent/15"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          animate={{
            rotate: -180,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Diamond */}
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-12 h-12 border border-primary/10"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5" />
    </div>
  );
}

import { motion } from "framer-motion";

// Simplified CSS-only background with stable animations
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
      
      {/* Simplified particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${20 + (i * 4)}%`,
              top: `${20 + (i * 3)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Simplified geometric animation system */}
      <div className="absolute inset-0">
        {/* Large outer ring */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-primary/25 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
        />
        
        {/* Square */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/25"
          animate={{
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
        
        {/* Triangle */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: 180,
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        />
      </div>
      
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/15 via-transparent to-background/8" />
    </div>
  );
}

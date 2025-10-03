import { useState, useEffect } from "react";

// Pure CSS-based background with enhanced animations
function CSSBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(79,70,229,0.05)_90deg,transparent_180deg,rgba(139,92,246,0.05)_270deg,transparent_360deg)] animate-spin-slow" />

      {/* Enhanced CSS-only stars for better performance */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute w-2 h-2 border border-primary/30 rounded-sm opacity-40 animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* Subtle moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse opacity-30" />
    </div>
  );
}

export default function ThreeJSBackground() {
  // Use pure CSS background for maximum compatibility and performance
  return <CSSBackground />;
}

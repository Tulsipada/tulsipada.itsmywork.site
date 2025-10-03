import { useState } from "react";

// Simplified profile component without animations to reduce main-thread work
interface CSS3DProfileProps {
  imageUrl: string;
}

export function CSS3DProfile({ imageUrl }: CSS3DProfileProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Main profile container - static for better performance */}
      <div
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background glow rings - simplified */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
          <div className="absolute inset-1 sm:inset-2 rounded-full border border-accent/40" />
        </div>
        
        {/* Main profile image */}
        <div
          className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-primary/50 shadow-glow transition-all duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={imageUrl}
            alt="Tulsipada Das - Node.js Developer"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width="192"
            height="192"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            crossOrigin="anonymous"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              console.error('Failed to load profile image');
              setIsLoaded(true);
            }}
            style={{
              imageRendering: 'optimizeQuality',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          />
          
          {/* Static overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Simplified particles - static for performance */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-primary rounded-full opacity-60"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${Math.cos(i * 120) * 30}px, ${Math.sin(i * 120) * 30}px)`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Static reflection effect */}
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 opacity-10 rounded-full bg-gradient-to-b from-primary to-transparent blur-sm"
      />
    </div>
  );
}
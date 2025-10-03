// Pre-generated star positions to avoid Math.random() calls during render
const STAR_POSITIONS = [
  { left: '15%', top: '25%', delay: '0.5s', duration: '2.5s' },
  { left: '85%', top: '15%', delay: '1.2s', duration: '3.1s' },
  { left: '45%', top: '35%', delay: '0.8s', duration: '2.8s' },
  { left: '75%', top: '65%', delay: '1.5s', duration: '3.3s' },
  { left: '25%', top: '75%', delay: '0.3s', duration: '2.2s' },
  { left: '55%', top: '85%', delay: '1.8s', duration: '3.5s' },
  { left: '35%', top: '45%', delay: '0.7s', duration: '2.7s' },
  { left: '95%', top: '55%', delay: '1.1s', duration: '2.9s' },
  { left: '5%', top: '65%', delay: '1.6s', duration: '3.4s' },
  { left: '65%', top: '25%', delay: '0.4s', duration: '2.4s' },
  { left: '15%', top: '85%', delay: '1.3s', duration: '3.2s' },
  { left: '85%', top: '45%', delay: '0.9s', duration: '2.6s' },
  { left: '45%', top: '15%', delay: '1.7s', duration: '3.6s' },
  { left: '75%', top: '35%', delay: '0.6s', duration: '2.3s' },
  { left: '25%', top: '55%', delay: '1.4s', duration: '3.0s' },
  { left: '55%', top: '75%', delay: '0.2s', duration: '2.1s' },
  { left: '35%', top: '5%', delay: '1.9s', duration: '3.7s' },
  { left: '95%', top: '75%', delay: '0.1s', duration: '2.0s' },
  { left: '5%', top: '35%', delay: '1.0s', duration: '2.8s' },
  { left: '65%', top: '95%', delay: '1.5s', duration: '3.3s' }
];

// Pure CSS-based background with optimized performance
function CSSBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(79,70,229,0.05)_90deg,transparent_180deg,rgba(139,92,246,0.05)_270deg,transparent_360deg)] animate-spin-slow" />

      {/* Optimized CSS-only stars with pre-generated positions */}
      <div className="absolute inset-0">
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 border border-primary/30 rounded-sm opacity-40 animate-pulse" style={{ left: '20%', top: '30%', animationDelay: '0s', animationDuration: '3s', transform: 'rotate(0deg)' }} />
        <div className="absolute w-2 h-2 border border-primary/30 rounded-sm opacity-40 animate-pulse" style={{ left: '50%', top: '50%', animationDelay: '0.5s', animationDuration: '4s', transform: 'rotate(45deg)' }} />
        <div className="absolute w-2 h-2 border border-primary/30 rounded-sm opacity-40 animate-pulse" style={{ left: '80%', top: '70%', animationDelay: '1s', animationDuration: '5s', transform: 'rotate(90deg)' }} />
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

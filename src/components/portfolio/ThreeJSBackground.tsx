import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";

// Ultra-lightweight stars component - no external dependencies
function LightweightStars() {
  const ref = useRef<any>();
  const [stars] = useMemo(() => {
    // Reduced to 200 stars for minimal bundle impact
    const starPositions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return starPositions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20; // Slower rotation
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {Array.from({ length: 200 }, (_, i) => (
        <mesh
          key={i}
          position={[
            stars[i * 3],
            stars[i * 3 + 1],
            stars[i * 3 + 2],
          ]}
        >
          <sphereGeometry args={[0.002]} />
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function MinimalCube() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1; // Slower rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05; // Slower movement
    }
  });

  return (
    <mesh ref={meshRef} position={[1.5, 0, 0]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshBasicMaterial color="#8B5CF6" wireframe />
    </mesh>
  );
}

export default function ThreeJSBackground() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]} // Limit device pixel ratio
      performance={{ min: 0.5 }} // Enable performance monitoring
      gl={{ 
        antialias: false, // Disable antialiasing
        alpha: true,
        powerPreference: "low-power" // Use integrated GPU when available
      }}
    >
      <Suspense fallback={null}>
        <LightweightStars />
        <MinimalCube />
        <ambientLight intensity={0.3} />
      </Suspense>
    </Canvas>
  );
}

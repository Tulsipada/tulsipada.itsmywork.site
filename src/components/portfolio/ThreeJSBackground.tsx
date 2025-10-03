import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";

// Ultra-minimal stars component - only 50 stars for maximum performance
function MinimalStars() {
  const ref = useRef<any>();
  const [stars] = useMemo(() => {
    // Further reduced to 50 stars for minimal bundle impact
    const starPositions = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
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
      ref.current.rotation.x -= delta / 30; // Much slower rotation
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {Array.from({ length: 50 }, (_, i) => (
        <mesh
          key={i}
          position={[
            stars[i * 3],
            stars[i * 3 + 1],
            stars[i * 3 + 2],
          ]}
        >
          <sphereGeometry args={[0.003]} />
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// Simplified cube - removed complex animations
function SimpleCube() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05; // Very slow rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[1.2, 0, 0]}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshBasicMaterial color="#8B5CF6" wireframe />
    </mesh>
  );
}

export default function ThreeJSBackground() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1]} // Further limit device pixel ratio
      performance={{ min: 0.8 }} // Higher performance threshold
      gl={{ 
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        stencil: false, // Disable stencil buffer
        depth: false, // Disable depth buffer for 2D-like rendering
      }}
    >
      <Suspense fallback={null}>
        <MinimalStars />
        <SimpleCube />
        <ambientLight intensity={0.2} />
      </Suspense>
    </Canvas>
  );
}

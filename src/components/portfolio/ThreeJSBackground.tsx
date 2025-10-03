import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";

// Ultra-minimal stars component - only 20 stars for maximum performance
function MinimalStars() {
  const ref = useRef<any>();
  const [stars] = useMemo(() => {
    // Drastically reduced to 20 stars for minimal main-thread impact
    const starPositions = new Float32Array(20 * 3);
    for (let i = 0; i < 20; i++) {
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
      ref.current.rotation.x -= delta / 50; // Much slower rotation
      ref.current.rotation.y -= delta / 60;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            stars[i * 3],
            stars[i * 3 + 1],
            stars[i * 3 + 2],
          ]}
        >
          <sphereGeometry args={[0.004]} />
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// Static cube - no animations to reduce main-thread work
function StaticCube() {
  return (
    <mesh position={[1.2, 0, 0]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color="#8B5CF6" wireframe />
    </mesh>
  );
}

export default function ThreeJSBackground() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1]} // Limit device pixel ratio
      performance={{ min: 0.9 }} // Very high performance threshold
      gl={{ 
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        stencil: false,
        depth: false,
        preserveDrawingBuffer: false, // Reduce memory usage
        failIfMajorPerformanceCaveat: true, // Fail if performance is poor
      }}
    >
      <Suspense fallback={null}>
        <MinimalStars />
        <StaticCube />
        <ambientLight intensity={0.1} />
      </Suspense>
    </Canvas>
  );
}

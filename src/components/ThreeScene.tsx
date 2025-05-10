
import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple sphere component with minimal properties to avoid potential conflicts
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.5;
      meshRef.current.rotation.y = 0.5;
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

// Very simplified version with fewer particles and simpler properties
const FloatingParticles = () => {
  const particles = [
    { position: [-2, 0, 0] },
    { position: [2, 0, 0] },
    { position: [0, 2, 0] },
    { position: [0, -2, 0] },
    { position: [0, 0, 2] },
    { position: [0, 0, -2] },
  ];

  return (
    <group>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#9b87f5" />
        </mesh>
      ))}
    </group>
  );
};

const ThreeScene = () => {
  const [hasError, setHasError] = useState(false);

  // Fallback UI in case of errors
  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-theme-purple/10 rounded-lg">
        <p className="text-white text-center p-4">
          Could not load 3D visualization.<br />
          Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas 
        className="cursor-grab active:cursor-grabbing"
        gl={{ 
          antialias: true,
          alpha: true
        }}
        onError={() => setHasError(true)}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
        />
        <AnimatedSphere />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

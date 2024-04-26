import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
const Hero3D = () => {
  const myModel = useGLTF("/3d/scene.gltf");
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      ref.current.rotation.y = time * -1;
    }
  });

  return (
    <group ref={ref} scale={[1.6, 1.6, 1.6]} rotation={[10, 0, 0]}>
      <directionalLight intensity={50} color='pink' position={[-1, -1, -1]} />
      <directionalLight intensity={50} color='pink' position={[1, 1, 1]} />
      <primitive object={myModel.scene} />
    </group>
  );
};
const Hero3DCanvas = () => {
  return (
    <Canvas
      //frameloop='demand'
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ antialias: true, alpha: true, logarithmicDepthBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          mixPolarAngle={Math.PI / 2}
        />
        <Hero3D />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Hero3DCanvas;

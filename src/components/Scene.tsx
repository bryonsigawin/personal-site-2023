import { Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { Model } from "./Model";

export default function Scene() {
  return (
    <div className="absolute w-screen h-screen t-0 l-0">
      <Canvas>
        <Lights />
        <Camera />
        <Suspense>
          <Physics gravity={[0, -9.81 * 2, 0]}>
            <Model />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 5]} color="#90bcee" intensity={2} />
      <pointLight position={[5, 5, 0]} color="#be5103" intensity={2} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
    </>
  );
}

function Camera() {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  const isSmallScreen = window.innerWidth < 698;

  return (
    <OrthographicCamera
      makeDefault
      position={[20, 20, 20]}
      zoom={isSmallScreen ? 60 : 120}
    />
  );
}

import { Suspense, useRef } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  useHelper,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Model";
import { PointLightHelper } from "three";

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
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} color="#5eead4" intensity={0.8} />
      <pointLight position={[5, 5, 0]} color="#f87171" intensity={0.8} />
      <pointLight position={[0, 5, 0]} />
    </>
  );
}

function Camera() {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  const isSmallScreen = window.innerWidth < 698;

  return <OrthographicCamera makeDefault position={[20, 20, 20]} zoom={isSmallScreen ? 60 : 120} />;
}

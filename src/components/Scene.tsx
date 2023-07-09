import { Suspense } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from "./Model";

export default function Scene() {
  return (
    <div className="absolute w-screen h-screen t-0 l-0">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Camera />
        <Suspense>
          <Physics gravity={[0, -9.81 * 2, 0]} >
            <Model />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Camera() {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return <OrthographicCamera makeDefault position={[20, 20, 20]} zoom={90} />;
}

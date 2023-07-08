import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="absolute w-screen h-screen t-0 l-0">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Camera />
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[8, 0.5, 8]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  );
}

function Camera() {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return <OrthographicCamera makeDefault position={[5, 5, 5]} zoom={40} />;
}

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <div className="absolute w-screen h-screen t-0 l-0">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          StandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

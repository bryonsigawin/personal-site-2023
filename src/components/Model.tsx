/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Box, Cone, Sphere, useGLTF } from "@react-three/drei";
import { MeshNormalMaterial, MeshStandardMaterial } from "three";
import { RigidBody } from "@react-three/rapier";
import { motion } from "framer-motion-3d";

const randomHeight = (min = -1, max = 1): number => {
    return Math.random() * (max - min) + min;
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/page.glb");

  const transparentMaterial = new MeshStandardMaterial();
  transparentMaterial.transparent = true;
  transparentMaterial.opacity = 0.0;

  const tempMat = new MeshStandardMaterial({ color: '#00000' });

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          name="Floor"
          geometry={nodes.Floor.geometry}
          material={transparentMaterial}
        />
      </RigidBody>
      <motion.mesh
        geometry={nodes.Floor.geometry}
        material={tempMat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.25 }}
      />
      <RigidBody>
        <mesh
          name="LegBridges"
          castShadow
          receiveShadow
          geometry={nodes.LegBridges.geometry}
          material={tempMat}
          position={[-0.97, 20 + randomHeight(), -0.133]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Laptop"
          castShadow
          receiveShadow
          geometry={nodes.Laptop.geometry}
          material={tempMat}
          position={[-0.923, 25 + randomHeight(), 0.482]}
          rotation={[Math.PI, -0.17, Math.PI]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Lamp"
          castShadow
          receiveShadow
          geometry={nodes.Lamp.geometry}
          material={tempMat}
          position={[-1.349, 30 + randomHeight(), -0.99]}
          rotation={[0, 0.182, 0]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Chair"
          castShadow
          receiveShadow
          geometry={nodes.Chair.geometry}
          material={tempMat}
          position={[0.321, 25 + randomHeight(), 0.122]}
          rotation={[0, 0.487, 0]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Book001"
          castShadow
          receiveShadow
          geometry={nodes.Book001.geometry}
          material={tempMat}
          position={[-0.646, 23 + randomHeight(), -0.995]}
          rotation={[0, -0.112, 0]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Cabinet"
          castShadow
          receiveShadow
          geometry={nodes.Cabinet.geometry}
          material={tempMat}
          position={[1.498, 28 + randomHeight(), -1.342]}
        />
      </RigidBody>
      <RigidBody>
        <mesh
          name="Guitar"
          castShadow
          receiveShadow
          geometry={nodes.Guitar.geometry}
          material={tempMat}
          position={[0.906, 24 + randomHeight(), -1.305]}
          rotation={[1.5, -0.193, 1.659]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/page.glb");

"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, useProgress, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import ToggleSwitch from "../UI/ToggleSwitch";
import ThreeFallback from "./ThreeFallback";
import * as styles from "./Three.css";

export function Model({ showMaterial }: { showMaterial: boolean }) {
  const { nodes, materials }: any = useGLTF("/facemodel/face1.gltf");
  return (
    <group dispose={null}>
      {showMaterial ? (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.face6.geometry}
          material={materials.textured_0}
          scale={28}
          position={[1, -3, 0]}
          rotation={[1.56, 0, 0]}
        />
      ) : (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.face6.geometry}
          material={materials.textured_0}
          scale={28}
          position={[1, -3, 0]}
          rotation={[1.56, 0, 0]}
        >
          <meshStandardMaterial color="rgb(200,200,200)" />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/facemodel/face1.gltf");

export default function Three() {
  const { progress } = useProgress();
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const color = 0xffffff;
  const intensity = 1;
  const handleShowMaterial = () => {
    setShowMaterial((prev: boolean) => !prev);
  };
  return (
    <div className={styles.canvasFrame}>
      {progress < 100 ? (
        <ThreeFallback />
      ) : (
        <>
          <ToggleSwitch handleShowMaterial={handleShowMaterial} />
          <Canvas
            camera={{
              fov: 40,
              near: 10,
              far: 1000,
              position: [-30, 5.5, 5],
            }}
          >
            <Model showMaterial={showMaterial} />
            <OrbitControls
              onEnd={(e: any) => {
                e?.target.setAzimuthalAngle(-1.4);
                e?.target.setPolarAngle(1.4);
              }}
              minAzimuthAngle={-Math.PI / 1.25}
              maxAzimuthAngle={-0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI - Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />

            <pointLight color={color} intensity={intensity} />
            <directionalLight color={color} intensity={intensity} />
            <ambientLight color={color} intensity={intensity} />
            <Environment preset="dawn" />
          </Canvas>
        </>
      )}
    </div>
  );
}

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import backgroundVideo from "../../assets/home/bg.mp4";

export function Model(props) {
  const { nodes, materials } = useGLTF("/obj3d.glb");
  return (
    <motion.group {...props} dispose={null} scale={0.049}>
      <mesh
        geometry={nodes["Cylinder001_Material_#2_0"].geometry}
        material={materials.Material_2}
        position={[0, 0, -0.178]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </motion.group>
  );
}

function Banner() {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-[10rem] right-[0rem] xl:top-[5rem] xl:right-[20rem] z-10 h-52 w-52 xl:h-72  xl:w-72 ">
        <Canvas>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 50]} />
          <Model />
          <PerspectiveCamera makeDefault position={[0, 2, 15]} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default Banner;

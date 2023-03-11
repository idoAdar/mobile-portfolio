/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 building.gltf --transform
Author: 3DHorse (https://sketchfab.com/3DHorse)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-building-333910f2d3fa44f0958a2b3b598a4bfa
Title: Free Building
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/building-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box09_88_0.geometry}
        material={materials.material}
        position={[-4356.87, -0.05, 2520.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder110_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4376.8, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder237_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4436.76, 0.8, 2451.08]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape12_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4376.8, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Box399_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4498.53, 0.8, 2561.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder112_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4272, 920.97, 2490.21]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object26_glass_0.geometry}
        material={materials.glass}
        position={[-4376.8, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder386_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4344.39, 0.8, 2451.08]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object25_glass_0.geometry}
        material={materials.glass}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object23_glass_0.geometry}
        material={materials.glass}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Line04_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4271.41, 879.54, 2504.25]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Line1266_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4271.41, 853.34, 2504.25]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Line1267_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4271.41, 827.15, 2504.25]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape13_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object22_glass_0.geometry}
        material={materials.glass}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder111_vraymm_0.geometry}
        material={materials.vraymm}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object24_glass_0.geometry}
        material={materials.glass}
        position={[-4273.4, 0.8, 2629.68]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/building-transformed.glb');

// src/types/meshline.d.ts

import * as THREE from "three";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Object3DNode } from "@react-three/fiber";

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.Material {
    resolution: [number, number];
    lineWidth: number;
    color: THREE.Color;
    useMap?: boolean;
    repeat?: [number, number];
    map?: THREE.Texture;
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

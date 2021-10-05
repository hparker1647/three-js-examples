import { BoxGeometry, ColorRepresentation, DirectionalLight, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, Scene } from "three";
import { animate, newRenderer } from "../util";

export function cube(color: ColorRepresentation, x: number): Mesh {
  const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshPhongMaterial({color}));
  cube.position.x = x;
  return cube;
}


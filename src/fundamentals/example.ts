import { DirectionalLight, PerspectiveCamera, Scene } from "three";
import { animate, newRenderer, rotate } from "../util";
import { cube } from "./cube";

export function cubes(): void {
  const renderer = newRenderer();

  const camera = new PerspectiveCamera(75, 2, 0.1, 5);
  camera.position.z = 2;

  const scene = new Scene();

  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(-1, 2, 4);

  const cubes = [
    cube(0x44aa88, 0),
    cube(0x8844aa, -2),
    cube(0xaa8844, 2)
  ];

  cubes.forEach(c => scene.add(c));
  scene.add(light);
  renderer.render(scene, camera);

  animate(renderer, scene, camera, time => {
    cubes.forEach((c, i) => rotate(c, time, i+1))
  });
}
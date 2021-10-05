import { Mesh } from "three";

export function rotate(geom: Mesh, time: number, speed: number = 1): void {
  time *= 0.001 * speed;
  geom.rotation.x = time;
  geom.rotation.y = time;
}

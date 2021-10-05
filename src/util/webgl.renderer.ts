import { Camera, Renderer, Scene, WebGLRenderer, WebGLRendererParameters } from 'three';


/**
 * Creates a new `WebGLRenderer` and adds the canvas to the `<body>` of the page.
 * 
 * @returns `WebGLRenderer`
 */
export function newRenderer(params?: WebGLRendererParameters): WebGLRenderer {
  const renderer = new WebGLRenderer(params);
  document.querySelector('body')!.appendChild(renderer.domElement);
  return renderer;
}

export function animate<T extends Renderer = Renderer,U extends Scene = Scene, V extends Camera = Camera>(renderer: T, scene: U, camera: V, cb: (time: number, scene: U, camera: V) => boolean | void = () => {}): void {
  function iterate(time: number): void {
    if (cb(time, scene, camera) !== false) {
      renderer.render(scene, camera);
      requestAnimationFrame(iterate);
    }
  }
  requestAnimationFrame(iterate);
}

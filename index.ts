import {
  AssetsManager,
  AssetsCache,
  SceneManager,
  Renderer,
  ArcRotationCameraController,
  bootstrap,
} from '@cat3d/renderer';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = self.screen.width;
canvas.height = self.screen.height;

(async () => {
  const injector = await bootstrap({ element: canvas });
  const assetsManager = injector.resolve(AssetsManager);
  const assetsCache = injector.resolve(AssetsCache);
  const sceneManager = injector.resolve(SceneManager);
  const renderer = injector.resolve(Renderer);
  const graph = await assetsManager.resolveSceneGraph('scenes/scene.graph.xml');
  sceneManager.activeSceneGraph = graph;
  const camera = sceneManager.findById('main-camera');

  const cameraController = new ArcRotationCameraController(camera);
  let t = Date.now(),
    dt = 0.0;

  const draw = () => {
    cameraController.update(dt);
    renderer.render(camera);

    (dt = (Date.now() - t) * 1.0e-3), (t = Date.now());
    requestAnimationFrame(draw);
  };
  draw();
})();

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    let disposed = false;

    // Set up a small Three.js scene just for the splash
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 1, 2000);
    camera.position.set(0, 0, 180);
    camera.lookAt(0, 5, 0);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(70, -20, 150);
    scene.add(pointLight);

    const ambient = new THREE.AmbientLight(0xffffff, 3.0);
    scene.add(ambient);

    const fillLight = new THREE.PointLight(0xffffff, 1.2);
    fillLight.position.set(-70, 30, 100);
    scene.add(fillLight);

    // Load the same airplane model
    const loader = new OBJLoader();
    loader.load(
      'https://assets.codepen.io/557388/1405+Plane_1.obj',
      (object) => {
        if (disposed) return;

        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshPhongMaterial({
              color: 0x444444,
              specular: 0x888888,
              shininess: 80,
              flatShading: true,
            });
          }
        });

        const group = new THREE.Group();
        group.add(object);
        group.scale.set(0.6, 0.6, 0.6);

        // Start off-screen left, fly across to off-screen right
        const tau = Math.PI * 2;
        group.rotation.y = tau * -0.25; // facing away
        group.rotation.z = tau * -0.015; // slight bank
        group.position.set(-200, 0, -50);
        scene.add(group);

        // Animate: render loop + fly-by
        let animId: number;
        const startTime = Date.now();
        const flyDuration = 2400; // ms for the fly-by

        function animate() {
          if (disposed) return;
          const elapsed = Date.now() - startTime;
          const t = Math.min(elapsed / flyDuration, 1);

          // Ease: cubic ease-in-out
          const ease = t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;

          // Fly from left (-200) to right (+200)
          group.position.x = -200 + ease * 400;
          // Slight arc upward in the middle
          group.position.y = Math.sin(t * Math.PI) * 15;
          // Bank into and out of the arc
          group.rotation.z = tau * -0.015 + Math.sin(t * Math.PI) * tau * -0.01;

          renderer.render(scene, camera);
          animId = requestAnimationFrame(animate);
        }
        animate();

        // After 2.5s start fading, at 3s call onComplete
        setTimeout(() => {
          if (!disposed) setFading(true);
        }, 2500);

        setTimeout(() => {
          if (!disposed) onComplete();
        }, 3200);

        // Cleanup
        return () => {
          disposed = true;
          cancelAnimationFrame(animId);
        };
      }
    );

    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      disposed = true;
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fading ? 'splash-fading' : ''}`}>
      {/* Blue sky + clouds background */}
      <div className="splash-sky">
        <div className="splash-clouds"></div>
      </div>

      {/* Initials */}
      <div className="splash-initials">
        <span>O</span>
        <span className="splash-dot">.</span>
        <span>S</span>
        <span className="splash-dot">.</span>
      </div>

      {/* Three.js canvas container */}
      <div ref={canvasRef} className="splash-canvas" />
    </div>
  );
}

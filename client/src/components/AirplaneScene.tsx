import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class Scene {
  views: Array<{ bottom: number; height: number; camera: THREE.PerspectiveCamera }>;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  light: THREE.PointLight;
  softLight: THREE.AmbientLight;
  modelGroup: THREE.Group;
  w: number;
  h: number;

  constructor(model: THREE.Object3D) {
    this.views = [
      { bottom: 0, height: 1, camera: null as any },
      { bottom: 0, height: 0, camera: null as any },
    ];

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.w = window.innerWidth;
    this.h = window.innerHeight;

    this.renderer.setSize(this.w, this.h);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    for (let ii = 0; ii < this.views.length; ++ii) {
      const view = this.views[ii];
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.fromArray([0, 0, 180]);
      camera.layers.disableAll();
      camera.layers.enable(ii);
      view.camera = camera;
      camera.lookAt(new THREE.Vector3(0, 5, 0));
    }

    this.light = new THREE.PointLight(0xffffff, 1.5);
    this.light.position.z = 150;
    this.light.position.x = 70;
    this.light.position.y = -20;
    this.scene.add(this.light);

    this.softLight = new THREE.AmbientLight(0xffffff, 3.0);
    this.scene.add(this.softLight);

    const fillLight = new THREE.PointLight(0xffffff, 1.2);
    fillLight.position.set(-70, 30, 100);
    this.scene.add(fillLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 100, 50);
    this.scene.add(topLight);

    this.onResize();
    window.addEventListener('resize', this.onResize, false);

    const firstChild = model.children[0] as THREE.Mesh;
    if (firstChild && firstChild.geometry) {
      const edges = new THREE.EdgesGeometry(firstChild.geometry);
      const line = new THREE.LineSegments(edges);
      (line.material as THREE.LineBasicMaterial).depthTest = false;
      (line.material as THREE.LineBasicMaterial).opacity = 0.5;
      (line.material as THREE.LineBasicMaterial).transparent = true;
      line.position.x = 0.5;
      line.position.z = -1;
      line.position.y = 0.2;

      this.modelGroup = new THREE.Group();
      model.layers.set(0);
      line.layers.set(1);
      this.modelGroup.add(model);
      this.modelGroup.add(line);
    } else {
      this.modelGroup = new THREE.Group();
      model.layers.set(0);
      this.modelGroup.add(model);
    }

    this.scene.add(this.modelGroup);
  }

  render = () => {
    for (let ii = 0; ii < this.views.length; ++ii) {
      const view = this.views[ii];
      const camera = view.camera;
      const bottom = Math.floor(this.h * view.bottom);
      const height = Math.floor(this.h * view.height);
      this.renderer.setViewport(0, 0, this.w, this.h);
      this.renderer.setScissor(0, bottom, this.w, height);
      this.renderer.setScissorTest(true);
      camera.aspect = this.w / this.h;
      this.renderer.render(this.scene, camera);
    }
  };

  onResize = () => {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    for (let ii = 0; ii < this.views.length; ++ii) {
      const view = this.views[ii];
      const camera = view.camera;
      camera.aspect = this.w / this.h;
      const camZ = (screen.width - this.w * 1) / 3;
      camera.position.z = camZ < 180 ? 180 : camZ;
      camera.updateProjectionMatrix();
    }
    this.renderer.setSize(this.w, this.h);
    this.render();
  };

  destroy() {
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}

function setupAnimation(model: THREE.Object3D) {
  const scene = new Scene(model);
  const plane = scene.modelGroup;

  gsap.fromTo('canvas', { x: '50%', autoAlpha: 0 }, { duration: 1, x: '0%', autoAlpha: 1 });
  gsap.to('.loading', { autoAlpha: 0 });
  gsap.to('.scroll-cta', { opacity: 1 });
  gsap.set('svg.blueprint-svg', { autoAlpha: 1 });

  const tau = Math.PI * 2;
  plane.scale.set(0.7, 0.7, 0.7);
  gsap.set(plane.rotation, { y: tau * -0.25 });
  gsap.set(plane.position, { x: 60, y: -65, z: -60 });
  scene.render();

  const sectionDuration = 1;

  gsap.fromTo(scene.views[1], { height: 1, bottom: 0 }, {
    height: 0, bottom: 1, ease: 'none',
    scrollTrigger: { trigger: '.blueprint', scrub: true, start: 'bottom bottom', end: 'bottom top' },
  });

  gsap.fromTo(scene.views[1], { height: 0, bottom: 0 }, {
    height: 1, bottom: 0, ease: 'none',
    scrollTrigger: { trigger: '.blueprint', scrub: true, start: 'top bottom', end: 'top top' },
  });

  gsap.to('.ground', {
    y: '30%',
    scrollTrigger: { trigger: '.ground-container', scrub: true, start: 'top bottom', end: 'bottom top' },
  });

  gsap.from('.clouds', {
    y: '25%',
    scrollTrigger: { trigger: '.ground-container', scrub: true, start: 'top bottom', end: 'bottom top' },
  });

  const svgLines = document.querySelectorAll('.blueprint-svg line, .blueprint-svg path, .blueprint-svg circle');
  svgLines.forEach((el) => {
    const svgEl = el as SVGGeometryElement;
    if (svgEl.getTotalLength) {
      const length = svgEl.getTotalLength();
      gsap.set(svgEl, { strokeDasharray: length, strokeDashoffset: length });
    }
  });

  gsap.to('#line-length', {
    strokeDashoffset: 0,
    scrollTrigger: { trigger: '.length', scrub: true, start: 'top bottom', end: 'top top' },
  });
  gsap.to('#line-wingspan', {
    strokeDashoffset: 0,
    scrollTrigger: { trigger: '.wingspan', scrub: true, start: 'top 25%', end: 'bottom 50%' },
  });
  gsap.to('#circle-phalange', {
    strokeDashoffset: 0,
    scrollTrigger: { trigger: '.phalange', scrub: true, start: 'top 50%', end: 'bottom 100%' },
  });

  gsap.to('#line-length', {
    opacity: 0,
    strokeDashoffset: (_index: number, target: Element) => (target as SVGGeometryElement).getTotalLength?.() || 0,
    scrollTrigger: { trigger: '.length', scrub: true, start: 'top top', end: 'bottom top' },
  });
  gsap.to('#line-wingspan', {
    opacity: 0,
    strokeDashoffset: (_index: number, target: Element) => (target as SVGGeometryElement).getTotalLength?.() || 0,
    scrollTrigger: { trigger: '.wingspan', scrub: true, start: 'top top', end: 'bottom top' },
  });
  gsap.to('#circle-phalange', {
    opacity: 0,
    strokeDashoffset: (_index: number, target: Element) => (target as SVGGeometryElement).getTotalLength?.() || 0,
    scrollTrigger: { trigger: '.phalange', scrub: true, start: 'top top', end: 'bottom top' },
  });

  const tl = gsap.timeline({
    onUpdate: scene.render,
    scrollTrigger: { trigger: '.content', scrub: true, start: 'top top', end: 'bottom bottom' },
    defaults: { duration: sectionDuration, ease: 'power2.inOut' },
  });

  let delay = 0;

  // Natural cruising flight like the original CodePen:
  // Plane is seen from a 3/4 angle, smoothly banking through turns.
  // When the plane moves left, it banks left (z > 0) and turns its nose left (y rotates).
  // When moving right, it banks right (z < 0) and turns nose right.
  // Pitch (x) tilts nose down when descending, up when climbing.
  // At the very end the plane turns to face the viewer and flies head-on.

  // 1. Hero → Skills: gentle descent, slight nose-down pitch
  tl.to('.scroll-cta', { duration: 0.25, opacity: 0 }, delay);
  tl.to(plane.rotation, { x: tau * 0.02, y: tau * -0.25, z: tau * -0.01, ease: 'power1.inOut' }, delay);
  tl.to(plane.position, { x: 30, y: -35, z: -55, ease: 'power1.inOut' }, delay);
  delay += sectionDuration;

  // 2. Skills → About: bank right, cruise across
  tl.to(plane.rotation, { x: tau * 0.005, y: tau * -0.2, z: tau * -0.03, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 50, y: -15, z: -50, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 3. About → Education: bank left, sweep toward left side
  tl.to(plane.rotation, { x: tau * 0.01, y: tau * -0.3, z: tau * 0.03, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: -30, y: 0, z: -45, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 4. Education: level wings, fly straight through blueprint
  tl.to(plane.rotation, { x: tau * 0.005, y: tau * -0.25, z: 0, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 0, y: -5, z: -40, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 5. Research: gentle bank right
  tl.to(plane.rotation, { x: 0, y: tau * -0.22, z: tau * -0.025, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 35, y: 5, z: -38, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 6. Technical Skills: bank left, climb slightly
  tl.to(plane.rotation, { x: tau * -0.01, y: tau * -0.28, z: tau * 0.025, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: -25, y: 10, z: -35, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 7. Experience: bank right, gentle descent
  tl.to(plane.rotation, { x: tau * 0.015, y: tau * -0.22, z: tau * -0.02, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 30, y: -10, z: -32, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 8. Coursework: level out, center up, wings level
  tl.to(plane.rotation, { x: 0, y: tau * -0.25, z: 0, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 5, y: 0, z: -35, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 9. CTA → Contact: pull away from viewer, center perfectly
  tl.to(plane.rotation, { x: tau * -0.005, y: tau * -0.25, z: 0, ease: 'power2.inOut' }, delay);
  tl.to(plane.position, { x: 0, y: 0, z: -80, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 10. Contact: smooth 180° turn to face the viewer head-on
  tl.to(plane.rotation, { x: 0, y: tau * 0.25, z: 0, ease: 'power3.inOut' }, delay);
  tl.to(plane.position, { x: 0, y: 0, z: -80, ease: 'power2.inOut' }, delay);
  delay += sectionDuration;

  // 11. Footer: fly straight at the viewer, filling the screen
  tl.to(plane.rotation, { duration: sectionDuration, x: 0, y: tau * 0.25, z: 0, ease: 'none' }, delay);
  tl.to(plane.position, { duration: sectionDuration, x: 0, y: 0, z: 300, ease: 'power2.in' }, delay);
  tl.to(scene.light.position, { duration: sectionDuration, x: 0, y: 10, z: 200 }, delay);

  return scene;
}

export default function AirplaneScene() {
  const sceneRef = useRef<Scene | null>(null);

  useEffect(() => {
    let mounted = true;
    const loader = new OBJLoader();
    loader.load(
      'https://assets.codepen.io/557388/1405+Plane_1.obj',
      (object) => {
        if (!mounted) return;
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mat = new THREE.MeshPhongMaterial({
              color: 0x444444,
              specular: 0x888888,
              shininess: 80,
              flatShading: true,
            });
            (child as THREE.Mesh).material = mat;
          }
        });
        sceneRef.current = setupAnimation(object);
      },
      (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); },
      (error) => { console.error('Error loading airplane model:', error); }
    );

    return () => {
      mounted = false;
      if (sceneRef.current) { sceneRef.current.destroy(); }
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf('*');
    };
  }, []);

  return null;
}

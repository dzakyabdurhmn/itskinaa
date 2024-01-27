import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cube, setCube] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const texture = new THREE.TextureLoader().load("/space.jpg");
      scene.background = texture;
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const geometry = new THREE.IcosahedronGeometry(1, 0);

      const light = new THREE.DirectionalLight(0xfff0dd, 1);
      light.position.set(0, 0.3, 1);
      scene.add(light);

      const rgbeLoader = new RGBELoader();
      const glassEnv = rgbeLoader.load("/glass_env.hdr", () => {
        glassEnv.mapping = THREE.EquirectangularReflectionMapping;
      });

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        metalness: 0, // non-metallic object
        roughness: 0, // highly polished surface, can adjust to add frosting
        transmission: 1.0, // opacity while maintaining lightning
        thickness: 2, // light reflection
        envMap: glassEnv,
        envMapIntensity: 2,
      });

      const mesh = new THREE.Mesh(geometry, glassMaterial);
      mesh.position.x = -4;
      mesh.rotation.x += 0.1;
      mesh.rotation.y += 0.1;
      scene.add(mesh);

      const loader = new GLTFLoader();

      var gltfModel: THREE.Object3D;
      loader.load(
        "/deva-D.glb",
        (gltf) => {
          gltfModel = gltf.scene;
          console.log(gltfModel);
          gltfModel.traverse((o) => {
            if ((o as THREE.Mesh).isMesh)
              (o as THREE.Mesh).material = glassMaterial;
          });
          scene.add(gltfModel);

          renderer.render(scene, camera);
          gltfModel.rotation.z += 0.2;
          var deltaY = 0.005;
          const renderScene = () => {
            console.log(gltfModel.rotation.y);
            if (gltfModel.rotation.y < -0.7 || gltfModel.rotation.y > 0.5)
              deltaY = -deltaY;
            gltfModel.rotation.y += deltaY;
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
          };

          // Call the renderScene function to start the animation loop
          renderScene();
        },
        undefined,
        (error) => {
          console.log(error);
        }
      );

      setCube(cube);
    }
  }, []);

  return <div ref={containerRef} />;
}

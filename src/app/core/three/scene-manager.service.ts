import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SceneManagerService {
  public scene: THREE.Scene;
  public rings: THREE.Group;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.03); // Fondo negro, niebla negra
    this.rings = new THREE.Group();
    this.initScene();
  }

  private initScene(): void {
    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    // Anillos Concéntricos (Representando Frontend, Backend, Infraestructura)
    const materialLine = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3
    });

    const materialPoints = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });

    for (let i = 0; i < 3; i++) {
      const radius = 2 + (i * 1.5); // Radios: 2, 3.5, 5
      const segments = 64 + (i * 32);
      
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const noise = (Math.random() - 0.5) * 0.2;
        vertices.push(
          Math.cos(theta) * (radius + noise),
          Math.sin(theta) * (radius + noise),
          (Math.random() - 0.5) * 0.5
        );
      }
      
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      
      const line = new THREE.LineLoop(geometry, materialLine);
      const points = new THREE.Points(geometry, materialPoints);
      
      const ringGroup = new THREE.Group();
      ringGroup.add(line);
      ringGroup.add(points);
      
      // Orientación inicial aleatoria
      ringGroup.rotation.x = Math.random() * Math.PI;
      ringGroup.rotation.y = Math.random() * Math.PI;
      
      ringGroup.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.002,
          y: (Math.random() - 0.5) * 0.002,
          z: (Math.random() - 0.5) * 0.002
        }
      };

      this.rings.add(ringGroup);
    }

    this.scene.add(this.rings);
  }

  public animateRings(): void {
    this.rings.children.forEach((child) => {
      const speeds = child.userData['rotationSpeed'];
      if (speeds) {
        child.rotation.x += speeds.x;
        child.rotation.y += speeds.y;
        child.rotation.z += speeds.z;
      }
    });
  }
}

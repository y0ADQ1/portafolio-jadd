import { Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';
import { SceneManagerService } from './scene-manager.service';
import { CameraManagerService } from './camera-manager.service';

@Injectable({
  providedIn: 'root'
})
export class RendererManagerService {
  private renderer!: THREE.WebGLRenderer;
  private canvas!: HTMLCanvasElement;
  private animationFrameId: number | null = null;

  constructor(
    private sceneManager: SceneManagerService,
    private cameraManager: CameraManagerService,
    private ngZone: NgZone
  ) {}

  public init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);

    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    this.ngZone.runOutsideAngular(() => {
      this.render();
    });
  }

  private render = (): void => {
    this.animationFrameId = requestAnimationFrame(this.render);
    this.sceneManager.animateRings();
    this.renderer.render(this.sceneManager.scene, this.cameraManager.camera);
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.cameraManager.resize(width, height);
    this.renderer.setSize(width, height);
  }

  public destroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    this.renderer.dispose();
  }
}

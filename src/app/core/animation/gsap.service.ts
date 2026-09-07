import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SceneManagerService } from '../three/scene-manager.service';
import { CameraManagerService } from '../three/camera-manager.service';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sceneManager: SceneManagerService,
    private cameraManager: CameraManagerService,
    private ngZone: NgZone
  ) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  public initScrollAnimations(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      const panels = gsap.utils.toArray('.panel') as HTMLElement[];
      const totalPanels = panels.length;
      
      // Estado inicial:
      // Hero (panel 0) inicia visible y en escala normal.
      gsap.set(panels[0], { autoAlpha: 1, scale: 1, pointerEvents: 'auto' });
      // Los demás inician invisibles y alejados (escala pequeña) para dar sensación de profundidad.
      gsap.set(panels.slice(1), { autoAlpha: 0, scale: 0.8, pointerEvents: 'none' });

      // Definimos la duración total relativa de la timeline
      const timelineDuration = (totalPanels * 2) - 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Suavizado de 1.5s para que se sienta muy fluido e inmersivo
        }
      });

      // 1. Animación continua de la cámara y de los anillos de Three.js
      // La cámara se acerca mucho al centro (z=2) pero NO los rebasa, para que siempre se vean de fondo
      tl.to(this.cameraManager.camera.position, {
        z: 2, 
        ease: 'none',
        duration: timelineDuration
      }, 0);

      // Los anillos rotan a lo largo de todo el scroll con mayor intensidad
      tl.to(this.sceneManager.rings.rotation, {
        x: Math.PI * 3,
        y: Math.PI * 2,
        z: Math.PI,
        ease: 'none',
        duration: timelineDuration
      }, 0);

      // 2. Animaciones escalonadas de las secciones (Capas de UI)
      panels.forEach((panel, i) => {
        // Tiempos relativos en la timeline
        const enterTime = i * 2 - 0.5;
        const stayTime = i * 2 + 1;
        
        // Si NO es el primer panel, entra acercándose desde el fondo
        if (i !== 0) {
          tl.fromTo(panel,
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 1, scale: 1, ease: 'power2.out', duration: 1.5 },
            enterTime
          );
          // Habilitar interacción SOLAMENTE cuando la capa esté 100% en pantalla (transición completada)
          tl.set(panel, { pointerEvents: 'auto' }, enterTime + 1.5);
        }

        // Si NO es el último panel, sale acercándose a la cámara y desapareciendo
        if (i !== totalPanels - 1) {
          // Deshabilitar interacción en cuanto empiece a desaparecer para devolver el control del scroll a la ventana
          tl.set(panel, { pointerEvents: 'none' }, stayTime);
          tl.to(panel, {
            autoAlpha: 0,
            scale: 1.3,
            ease: 'power2.in',
            duration: 1.5
          }, stayTime);
        }
      });
    });
  }
}

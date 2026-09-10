import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { RendererManagerService } from './core/three/renderer-manager.service';
import { GsapService } from './core/animation/gsap.service';

import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Stack } from './features/stack/stack';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, About, Stack, Projects, Experience, Contact],
  styleUrl: './app.css',
  template: `
    <!-- Canvas 3D de fondo -->
    <canvas #threeCanvas class="fixed top-0 left-0 w-full h-full -z-10"></canvas>
    
    <!-- Contenedor invisible para forzar el scroll nativo. 
         La altura será calculada dinámicamente por GSAP. -->
    <div id="scroll-container" class="w-full"></div>

    <!-- Contenedor fijo que mantiene las capas visuales fijas en la pantalla -->
    <main class="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none overflow-hidden">
      <!-- GSAP controlará pointer-events dinámicamente para evitar bugs de scroll -->
      <app-hero id="hero" class="panel absolute inset-0 block"></app-hero>
      <app-about id="about" class="panel absolute inset-0 block"></app-about>
      <app-stack id="stack" class="panel absolute inset-0 block"></app-stack>
      <app-projects id="projects" class="absolute inset-0 block"></app-projects>
      <app-experience id="experience" class="panel absolute inset-0 block"></app-experience>
      <app-contact id="contact" class="panel absolute inset-0 block"></app-contact>
    </main>
  `,
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(
    private rendererManager: RendererManagerService,
    private gsapService: GsapService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.rendererManager.init(this.canvasRef.nativeElement);
      // Timeout para asegurar que el DOM está listo antes de crear la timeline
      setTimeout(() => {
        this.gsapService.initScrollAnimations();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.rendererManager.destroy();
    }
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-experience',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center px-8 md:px-24 py-24 bg-portfolio-black/60 backdrop-blur-md">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-16 border-b border-portfolio-gray-800 pb-6 tracking-tight">Experiencia Profesional</h2>
      
      <div class="relative border-l border-portfolio-gray-800 ml-4 space-y-16 pb-8">
        
        <div class="relative pl-12 group">
          <div class="absolute -left-1.5 top-2 w-3 h-3 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors"></div>
          <p class="font-mono text-sm text-portfolio-gray-400 mb-2">Desarrollador de Software</p>
          <h3 class="text-2xl font-bold uppercase text-portfolio-white mb-1">Reso Sistemas</h3>
          <h4 class="text-lg text-portfolio-gray-400 mb-6">Universidad Iberoamericana</h4>
          <p class="text-portfolio-gray-200 max-w-2xl leading-relaxed">
            Migración, gestión y optimización del sistema de control escolar. 
            Desarrollé interfaces y lógica de negocio utilizando .NET, CSHTML y JavaScript, 
            garantizando una arquitectura sólida y la integridad de los datos en Oracle DB.
          </p>
        </div>

        <div class="relative pl-12 group">
          <div class="absolute -left-1.5 top-2 w-3 h-3 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors"></div>
          <p class="font-mono text-sm text-portfolio-gray-400 mb-2">Líder de Desarrollo Full-Stack</p>
          <h3 class="text-2xl font-bold uppercase text-portfolio-white mb-1">Laboratorio Cefire</h3>
          <h4 class="text-lg text-portfolio-gray-400 mb-6">Clínica de Análisis Médicos</h4>
          <p class="text-portfolio-gray-200 max-w-2xl leading-relaxed">
            Diseño arquitectónico y desarrollo de ciclo completo de una plataforma integral 
            para la gestión del laboratorio desplegada en servidor local. 
            Solución construida con HTML, JavaScript, PHP nativos y MySQL.
          </p>
        </div>

      </div>
    </section>
  `,
})
export class Experience {}

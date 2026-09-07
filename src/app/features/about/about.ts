import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center px-8 md:px-24 py-24 bg-portfolio-black/40 backdrop-blur-sm">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-12 border-b border-portfolio-gray-800 pb-6 tracking-tight">Sobre Mí</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-portfolio-gray-200 leading-relaxed">
        <div class="space-y-8">
          <p>
            Soy un Ingeniero de Software orientado a crear soluciones integrales. 
            Me apasiona profundamente el diseño de aplicaciones web y móviles, tomando responsabilidad sobre 
            todo el ciclo de vida del producto: desde la experiencia visual (Frontend) hasta la lógica de negocio (Backend).
          </p>
          <p>
            Mi visión técnica es global. Construyo interfaces fluidas y APIs robustas, asegurando siempre que la 
            arquitectura esté respaldada por un modelado de bases de datos eficiente y desplegada sobre una 
            infraestructura de nube escalable y segura.
          </p>
        </div>
        <div class="space-y-6 text-portfolio-gray-400 font-mono text-sm bg-portfolio-gray-800/20 p-8 border border-portfolio-gray-800">
          <p><span class="text-portfolio-white">const</span> location = 'Torreón, Coahuila';</p>
          <p><span class="text-portfolio-white">const</span> degree = 'Ingeniería en Desarrollo de Software';</p>
          <p><span class="text-portfolio-white">const</span> focus = ['Web & Mobile Apps', 'Full-Stack Dev', 'Infra & DBs'];</p>
        </div>
      </div>
    </section>
  `,
})
export class About {}

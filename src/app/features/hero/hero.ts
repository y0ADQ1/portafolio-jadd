import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-hero',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-24 pt-20">
      <p class="text-portfolio-gray-400 mb-4 font-mono text-sm tracking-widest uppercase">Hola, Yo Soy</p>
      <h1 class="text-5xl md:text-8xl font-bold uppercase mb-2 tracking-tight">Juan A. Deras Duron</h1>
      <h2 class="text-xl md:text-4xl text-portfolio-gray-400 mb-8 font-light">Ingeniero de Software & Full-Stack Developer</h2>
      <p class="text-lg text-portfolio-gray-200 max-w-2xl mb-12 border-l-2 border-portfolio-gray-600 pl-6 leading-relaxed">
        Diseño e implemento aplicaciones web y móviles innovadoras. 
        Especializado en el desarrollo Full-Stack, desde la construcción de interfaces intuitivas y backends eficientes, 
        hasta el despliegue seguro en la nube y el diseño óptimo de bases de datos.
      </p>
    </section>
  `,
})
export class Hero { }

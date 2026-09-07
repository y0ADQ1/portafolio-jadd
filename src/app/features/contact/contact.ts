import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center items-center px-8 py-24 text-center">
      <h2 class="text-4xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">Desarrollemos tu Futuro</h2>
      <p class="text-xl text-portfolio-gray-400 mb-16 max-w-2xl">
        ¿Listo para construir sistemas escalables y soluciones digitales robustas? Hablemos sobre tu próximo proyecto.
      </p>
      
      <a href="mailto:juanderasduron@gmail.com" class="flex items-center text-xl md:text-3xl font-light hover:text-portfolio-gray-400 transition-colors mb-16 border-b border-portfolio-gray-800 hover:border-portfolio-gray-400 pb-2">
        <img src="https://cdn.simpleicons.org/gmail/white" class="w-6 h-6 mr-4" alt="Email"> juanderasduron&#64;gmail.com
      </a>

      <div class="flex flex-col sm:flex-row gap-8 font-mono text-sm uppercase tracking-widest">
        <a href="https://github.com/y0ADQ1" target="_blank" class="group flex items-center justify-center px-8 py-4 border border-portfolio-gray-600 text-portfolio-white hover:border-portfolio-white hover:bg-portfolio-white hover:text-portfolio-black transition-all">
          <img src="https://cdn.simpleicons.org/github/white" class="w-5 h-5 mr-3 group-hover:invert transition-all" alt="GitHub"> GitHub
        </a>
        <a href="https://wa.me/528714997082" target="_blank" class="group flex items-center justify-center px-8 py-4 border border-portfolio-gray-600 text-portfolio-white hover:border-portfolio-white hover:bg-portfolio-white hover:text-portfolio-black transition-all">
          <img src="https://cdn.simpleicons.org/whatsapp/white" class="w-5 h-5 mr-3 group-hover:invert transition-all" alt="WhatsApp"> WhatsApp
        </a>
      </div>
      
      <p class="mt-32 font-mono text-xs text-portfolio-gray-600">
        © {{ currentYear }} Juan Antonio Deras Durón. Built with Angular & Three.js.
      </p>
    </section>
  `,
})
export class Contact {
  currentYear = new Date().getFullYear();
}

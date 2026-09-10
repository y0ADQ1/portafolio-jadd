import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-projects',
  template: `
    <!-- Panel 1 -->
    <section class="panel absolute inset-0 flex flex-col pt-24 px-8 md:px-24 pb-32">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-16 border-b border-portfolio-gray-800 pb-6 tracking-tight shrink-0">Proyectos Destacados (1/3)</h2>
      
      <div class="space-y-16">
        <!-- Proyecto: YacaTec Vales -->
        <article class="relative group">
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors duration-500"></div>
          <h3 class="text-2xl md:text-4xl font-bold uppercase mb-2 text-portfolio-white">Tecu Vales</h3>
          <h4 class="text-portfolio-gray-200 text-xl font-light mb-4">Ingeniero Principal de Frontend</h4>
          <p class="text-portfolio-gray-400 font-mono text-sm mb-6">Angular / Flowbite / Git Flow</p>
          <p class="text-lg text-portfolio-gray-200 max-w-3xl mb-8 leading-relaxed">
            Plataforma para préstamo de vales con manejo de múltiples roles (Gerente General, Gerente Sucursal, Cajero, Administrador). 
            Fui el Ingeniero Principal del equipo Frontend, encargándome de deducir la lógica para la base de datos, estructurar funcionalidades, asignar tareas, y aprobar revisiones de código (QA). Manejo estricto de repositorios mediante Git Flow basado en develop.
          </p>
          <div class="flex gap-6 font-mono text-sm">
            <a href="https://github.com/YacaTec-Vales/frontend-desktop-Tecu.git" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/github/white" class="w-4 h-4 mr-2" alt="GitHub"> GitHub Repo
            </a>
          </div>
        </article>

        <!-- Proyecto: CatHub / Michistema -->
        <article class="relative group">
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors duration-500"></div>
          <h3 class="text-2xl md:text-4xl font-bold uppercase mb-2 text-portfolio-white">CatHub (Michistema)</h3>
          <h4 class="text-portfolio-gray-200 text-xl font-light mb-4">Frontend Developer</h4>
          <p class="text-portfolio-gray-400 font-mono text-sm mb-6">Kotlin (Android) / WebSockets / IoT</p>
          <p class="text-lg text-portfolio-gray-200 max-w-3xl mb-8 leading-relaxed">
            Ecosistema IoT para el cuidado de mascotas. Se compone de dos partes: una app móvil en Kotlin para controlar los entornos (arenero, comedero, bebedero), y una aplicación web administrativa con gráficas para monitorear el estado de los dispositivos. Ambas consumen datos en tiempo real mediante WebSockets.
          </p>
          <div class="flex flex-wrap gap-6 font-mono text-sm">
            <a href="https://github.com/y0ADQ1/MICHISTEMA.git" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/android/white" class="w-4 h-4 mr-2" alt="Android"> App Móvil
            </a>
            <a href="https://github.com/JorgeLIV/Michistema.git" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/github/white" class="w-4 h-4 mr-2" alt="GitHub"> Web App
            </a>
          </div>
        </article>
      </div>

    </section>

    <!-- Panel 2 -->
    <section class="panel absolute inset-0 flex flex-col pt-24 px-8 md:px-24 pb-32">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-16 border-b border-portfolio-gray-800 pb-6 tracking-tight shrink-0">Proyectos Destacados (2/3)</h2>
      
      <div class="space-y-16">
        <!-- Proyecto: FoodOps -->
        <article class="relative group">
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors duration-500"></div>
          <h3 class="text-2xl md:text-4xl font-bold uppercase mb-2 text-portfolio-white">FoodOps</h3>
          <h4 class="text-portfolio-gray-200 text-xl font-light mb-4">Frontend Developer</h4>
          <p class="text-portfolio-gray-400 font-mono text-sm mb-6">Vue / NestJS / Redis / TypeORM</p>
          <p class="text-lg text-portfolio-gray-200 max-w-3xl mb-8 leading-relaxed">
            Sistema escalable para la entrega de comida a domicilio. 
            El proyecto abarca la implementación de un frontend responsivo en Vue 
            y la construcción de un backend robusto en NestJS. Integra Redis para el 
            manejo de rate-limiting y TypeORM para la gestión de entidades personalizadas.
          </p>
          <div class="flex gap-6 font-mono text-sm">
            <a href="https://github.com/EJ-JS-DevOps/FoodOps-EJJS-FrontEnd" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/github/white" class="w-4 h-4 mr-2" alt="GitHub"> Frontend Repo
            </a>
          </div>
        </article>

        <!-- Proyecto: AtenasFood -->
        <article class="relative group">
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors duration-500"></div>
          <h3 class="text-2xl md:text-4xl font-bold uppercase mb-2 text-portfolio-white">AtenasFood</h3>
          <h4 class="text-portfolio-gray-200 text-xl font-light mb-4">Full-Stack & DevOps Engineer</h4>
          <p class="text-portfolio-gray-400 font-mono text-sm mb-6">Frontend / Backend / Bases de Datos / Infra</p>
          <p class="text-lg text-portfolio-gray-200 max-w-3xl mb-8 leading-relaxed">
            Arquitectura de software para la gestión de un restaurante. Principal encargado de desarrollar de extremo a extremo: estructuración del Frontend, APIs de Backend, diseño de la Lógica de Base de Datos y despliegue de Infraestructura.
          </p>
          <div class="flex gap-6 font-mono text-sm">
            <a href="https://github.com/AzaelG26/Atenas.git" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/github/white" class="w-4 h-4 mr-2" alt="GitHub"> GitHub Repo
            </a>
          </div>
        </article>
      </div>

    </section>

    <!-- Panel 3 -->
    <section class="panel absolute inset-0 flex flex-col pt-24 px-8 md:px-24 pb-32">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-16 border-b border-portfolio-gray-800 pb-6 tracking-tight shrink-0">Proyectos Destacados (3/3)</h2>
      
      <div class="space-y-16">
        <!-- Proyecto: Hotel Laguna Inn -->
        <article class="relative group">
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-portfolio-gray-800 group-hover:bg-portfolio-white transition-colors duration-500"></div>
          <h3 class="text-2xl md:text-4xl font-bold uppercase mb-2 text-portfolio-white">Hotel Laguna Inn</h3>
          <h4 class="text-portfolio-gray-200 text-xl font-light mb-4">Ingeniero Principal Frontend</h4>
          <p class="text-portfolio-gray-400 font-mono text-sm mb-6">UI/UX / Frontend</p>
          <p class="text-lg text-portfolio-gray-200 max-w-3xl mb-8 leading-relaxed">
            Sistema integral de reservaciones. Como único ingeniero Frontend, fui responsable de diseñar, planear y desarrollar la totalidad de las pantallas y flujos de experiencia de usuario del sistema.
          </p>
          <div class="flex gap-6 font-mono text-sm">
            <a href="https://github.com/ack3stx/INTEGRADORAOFICIAL_E4.git" target="_blank" class="text-portfolio-white hover:text-portfolio-gray-400 transition-colors uppercase tracking-widest border-b border-portfolio-gray-600 hover:border-transparent pb-1 flex items-center">
              <img src="https://cdn.simpleicons.org/github/white" class="w-4 h-4 mr-2" alt="GitHub"> GitHub Repo
            </a>
          </div>
        </article>
      </div>
    </section>
  `,
})
export class Projects {
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-stack',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center px-8 md:px-24 py-24">
      <h2 class="text-4xl md:text-6xl font-bold uppercase mb-16 border-b border-portfolio-gray-800 pb-6 tracking-tight">Stack Tecnológico</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-mono text-sm">
        
        <div class="group">
          <h3 class="text-portfolio-white mb-8 uppercase tracking-widest border-l-2 border-portfolio-gray-600 group-hover:border-portfolio-white transition-colors pl-4">Frontend</h3>
          <ul class="space-y-5 text-portfolio-gray-400">
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/angular/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Angular"> Angular & <img src="https://cdn.simpleicons.org/vuedotjs/white" class="w-4 h-4 ml-2 mr-2 opacity-70 group-hover:opacity-100" alt="Vue"> Vue</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/react/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="React"> React & <img src="https://cdn.simpleicons.org/nextdotjs/white" class="w-4 h-4 ml-2 mr-2 opacity-70 group-hover:opacity-100" alt="Next.js"> Next.js</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/react/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="React Native"> React Native</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/html5/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="HTML5"> HTML5 & SCSS</li>
          </ul>
        </div>
        
        <div class="group">
          <h3 class="text-portfolio-white mb-8 uppercase tracking-widest border-l-2 border-portfolio-gray-600 group-hover:border-portfolio-white transition-colors pl-4">Backend & AI</h3>
          <ul class="space-y-5 text-portfolio-gray-400">
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/nodedotjs/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Node.js"> Node.js & NestJS</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/python/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Python"> Python & FastAPI</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/dotnet/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt=".NET"> C# .NET</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/laravel/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Laravel"> PHP & Laravel</li>
          </ul>
        </div>

        <div class="group">
          <h3 class="text-portfolio-white mb-8 uppercase tracking-widest border-l-2 border-portfolio-gray-600 group-hover:border-portfolio-white transition-colors pl-4">Database</h3>
          <ul class="space-y-5 text-portfolio-gray-400">
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/postgresql/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="PostgreSQL"> PostgreSQL & MySQL</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/mongodb/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="MongoDB"> MongoDB</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/oracle/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Oracle"> Oracle DB</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/redis/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Redis"> Redis & TypeORM</li>
          </ul>
        </div>

        <div class="group">
          <h3 class="text-portfolio-white mb-8 uppercase tracking-widest border-l-2 border-portfolio-gray-600 group-hover:border-portfolio-white transition-colors pl-4">Infra & Cloud</h3>
          <ul class="space-y-5 text-portfolio-gray-400">
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/docker/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Docker"> Docker</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/amazonwebservices/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="AWS"> AWS & DigitalOcean</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/linux/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Linux"> Linux (Ubuntu)</li>
            <li class="flex items-center hover:text-portfolio-white transition-colors"><img src="https://cdn.simpleicons.org/git/white" class="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100" alt="Git"> Git & Nginx</li>
          </ul>
        </div>

      </div>
    </section>
  `,
})
export class Stack { }

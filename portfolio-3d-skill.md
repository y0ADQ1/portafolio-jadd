# Skill: Portfolio 3D para Desarrollador Angular

## 1. Propósito

Esta skill guía a un agente de IA para diseñar y desarrollar un portafolio profesional para un desarrollador de software usando:

- Angular
- Three.js
- GSAP
- GSAP ScrollTrigger
- Spline, cuando sea conveniente

La experiencia visual debe ser predominantemente **blanco y negro**, minimalista, tecnológica y profesional.

El objetivo es que el portafolio comunique ingeniería de software, dominio técnico, experiencia profesional y capacidad para construir productos digitales modernos.

> El resultado debe parecer el trabajo de un **Senior Software Engineer / Creative Developer**, no una plantilla genérica de portfolio.

---

# 2. Rol del agente

Actúa como una combinación de:

- Senior Frontend Engineer
- Angular Architect
- Creative Developer
- Three.js / WebGL Developer
- Motion Designer
- UX/UI Designer
- Accessibility Engineer
- Performance Engineer

Debes tomar decisiones técnicas y visuales con criterio profesional.

No agregues efectos únicamente porque "se ven cool". Cada animación debe tener una función: comunicar profundidad, transición, jerarquía, interacción o narrativa.

---

# 3. Stack tecnológico

## Obligatorio

- Angular
- TypeScript
- Three.js
- GSAP
- GSAP ScrollTrigger

## Opcional

- Spline
- GLTF / GLB
- Tailwind CSS
- CSS Custom Properties
- Web APIs modernas

No agregues frameworks adicionales sin justificar por qué son necesarios.

---

# 4. Concepto visual

La idea central del sitio es:

> **"Un ingeniero de software atravesando un sistema digital interactivo."**

El sitio debe sentirse como una experiencia continua.

Evitar:

- Portfolio de fotógrafo.
- Portfolio de artista.
- Landing page genérica de startup.
- Dashboard.
- Diseño corporativo tradicional.
- Exceso de colores.
- Gradientes neón.
- Estética excesivamente cyberpunk.

Buscar:

- Minimalismo.
- Alto contraste.
- Elegancia.
- Precisión.
- Sensación técnica.
- Espacios negativos.
- Tipografía fuerte.
- Grid editorial.
- Movimiento controlado.
- 3D con propósito.

---

# 5. Paleta

La identidad principal debe utilizar únicamente blanco, negro y grises.

```css
--portfolio-black: #000000;
--portfolio-white: #ffffff;

--portfolio-gray-100: #f5f5f5;
--portfolio-gray-200: #e5e5e5;
--portfolio-gray-400: #999999;
--portfolio-gray-600: #666666;
--portfolio-gray-800: #333333;
```

No utilizar colores decorativos adicionales.

Los colores semánticos, como rojo para errores o verde para éxito, solo deben aparecer cuando tengan una función real.

---

# 6. Principio de experiencia

El usuario no debe sentir simplemente:

"Estoy haciendo scroll hacia abajo."

Debe sentir:

"Estoy avanzando dentro de una escena digital."

El scroll puede controlar:

- Cámara 3D.
- Posición.
- Rotación.
- Escala.
- Opacidad.
- Profundidad.
- Parallax.
- Texto.
- Máscaras.
- Transiciones.
- Cambio de escenas.

Conceptualmente:

```
SCROLL
   ↓
Camera movement
   ↓
Object transformation
   ↓
Content transition
   ↓
New scene
   ↓
New section
```

---

# 7. Estructura narrativa

## 7.1 Hero

El hero debe comunicar inmediatamente:

- Nombre.
- Profesión.
- Especialidad.
- Propuesta de valor.
- CTA.
- Elemento 3D protagonista.

Ejemplo:

```
HELLO, I'M [NAME]

SOFTWARE DEVELOPER
BUILDING DIGITAL SYSTEMS

[VIEW WORK]    [CONTACT]

                    3D OBJECT
```

El elemento 3D debe funcionar como parte de la identidad visual, no como decoración aislada.

## 7.2 About

Explicar brevemente:

- Quién soy.
- Qué construyo.
- Qué problemas resuelvo.
- Cómo pienso como desarrollador.
- Qué me interesa técnicamente.

No convertir esta sección en un currículum.

## 7.3 Stack

Mostrar tecnologías de forma técnica, evitando simplemente colocar logos.

Agrupar por categorías:

```
FRONTEND
Angular
React
Next.js

MOBILE
React Native
Swift
Kotlin
.NET MAUI

BACKEND
NestJS
FastAPI
Spring Boot

DATABASE
MySQL
PostgreSQL
MongoDB

INFRASTRUCTURE
Docker
AWS
DigitalOcean
Linux
```

Estos datos son únicamente ejemplos. Confirmar con el usuario qué tecnologías realmente domina.

## 7.4 Projects

Esta es una de las secciones más importantes.

Cada proyecto debe explicar:

- Problema.
- Solución.
- Rol.
- Stack.
- Resultado.
- GitHub.
- Demo, si existe.

Evitar una cuadrícula de cards genéricas.

Preferir:

- Proyectos full-screen.
- Paneles expansibles.
- Transiciones.
- Objetos 3D asociados.
- Scroll-driven storytelling.
- Revelado progresivo.

## 7.5 Experience

Mostrar experiencia profesional como una narrativa.

Ejemplo:

```
2024
  ↓
2025
  ↓
2026
  ↓
NOW
```

La transición temporal puede sincronizarse con la escena 3D.

## 7.6 Contact

Debe ser simple.

Incluir:

- Email.
- GitHub.
- LinkedIn.
- CV.
- CTA.

Evitar formularios complejos si no aportan valor.

---

# 8. Three.js

Three.js se utilizará para la capa WebGL.

Responsabilidades posibles:

- Scene.
- Camera.
- Renderer.
- Lights.
- Materials.
- Geometry.
- Models.
- Particles.
- Raycasting.
- Camera transitions.
- Object transformations.

La lógica de Three.js debe mantenerse separada de los templates Angular.

Arquitectura sugerida:

```
src/app/core/three/

scene-manager.ts
camera-manager.ts
renderer-manager.ts
asset-manager.ts
animation-manager.ts
```

Evitar crear múltiples render loops innecesarios.

Cuando sea viable, utilizar una escena compartida y modificarla según la sección actual.

---

# 9. GSAP + ScrollTrigger

GSAP será la herramienta principal para motion design.

Utilizar:

- Timeline.
- ScrollTrigger.
- Scrub.
- Pinning.
- Stagger.
- Transformaciones.
- Opacity.
- Transiciones.

Ejemplo conceptual:

```
scroll progress
       ↓
GSAP timeline
       ↓
 ┌───────────────┐
 │ HTML          │
 │ scale         │
 │ opacity       │
 │ transform     │
 └───────────────┘
        +
 ┌───────────────┐
 │ Three.js      │
 │ camera        │
 │ rotation      │
 │ position      │
 │ scale         │
 └───────────────┘
```

Preferir animaciones basadas en:

- transform
- opacity

Evitar animar constantemente propiedades que provoquen layout/reflow cuando puedan sustituirse por transforms.

---

# 10. Spline

Spline puede utilizarse para:

- Diseñar escenas 3D.
- Crear objetos complejos.
- Prototipar rápidamente.
- Crear assets interactivos.

No es obligatorio utilizarlo.

Si Three.js proporciona:

- mejor rendimiento,
- mayor control,
- menor dependencia,
- mejor mantenibilidad,

preferir Three.js.

La decisión debe justificarse.

---

# 11. Arquitectura Angular

Utilizar Angular moderno.

Preferir:

- Standalone components.
- Signals cuando aporten valor.
- ChangeDetectionStrategy.OnPush.
- Lazy loading.
- Tipado estricto.
- Servicios especializados.
- Separación de responsabilidades.

Evitar:

- NgModules innecesarios.
- Componentes gigantes.
- Manipulación excesiva del DOM.
- Estado global innecesario.
- Código duplicado.
- Lógica de Three.js dentro de templates.

---

# 12. Arquitectura sugerida

```
src/
├── app/
│   ├── core/
│   │   ├── animation/
│   │   │   ├── gsap.service.ts
│   │   │   └── scroll-trigger.service.ts
│   │   │
│   │   └── three/
│   │       ├── scene-manager.ts
│   │       ├── camera-manager.ts
│   │       ├── renderer-manager.ts
│   │       └── asset-manager.ts
│   │
│   ├── features/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── stack/
│   │   ├── projects/
│   │   ├── experience/
│   │   └── contact/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   └── models/
│   │
│   └── app.component.ts
│
├── assets/
│   ├── models/
│   ├── textures/
│   ├── images/
│   └── fonts/
│
└── styles/
    ├── tokens.css
    ├── typography.css
    └── global.css
```

---

# 13. Sistema de diseño

Centralizar los tokens.

Ejemplo:

```css
:root {
  --portfolio-black: #000000;
  --portfolio-white: #ffffff;

  --portfolio-gray-100: #f5f5f5;
  --portfolio-gray-200: #e5e5e5;
  --portfolio-gray-400: #999999;
  --portfolio-gray-600: #666666;
  --portfolio-gray-800: #333333;

  --portfolio-space-xs: 8px;
  --portfolio-space-sm: 16px;
  --portfolio-space-md: 24px;
  --portfolio-space-lg: 48px;
  --portfolio-space-xl: 96px;

  --portfolio-radius-sm: 4px;
  --portfolio-radius-md: 12px;
  --portfolio-radius-lg: 24px;
}
```

Evitar valores arbitrarios repetidos.

---

# 14. Tipografía

Preferir:

- Sans-serif moderna para contenido.
- Monospace para información técnica.

Jerarquía orientativa:

```
DISPLAY: 48–120px
H1:      48–96px
H2:      36–64px
BODY:    16–20px
CODE:    12–16px
```

Los valores finales deben adaptarse al viewport.

---

# 15. Microinteracciones

Utilizar cuando aporten significado:

- Hover.
- Focus.
- Links animados.
- Cursor interactivo en desktop.
- Revelado de texto.
- Indicadores de scroll.
- Estados activos.
- Transiciones de navegación.

No animar cada elemento.

Regla:

> Movimiento = significado.

---

# 16. Cursor

En desktop puede utilizarse:

- Mouse parallax.
- Cursor personalizado.
- Hover states.
- Raycasting.

No hacer que el cursor personalizado dificulte la navegación.

Las interacciones esenciales nunca deben depender exclusivamente del mouse.

---

# 17. Accesibilidad

Cumplir como mínimo con WCAG 2.2 AA.

Garantizar:

- Contraste.
- Navegación mediante teclado.
- Focus visible.
- HTML semántico.
- Labels accesibles.
- ARIA únicamente cuando sea necesario.
- Texto alternativo.
- Reduced motion.
- Contenido importante accesible sin WebGL.

Respetar:

```css
@media (prefers-reduced-motion: reduce) {
  /* Reducir o eliminar movimiento */
}
```

Cuando `prefers-reduced-motion` esté activo:

- Reducir parallax.
- Reducir rotaciones.
- Reducir camera movement.
- Evitar scrubbing agresivo.
- Mantener las transiciones esenciales simples.

---

# 18. Performance

La experiencia 3D debe ser avanzada sin convertirse en una página pesada.

Prioridades:

- Carga inicial.
- LCP.
- Interactividad.
- FPS.
- Uso de memoria.
- Tamaño de assets.

Aplicar:

- Lazy loading.
- Dynamic imports.
- GLB/GLTF optimizados.
- Texturas comprimidas.
- WebP/AVIF.
- Disposal correcto.
- Menos draw calls.
- Menos polígonos.
- Menos partículas.
- Suspensión de animaciones fuera del viewport.
- Carga progresiva de modelos.

No cargar todas las escenas 3D al iniciar.

---

# 19. Responsive

Probar como mínimo:

- 375px.
- 768px.
- 1024px.
- 1440px.
- Ultrawide.

No intentar reproducir exactamente la experiencia desktop en móvil.

En móvil se puede reducir:

- Complejidad 3D.
- Partículas.
- Número de objetos.
- Intensidad de animaciones.
- Interacciones.
- Resolución del renderer.

La experiencia móvil debe conservar la narrativa.

---

# 20. Degradación progresiva

El sitio debe seguir funcionando aunque:

- WebGL no esté disponible.
- El dispositivo tenga bajo rendimiento.
- El usuario reduzca movimiento.
- Un modelo 3D tarde en cargar.

Nunca depender de WebGL para mostrar:

- Nombre.
- Rol.
- Información profesional.
- Proyectos.
- Links.
- Contacto.

---

# 21. Narrativa 3D recomendada

Una posible narrativa:

```
HERO
 │
 │  El objeto 3D aparece pequeño.
 ↓
SCROLL
 │
 │  La cámara se aproxima.
 ↓
ABOUT
 │
 │  El objeto se abre / transforma.
 ↓
STACK
 │
 │  Aparecen sistemas / nodos / elementos.
 ↓
PROJECTS
 │
 │  Cada proyecto cambia la escena.
 ↓
EXPERIENCE
 │
 │  La cámara avanza por una línea temporal.
 ↓
CONTACT
 │
 │  La escena se simplifica.
 ↓
END
```

La implementación exacta debe depender del concepto visual elegido.

---

# 22. Projects como experiencia

En lugar de:

```
┌─────────┐
│ Project │
│ Image   │
│ Text    │
└─────────┘

┌─────────┐
│ Project │
│ Image   │
│ Text    │
└─────────┘
```

preferir una experiencia como:

```
PROJECT 01

             3D SCENE

description

TECH STACK

            ↓

PROJECT 02

             3D SCENE
```

El scroll puede controlar la transición entre proyectos.

---

# 23. Reglas de contenido

Nunca inventar:

- Empresas.
- Clientes.
- Proyectos.
- Certificaciones.
- Métricas.
- Años de experiencia.
- Tecnologías.
- Resultados.

Si falta información, utilizar:

- `[YOUR NAME]`
- `[YOUR ROLE]`
- `[PROJECT DESCRIPTION]`
- `[COMPANY]`
- `[YEAR]`
- `[LINK]`

y solicitar posteriormente los datos reales.

---

# 24. SEO

Implementar:

- `<title>` descriptivo.
- Meta description.
- Open Graph.
- URLs limpias.
- HTML semántico.
- Headings correctamente jerarquizados.
- Texto indexable.

No depender de canvas para contenido SEO.

---

# 25. Testing

Validar:

- **Visual**: 375px, 768px, 1024px, 1440px.
- **Funcional**: Navegación, Links, Scroll, Animaciones, Carga de modelos, Fallback de WebGL.
- **Accesibilidad**: Keyboard, Focus, Screen reader, Reduced motion, Contraste.
- **Performance**: FPS, Memory leaks, Bundle, Asset sizes, Tiempo de carga.

---

# 26. Workflow obligatorio

### Fase 1 — Discovery

Antes de programar, identificar:

- Nombre.
- Rol.
- Especialidad.
- Stack.
- Experiencia.
- Proyectos.
- GitHub.
- LinkedIn.
- Email.
- CV.
- Objetivo profesional.

### Fase 2 — Dirección visual

Definir:

- Concepto.
- Tipografía.
- Grid.
- Espaciado.
- Tokens.
- Escena 3D.
- Elemento protagonista.
- Narrativa del scroll.
- Estilo de transiciones.

### Fase 3 — Arquitectura

Definir:

- Estructura Angular.
- Features.
- Servicios.
- Gestión de Three.js.
- Gestión de GSAP.
- Assets.
- Loading strategy.

### Fase 4 — Prototipo

Construir únicamente:

- Hero.
- Objeto 3D.
- ScrollTrigger.
- Primera transición.
- Entrada de About.

No desarrollar todo el sitio antes de validar esta experiencia.

### Fase 5 — Desarrollo

Construir sección por sección:

```
Hero
 ↓
About
 ↓
Stack
 ↓
Projects
 ↓
Experience
 ↓
Contact
```

Cada sección debe integrarse con la narrativa.

### Fase 6 — Performance

Revisar:

- Bundle.
- FPS.
- Assets.
- WebGL.
- Memory.
- Lazy loading.
- Disposal.
- Mobile performance.

### Fase 7 — Accessibility

Revisar:

- Keyboard.
- Focus.
- Contrast.
- Screen readers.
- Reduced motion.
- Semantic HTML.

### Fase 8 — Polish

Finalmente:

- Microinteracciones.
- Timing.
- Easing.
- Detalles tipográficos.
- Hover states.
- Transiciones.
- Loading states.

No pulir detalles visuales antes de que la estructura principal funcione.

---

# 27. Orden de prioridades

El agente debe tomar decisiones en este orden:

```
1. CONTENIDO
       ↓
2. UX
       ↓
3. JERARQUÍA VISUAL
       ↓
4. ARQUITECTURA
       ↓
5. PERFORMANCE
       ↓
6. MOTION
       ↓
7. 3D
```

El 3D nunca debe compensar una mala UX.

---

# 28. Anti-patterns

No crear:

- ❌ Navbar genérica
- ❌ Hero genérico
- ❌ 3D decorativo sin función
- ❌ Gradientes morados/azules por defecto
- ❌ 20 efectos simultáneos
- ❌ Cards repetitivas
- ❌ Texto ilegible
- ❌ Animaciones que impiden leer
- ❌ WebGL obligatorio
- ❌ Cargar modelos gigantes
- ❌ Información falsa
- ❌ Dependencias innecesarias

---

# 29. Criterio de calidad

Antes de considerar terminada una sección, comprobar:

- [ ] ¿El contenido es claro?
- [ ] ¿Se entiende el rol del desarrollador?
- [ ] ¿La jerarquía visual funciona?
- [ ] ¿La animación tiene propósito?
- [ ] ¿El 3D aporta algo?
- [ ] ¿Funciona sin WebGL?
- [ ] ¿Funciona en móvil?
- [ ] ¿Respeta reduced motion?
- [ ] ¿Es accesible?
- [ ] ¿Tiene buen rendimiento?
- [ ] ¿El código es mantenible?

---

# 30. Regla final

Antes de implementar cualquier animación o elemento 3D, responder:

- ¿Qué comunica?
- ¿Por qué existe?
- ¿Mejora la experiencia?
- ¿Representa al desarrollador?
- ¿Cuál es su coste de rendimiento?
- ¿Funciona en móvil?
- ¿Funciona con reduced motion?
- ¿Es accesible?
- ¿Es mantenible?

Si una animación no aporta suficiente valor:

**NO IMPLEMENTARLA.**

El objetivo final es construir una experiencia que combine:

```
SOFTWARE ENGINEERING
        +
MINIMALISM
        +
MOTION DESIGN
        +
WEBGL / 3D
        +
PROFESSIONAL BRANDING
```

La experiencia debe ser memorable sin sacrificar claridad, accesibilidad, rendimiento ni calidad de código.

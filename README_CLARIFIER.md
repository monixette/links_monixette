# Asistente Estratégico de IA (LifeStrategics Clarificador V4)

Esta es la versión final documentada del **Strategic Wizard V4**, un proyecto diseñado para diagnosticar, filtrar y documentar ideas de proyectos de IA bajo restricciones organizacionales reales (tiempo, presupuesto, talento).

## Arquitectura del Proyecto
El proyecto se diseñó intencionalmente con arquitectura **Frontend-Only** (sin servidor backend de retención) para máxima privacidad del usuario y para ser desplegado instantáneamente en GitHub Pages.

- **Stack Técnico:** HTML Vanilla, JavaScript Vanilla, Tailwind CSS (via CDN).
- **Archivo Único:** Toda la lógica, HTML y estilos radican en el monolito `clarificador.html`.

## El Sistema de Diseño V2026 (LifeStrategics V2)
El tool es un fiel reflejo de las instrucciones de diseño de la marca:
- **Contenedor:** Se usa un `.mobile-shell` de `max-width: 480px` para imitar la estructura de la aplicación móvil Linktree en resolución desktop y perfecta adaptación en teléfono móvil.
- **Tipografía:**
  - *Display:* `Wix Madefor Display`
  - *Texto Base:* `Wix Madefor Text`
  - *Accent:* `Dancing Script`
- **Gama Cromática:**
  - Fondo (Deep Dark): `#242426`
  - Marca Azul (Understand): `#58AFCD`
  - Marca Oro (Decide): `#C5A149`
  - Marca Roja (Take Action): `#D15152`
- **Glassmorphism:** Efectos con `rgba(255, 255, 255, 0.04)` y bordes translúcidos al `0.10` emulando las tarjetas del Linktree principal. Incorpora animaciones de "Elevate on Hover" mediante sombras ligeras.

## Las 5 Fases Lógicas del Flujo
1. **Fase 1 (Diagnóstico):** Identifica el dolor real sin buzzwords y a la audiencia vulnerada.
2. **Fase 2 (Visión Ideal):** Determina a dónde queremos llegar asumiendo magia, e interroga la "Madurez Digital" de los empleados.
3. **Fase 3 (Mapeo de Gap):** El punto crítico de quiebre. En lenguaje no técnico, obliga al usuario a aterrizar que si solo tiene 5 horas semanales de side-project sin presupuesto y sin BD ordenada, no puede hacer un asistente autónomo multi-agente.
4. **Fase 4 (Ideación):** Usando el motor SVG/Canvas en tiempo real, fuerza iteraciones. Captura 3 a 5 ideas y exige catalogarlas con sliders de Impacto & Factibilidad 0-5. Luego dibuja esas coordenadas en una matriz visual segmentada por áreas ("Victoria Rápida", "Apuesta").
5. **Fase 5 (Aterrizaje Ejecutivo):** Formula la métrica de éxito a 2 semanas, el riesgo mortal (Blocker) y un objetivo previo de investigación corporativa (API discovery).

## Novedad: PRD Master Prompt
La aplicación se corona con un bloque final `BONUS` que compila toda la respuesta y las opciones seleccionadas en un *Super Prompt* optimizado para Agentes Code-Generators (Claude, Cursor, AntiGravity). Este prompt elimina alucinaciones de la IA dándole un contexto perfecto de restricciones organizacionales de caja negra ("Tengo tiempo crítico", "Nadie en mi equipo sabe programar Backend").

---

## Cómo exportar este proyecto a tu Workspace Lifestrategics
Si vas a alojar esto en tu propia marca/dominio:
1. Copia el archivo `clarificador.html` a la carpeta principal de tu nuevo workspace.
2. Si prefieres añadir tu logotipo de LS (.png o .svg), insértalo dentro de la tag `<header>` que está alrededor de la línea 158.
3. Si cambias los colores CSS del sistema (dentro del script de tailwind inicial dictado en `<script> tailwind.config...`), los sliders, canvas de ideación y botones heredarán todos los tonos actualizados automáticamente.

**Para cualquier duda o iteración:** Pasa este `README_CLARIFIER.md` al agente Antigravity principal de ese nuevo Workspace, y entenderá perfectamente toda la infraestructura generada.

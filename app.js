/**
 * MarkStudio Pro — Core Application Logic
 * Comprehensive, resilient, and feature-rich Markdown Studio
 */

(() => {
  'use strict';

  // ========================================================
  // 1. STATE & STORAGE
  // ========================================================
  const STORAGE_DOCS_KEY = 'markstudio_pro_documents_v1';
  const STORAGE_ACTIVE_ID_KEY = 'markstudio_pro_active_doc_id';
  const STORAGE_SETTINGS_KEY = 'markstudio_pro_settings_v1';
  const STORAGE_THEME_KEY = 'markstudio_pro_theme';
  const STORAGE_PLATFORM_KEY = 'markstudio_pro_platform';

  const defaultTemplates = {
    readme: `# 🚀 Proyecto Épico

[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](LICENSE)
[![Versión](https://img.shields.io/badge/versión-2.5.0-success.svg)]()
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

Una plataforma de próxima generación para crear contenido técnico con máxima elegancia y velocidad.

---

> [!NOTE]
> MarkStudio Pro soporta GitHub Flavored Markdown completo, fórmulas KaTeX y diagramas Mermaid en tiempo real.

## ✨ Características Principales

- ⚡ **Tiempo Real Ultrarrápido:** Sin recargas ni parpadeos.
- 🧮 **KaTeX Nativo:** Escribe ecuaciones matemáticas con sintaxis LaTeX.
- 📊 **Diagramas Mermaid:** Visualiza flujos, arquitecturas y secuencias.
- 🎨 **5 Temas Seleccionados:** Desde Slate Dark hasta Tokyo Night y Paper Luxe.

## 📦 Instalación

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/usuario/proyecto-epico.git

# Entrar al directorio
cd proyecto-epico

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

## 🧠 Arquitectura del Sistema

\`\`\`mermaid
flowchart TD
    A[Usuario Input] -->|Markdown| B(Marked Parser)
    B --> C{Render Pipeline}
    C -->|Fórmulas| D[KaTeX Engine]
    C -->|Diagramas| E[Mermaid.js]
    C -->|Código| F[Highlight.js]
    D --> G[Vista Previa Dinámica]
    E --> G
    F --> G
\`\`\`

## 📋 Tareas Pendientes

- [x] Diseñar interfaz ultra-moderna
- [x] Integrar KaTeX y Mermaid
- [ ] Conectar sincronización en la nube opcional
- [ ] Exportación a ePub y Presentaciones

---

### 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta \`LICENSE\` para más detalles.
`,
    'tech-spec': `# 📑 RFC-104: Arquitectura del Motor de Procesamiento

**Estado:** Aprobado  
**Autor:** Equipo de Ingeniería  
**Fecha:** 2026-09-26  

---

## 1. Resumen Ejecutivo
Este documento describe el diseño de alto rendimiento para el pipeline de renderizado en vivo y sincronización bidireccional de documentos Markdown.

> [!IMPORTANT]
> El objetivo de latencia es < 16ms por fotograma (60 FPS estables) en documentos de hasta 10,000 líneas.

## 2. Diagrama de Flujo

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor Dev as Desarrollador
    participant Ed as Editor Textarea
    participant Engine as MarkStudio Core
    participant Cache as Memory Cache
    participant View as Vista Previa

    Dev->>Ed: Escribe texto
    Ed->>Engine: Dispara evento input (Debounced 50ms)
    Engine->>Cache: Comprueba tokens en caché
    Cache-->>Engine: Tokens reutilizables
    Engine->>View: Inyecta HTML parcheado
    View-->>Dev: Muestra feedback instantáneo
\`\`\`

## 3. Especificación de Métricas

| Parámetro | Objetivo | Límite Máximo |
| :--- | :--- | :--- |
| Tiempo de Parseo | 4ms | 15ms |
| Tamaño de Paquete | < 250 KB | 400 KB |
| Consumo de RAM | < 35 MB | 60 MB |
`,
    'math-science': `# 🔬 Física Teórica & Matemáticas con KaTeX

Explora fórmulas complejas directamente dentro de tu flujo de notas técnicas.

---

## 🌌 Ecuaciones de Campo de Einstein

La ecuación fundamental que relaciona la geometría del espacio-tiempo con la distribución de materia:

$$G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}$$

Donde:
- $G_{\\mu\\nu}$: Tensor de Einstein
- $\\Lambda$: Constante cosmológica
- $T_{\\mu\\nu}$: Tensor de energía-momento

---

## 📐 Cálculo Integral & Probabilidad

Distribución Normal Gaussiana:

$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right)$$

Integral definida de Fourier:

$$\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} dx$$

> [!TIP]
> Puedes intercalar fórmulas en línea escribiendo \`$E=mc^2$\` o en bloques destacados usando \`$$...$$\`.
`,
    'api-docs': `# 🌐 API Documentation — V2 Endpoints

Servicio RESTful seguro con autenticación Bearer Token y respuestas JSON estandarizadas.

---

### \`GET /api/v2/documents\`

Obtiene el listado paginado de documentos guardados por el usuario.

#### Cabeceras Obligatorias
\`\`\`http
Authorization: Bearer <TU_API_TOKEN>
Content-Type: application/json
\`\`\`

#### Respuesta Exitosa (\`200 OK\`)
\`\`\`json
{
  "status": "success",
  "data": [
    {
      "id": "doc_9921",
      "title": "Notas de Arquitectura",
      "wordCount": 1420,
      "updatedAt": "2026-09-26T14:30:00Z"
    }
  ]
}
\`\`\`

> [!WARNING]
> Las peticiones sin token válido responderán con código de error HTTP \`401 Unauthorized\`.
`,
    'meeting-notes': `# 📅 Minutas de Reunión: Estrategia de Producto

**Fecha:** 26 de Septiembre, 2026  
**Participantes:** Laura G., Carlos M., Sofía R., Alejandro D.  
**Objetivo:** Plan de lanzamiento v3.0  

---

## 📌 Orden del Día
1. Revisión de métricas del trimestre anterior
2. Demostración de nuevas funciones
3. Asignación de tareas críticas

## 💡 Decisiones Clave
- Se prioriza la sincronización offline primero.
- La interfaz conservará el soporte de temas oscuros seleccionados.

## ✅ Compromisos & Tareas
- [x] Finalizar prototipo en Figma (Carlos)
- [ ] Implementar exportación PDF limpia (Sofía)
- [ ] Pruebas de rendimiento en navegadores móviles (Laura)
`,
    'blog-post': `# ✍️ Por qué el Markdown Domina el Mundo Técnico

El formato Markdown, creado en 2004 por John Gruber y Aaron Swartz, nació con una premisa simple: **ser legible como texto plano sin perder la capacidad de convertirse en HTML enriquecido**.

---

![Tecnología](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80)

> "La simplicidad es el requisito previo para la confiabilidad." — Edsger W. Dijkstra

### La Evolución hacia la Herramienta Definitiva
Hoy en día, las extensiones modernas permiten que ingenieros, científicos y escritores no necesiten saltar entre múltiples aplicaciones pesadas:

1. **Ecuaciones al vuelo** sin compilar LaTeX manualmente.
2. **Diagramas versionados en Git** junto al código fuente.
3. **Portabilidad total** que sobrevive a cualquier herramienta cerrada.
`,
    'apps-guide': `# 📚 Guía Definitiva de Markdown en Aplicaciones Populares

> **MarkStudio Pro Knowledge Base** • Análisis exhaustivo de dialectos, particularidades y compatibilidad entre plataformas.

---

## 🧭 Índice de Aplicaciones
1. **GitHub Flavored Markdown (GFM)**: El estándar de facto de la industria.
2. **Discord**: Marcado adaptado para chat con spoilers y subrayado.
3. **WhatsApp**: Marcado ligero para smartphones con caracteres simples.
4. **Telegram**: MarkdownV2 con spoilers y escape estricto de caracteres.
5. **Slack (mrkdwn)**: Dialecto propio con enlaces <url|texto>.
6. **Reddit**: Snoo-flavored con superíndice y spoilers >!spoiler!<.
7. **Obsidian & Logseq**: PKM con enlaces bidireccionales [[Wikilinks]] y transclusiones.
8. **Notion**: Bloques enriquecidos y toggle lists.
9. **Jira / Confluence**: Sintaxis wiki Atlassian con paneles y subrayado +texto+.

---

## 1. 🌐 GitHub Flavored Markdown (GFM)
- **Negrita:** \`**texto**\`
- **Cursiva:** \`*texto*\` o \`_texto_\`
- **Tachado:** \`~~texto~~\`
- **Callouts / Alertas:**
  > [!NOTE]
  > Notas contextuales para el lector.
  > [!TIP]
  > Consejos de productividad y buenas prácticas.
- **Checklists Interactivas:**
  - [x] Tarea completada
  - [ ] Tarea pendiente
- **KaTeX Matemático:** $E=mc^2$ o $$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$
- **Diagramas Mermaid:** Diagramas de flujo, secuencia y arquitectura.

---

## 2. 💬 Discord
- **Spoilers:** \`||texto oculto||\` (haz clic en la vista previa para revelarlo).
- **Subrayado:** \`__texto subrayado__\`
- **Encabezados:** Solo niveles 1 a 3 (\`# H1\`, \`## H2\`, \`### H3\`).
- **Citas Globales:** \`>>> cita multilínea\` que abarca todo el bloque.
- **Timestamps:** \`<t:1774735200:R>\` adaptado dinámicamente a la zona horaria del lector.

---

## 3. 📱 WhatsApp
- **Negrita:** \`*texto*\` *(¡Un solo asterisco!)*
- **Cursiva:** \`_texto_\` *(Guiones bajos)*
- **Tachado:** \`~texto~\` *(Una sola tilde)*
- **Monoespaciado:** \`\`\`código monoespaciado\`\`\`
- **Citas:** \`> texto citado\`
- *Limitaciones:* WhatsApp no soporta encabezados \`#\`, tablas \`|\` ni fórmulas matemáticas.

---

## 4. 📊 Matriz Comparativa Universal

| Función | GFM / Normal | Discord | WhatsApp | Telegram | Slack | Reddit |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Negrita** | \`**texto**\` | \`**texto**\` | \`*texto*\` | \`*texto*\` | \`*texto*\` | \`**texto**\` |
| **Cursiva** | \`*texto*\` | \`*texto*\` | \`_texto_\` | \`_texto_\` | \`_texto_\` | \`*texto*\` |
| **Tachado** | \`~~texto~~\` | \`~~texto~~\` | \`~texto~\` | \`~texto~\` | \`~texto~\` | \`~~texto~~\` |
| **Subrayado** | \`<u>texto</u>\` | \`__texto__\` | ❌ No | \`__texto__\` | ❌ No | ❌ No |
| **Spoiler** | ❌ No | \`||texto||\` | ❌ No | \`||texto||\` | ❌ No | \`>!texto!<\` |
| **Encabezados**| \`# H1 - # H6\` | \`# H1 - ### H3\` | ❌ (*Negrita*) | ❌ (*Negrita*) | ❌ (*Negrita*) | \`# H1 - # H6\` |
| **Tablas** | \`| A | B |\` | ❌ En código | ❌ Solo listas | ❌ Solo listas | ❌ Solo listas | \`| A | B |\` |
| **KaTeX** | Nativo | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **Diagramas** | Mermaid | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
`,
    'universal-guide': `# 🚀 La Guía Definitiva y Demostración Total de Markdown

---

## 📑 Índice Rápido

1. [Jerarquía de Encabezados](#-jerarquía-de-encabezados)
2. [Estilos y Formato de Texto](#-estilos-y-formato-de-texto)
3. [Citas y Bloques de Alerta](#-citas-y-bloques-de-alerta)
4. [Listas Variadas y Tareas](#-listas-variadas-y-tareas)
5. [Tablas con Alineación](#-tablas-con-alineación)
6. [Bloques de Código y Sintaxis](#-bloques-de-código-y-sintaxis)
7. [Fórmulas Matemáticas (LaTeX)](#-fórmulas-matemáticas-latex)
8. [Elementos Interactivos y Avanzados](#-elementos-interactivos-y-avanzados)

---

## 🏷️ Jerarquía de Encabezados

# Encabezado Nivel 1 (\`# H1\`)

## Encabezado Nivel 2 (\`## H2\`)

### Encabezado Nivel 3 (\`### H3\`)

#### Encabezado Nivel 4 (\`#### H4\`)

##### Encabezado Nivel 5 (\`##### H5\`)

###### Encabezado Nivel 6 (\`###### H6\`)

---

## ✒️ Estilos y Formato de Texto

El texto puede enriquecerse de múltiples formas:

* **Texto en negrita** usando \`**texto**\` o \`__texto__\`.
* *Texto en cursiva* usando \`*texto*\` o \`_texto_\`.
* ***Texto en negrita y cursiva*** usando \`***texto***\`.
* ~~Texto tachado~~ usando \`~~texto~~\`.
* Texto con <mark>resaltado especial</mark> usando \`<mark>texto</mark>\`.
* Texto en <u>subrayado</u> usando \`<u>texto</u>\`.
* Fórmulas químicas o anotaciones: H<sub>2</sub>O (\`<sub>2</sub>\`) y E = mc<sup>2</sup> (\`<sup>2</sup>\`).
* Texto en formato de código en línea: \`const saludar = "¡Hola Mundo!";\`.
* Teclas de atajo: Presiona <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> para abrir la paleta de comandos.

---

## 💬 Citas y Bloques de Alerta

### Cita Clásica y Anidada

> «La simplicidad es el requisito previo para la confiabilidad.»
>
> — *Edsger W. Dijkstra*
>
> > **Nota anidada:** Esta es una cita dentro de otra cita.
> >
> > * Soporta listas
> > * Y **formato enriquecido**

### Bloques de Advertencia (*Callouts / Admonitions*)

> [!NOTE]
> Información útil o contexto adicional relevante para el lector.

> [!TIP]
> **Consejo pro:** Puedes usar Markdown dentro de casi cualquier editor moderno (GitHub, Obsidian, Notion, Discord).

> [!IMPORTANT]
> Recuerda dejar una línea en blanco antes y después de listas o bloques de código.

> [!WARNING]
> Ten cuidado al modificar archivos sin respaldo previo.

> [!CAUTION]
> Acción destructiva: Esta operación eliminará la base de datos de producción.

---

## 📋 Listas Variadas y Tareas

### Lista de Tareas Interactiva

- [x] Aprender sintaxis básica de Markdown
* [x] Explorar extensiones de GitHub Flavored Markdown (GFM)
* [ ] Construir un proyecto de documentación completo
* [ ] Dominar la diagramación en bloques

### Lista Mixta y Jerárquica

* 🍎 **Frutas**
  * Cítricos:
    1. Naranja
    2. Limón
    3. Mandarina
  * Frutos rojos:
    * Fresa
    * Arándano
* 🥦 **Verduras**
  * Espinaca
  * Brócoli
  * Zanahoria

---

## 📊 Tablas con Alineación

| ID | Proyecto | Lenguaje | Estado | Progreso | Presupuesto (USD) |
| :--- | :--- | :---: | :---: | :---: | ---: |
| \`#001\` | *Core Engine* | \`Rust\` | 🟢 Listo | \`100%\` | **$12,500.00** |
| \`#002\` | *Web Frontend* | \`TypeScript\` | 🟡 En proceso | \`65%\` | **$8,200.50** |
| \`#003\` | *API Gateway* | \`Go\` | 🔴 Pendiente | \`10%\` | **$4,000.00** |
| \`#004\` | *Data Pipeline* | \`Python\` | 🟢 Listo | \`100%\` | **$15,300.75** |

---

## 💻 Bloques de Código y Sintaxis

### 🐍 Python

\`\`\`python
from dataclasses import dataclass
from typing import List

@dataclass
class Desarrollador:
    nombre: str
    habilidades: List[str]
    activo: bool = True

    def presentarse(self) -> str:
        skills = ", ".join(self.habilidades)
        return f"Hola, soy {self.nombre} y domino: {skills}."

dev = Desarrollador(
    nombre="Ada Lovelace",
    habilidades=["Algoritmos", "Matemáticas", "Markdown"]
)
print(dev.presentarse())
\`\`\`

### ⚡ JSON Estructurado

\`\`\`json
{
  "usuario": "dev_explorer",
  "configuracion": {
    "tema": "dracula-dark",
    "fontSize": 14,
    "ligaduras": true
  },
  "tags": ["markdown", "cheatsheet", "full-power"]
}
\`\`\`

### 🐚 Comando de Terminal (Bash)

\`\`\`bash
# Clonar y entrar al repositorio
git clone https://github.com/ejemplo/markdown-power.git
cd markdown-power && npm install

# Ejecutar tests
npm run test:all -- --verbose
\`\`\`

---

## 🧮 Fórmulas Matemáticas (LaTeX)

Expresión en línea: El teorema de Pitágoras define que $a^2 + b^2 = c^2$.

Ecuación en bloque centrado:

$$f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi)\\,e^{2 \\pi i \\xi x} \\,d\\xi$$

Distribución normal:

$$P(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}$$

---

## 🔗 Enlaces, Imágenes y Referencias

* Enlace tradicional: [Documentación Oficial de CommonMark](https://commonmark.org)
* Enlace con título emergente: [Sitio de Markdown](https://daringfireball.net/projects/markdown/ "Creado por John Gruber")
* Enlace automático: <https://www.w3.org>
* Enlace por referencia: Consulta la [fuente de referencia][ref-web].

![Banner Decorativo](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3 "Código en pantalla")

---

## 🧩 Elementos Interactivos y Avanzados

<details>
<summary>▶ <b>Haz clic aquí para desplegar contenido oculto</b></summary>

### 🎉 ¡Sorpresa!

Este contenido está encapsulado dentro de una etiqueta \`<details>\`. Es perfecto para:
* Respuestas a preguntas frecuentes (FAQ)
* Logs de depuración largos
* Spoilers de contenido

> Puedes usar cualquier formato de Markdown aquí adentro sin problemas.

</details>

<br>

<details>
<summary>▶ <b>Ver Arquitectura del Flujo</b></summary>

\`\`\`
[Cliente Web] ---> [Load Balancer / NGINX]
                          |
             +------------+------------+
             |                         |
       [API Node 1]              [API Node 2]
             |                         |
             +------------+------------+
                          |
                    [PostgreSQL DB]
                          |
                    [Redis Cache]
\`\`\`

</details>

---

## 📌 Notas al Pie

Markdown permite citar orígenes usando notas al pie[^1] numeradas o descriptivas[^nota-larga].

---

[^1]: Creado originalmente en 2004 por John Gruber y Aaron Swartz.
[^nota-larga]: Esta es una nota explicativa más extensa que se coloca automáticamente al final del documento con un enlace de retorno.
[ref-web]: https://kramdown.gettalong.org/ "Referencia enlazada"
`,
    'discord-guide': `Aquí tienes **todo** el Markdown y formato compatible en Discord, organizado por categorías:

---

### 1. Formato de Texto Básico

| Efecto | Sintaxis | Ejemplo |
| :--- | :--- | :--- |
| **Cursiva** | \`*texto*\` o \`_texto_\` | *cursiva* |
| **Negrita** | \`**texto**\` | **negrita** |
| **Negrita + Cursiva** | \`***texto***\` | ***negrita y cursiva*** |
| **Subrayado** | \`__texto__\` | <u>subrayado</u> |
| **Subrayado + Cursiva** | \`__*texto*__\` | <u>*subrayado cursiva*</u> |
| **Subrayado + Negrita** | \`__**texto**__\` | <u>**subrayado negrita**</u> |
| **Subrayado + Negrita + Cursiva** | \`__***texto***__\` | <u>***todo junto***</u> |
| **Tachado** | \`~~texto~~\` | ~~tachado~~ |

---

### 2. Spoilers (Ocultar contenido)

Cubre el texto o imagen con una barra negra que se revela al hacer clic.

* **Sintaxis:** \`||texto secreto||\`
* **Ejemplo:** Al escribir \`El asesino es ||el mayordomo||\`, la palabra quedará oculta.
* *Nota:* También puedes combinarlo con otros formatos: \`||**secreto en negrita**||\`.

---

### 3. Encabezados (Headers)

Discord **solo admite hasta el nivel 3**. Es obligatorio dejar un espacio después de los \`#\`.

* \`# Título Gigante (H1)\`
* \`## Título Mediano (H2)\`
* \`### Título Pequeño (H3)\`

---

### 4. Subtexto / Texto Diminuto

Muestra texto en un tamaño muy pequeño y en tono gris (ideal para aclaraciones, notas al pie o créditos). Requiere un espacio después del guion y la almohadilla:

* **Sintaxis:** \`-# Tu texto aquí\`
* **Resultado:** Se muestra en tamaño miniatura al final del mensaje.

---

### 5. Citas (Quotes)

* **Cita de una sola línea:**
  Usa \`>\` seguido de un espacio.

  \`\`\`text
  > Esta línea es una cita.
  Esta línea ya no lo es.
  \`\`\`

* **Cita multilínea / Bloque completo:**
  Usa \`>>>\` seguido de un espacio. Todo lo que escribas a continuación (incluso con saltos de línea) será parte de la cita.

  \`\`\`text
  >>> Primera línea citada.
  Segunda línea también citada.
  Tercera línea también.
  \`\`\`

---

### 6. Listas

Discord admite listas ordenadas y desordenadas (puedes anidarlas usando tabulador o 2 espacios):

* **Lista con viñetas:**

  \`\`\`text
  - Elemento 1
  - Elemento 2
    - Sub-elemento (con sangría)
  * También funciona con asterisco
  \`\`\`

* **Lista numerada:**

  \`\`\`text
  1. Primer paso
  2. Segundo paso
  3. Tercer paso
  \`\`\`

---

### 7. Bloques de Código y Sintaxis

* **Código en línea:**
  Encierra el texto entre dos comillas simples invertidas:  
  \`\` \`código aquí\` \`\`

* **Bloque de código multilínea:**
  Encierra el código entre tres comillas invertidas:

  \`\`\`\`text
  \`\`\`
  Este es un bloque
  de varias líneas
  \`\`\`
  \`\`\`\`

* **Bloque de código con coloreado de sintaxis:**
  Discord soporta coloreado para lenguajes populares (\`js\`, \`py\`, \`html\`, \`css\`, \`json\`, \`cpp\`, \`diff\`, etc.):

  \`\`\`\`text
  \`\`\`python
  def hola():
      print("Hola Discord")
  \`\`\`
  \`\`\`\`

* **Colores personalizados con \`ansi\`:**
  Discord permite colorear texto dentro de bloques de código usando secuencias ANSI:

  \`\`\`\`text
  \`\`\`ansi
  [31mTexto en rojo[0m
  [32mTexto en verde[0m
  [34mTexto en azul[0m
  [33mTexto en amarillo[0m
  \`\`\`
  \`\`\`\`

---

### 8. Enlaces (Links)

* **Enlace con máscara (Hipervínculo):**
  Puedes ponerle texto a un link en mensajes normales:

  \`\`\`text
  [Haz clic aquí](https://discord.com)
  \`\`\`

* **Evitar la vista previa / Embed:**
  Si quieres enviar un enlace sin que Discord genere el recuadro gigante de vista previa, enciérralo entre \`<\` y \`>\`:

  \`\`\`text
  <https://youtube.com>
  \`\`\`

---

### 9. Marcas de Tiempo Dinámicas (Timestamps)

No es Markdown estándar, pero es una sintaxis nativa de Discord. Convierte una fecha en la hora local de cada usuario que lee el mensaje usando el formato Unix (\`<t:TIMESTAMP:FORMATO>\`):

| Sintaxis | Resultado |
| :--- | :--- |
| \`<t:1700000000:t>\` | Hora corta (ej: \`14:30\`) |
| \`<t:1700000000:T>\` | Hora larga con segundos (ej: \`14:30:00\`) |
| \`<t:1700000000:d>\` | Fecha corta (ej: \`14/11/2023\`) |
| \`<t:1700000000:D>\` | Fecha larga (ej: \`14 de noviembre de 2023\`) |
| \`<t:1700000000:f>\` | Fecha y hora corta |
| \`<t:1700000000:F>\` | Día de la semana, fecha y hora completa |
| \`<t:1700000000:R>\` | **Tiempo relativo** (ej: \`hace 2 horas\` o \`en 15 minutos\`) |

---

### 10. Escapar formato (Anular el Markdown)

Si quieres mostrar un símbolo sin que Discord aplique formato (por ejemplo, mostrar asteriscos literales), coloca una barra invertida \`\\\` justo antes:

* \`\\*Este texto no será cursiva\\*\`
* \`\\# Este texto no será título\`
* \`\\:\\)\` muestra \`:)\` sin convertirlo en emoji.
`,
    'whatsapp-guide': `Aquí tienes todo el formato y "Markdown" que soporta WhatsApp:

1. Formato de Texto Básico
Estilo Sintaxis Ejemplo a escribir Cómo se ve
Negrita *texto* *Hola mundo* Hola mundo
Cursiva *texto* *Hola mundo* Hola mundo
Tachado ~texto~ (solo una virgulilla) ~Hola mundo~ Hola mundo
Monoespaciado \`\`\`texto\`\`\` \`\`\`Hola mundo\`\`\` Hola mundo (tipo máquina de escribir)
⚠️ Diferencia con Discord: En WhatsApp el tachado se hace con una sola virgulilla (~texto~), mientras que en Discord se usan dos (~~texto~~).
2. Estructura y Organización de Texto
WhatsApp incorporó soporte nativo para listas, citas y código:
Listas con viñetas:
Escribe un guion - o un asterisco * seguido de un espacio:
code
Text

- Leche
- Huevos
- Pan
(Al presionar Enter en el móvil, WhatsApp añade automáticamente la viñeta en la siguiente línea).
Listas numeradas:
Escribe el número seguido de un punto y un espacio:
code
Text

1. Abrir la app
2. Iniciar sesión
3. Enviar mensaje
Bloque de cita:
Escribe el símbolo > seguido de un espacio:
code
Text

> Esto es una cita destacada
(Aparecerá con una barra vertical al inicio y sangría).
Código en línea:
Encierra una palabra o frase corta entre dos comillas invertidas simples:
code
Text
\`código aquí\`
1. Combinación de Formatos
Puedes mezclar varios estilos a la vez siempre que cierres los símbolos en el orden inverso al que los abriste:
Negrita + Cursiva: **Hola mundo**
Negrita + Tachado: *~Hola mundo~*
Cursiva + Tachado: *~Hola mundo~*
Negrita + Cursiva + Tachado: **~Hola mundo~**
(El monoespaciado \`\`\` no permite combinarse con otros estilos).
2. Lo que WhatsApp NO soporta (a diferencia de Discord)
❌ Encabezados: #, ## o ### no funcionan (se quedan como texto normal).
❌ Spoilers: ||texto|| no existe en WhatsApp.
❌ Hipervínculos personalizados (enlaces con máscara): No puedes hacer [Haz clic](https://...); solo puedes pegar la URL completa.
❌ Subtexto: -# no funciona.
❌ Tablas ni fórmulas matemáticas.
💡 Atajo sin escribir símbolos:
Si no recuerdas la sintaxis en tu teléfono móvil, simplemente mantén presionado el texto que acabas de escribir para seleccionarlo y pulsa en el menú emergente Formato (o los tres puntos ⋮) para elegir Negrita, Cursiva, Tachado o Monoespaciado.
`,
  };

  // Estado reactivo de la aplicación
  let state = {
    docs: [],
    activeDocId: null,
    settings: {
      fontSize: 15,
      fontFamily: "'Fira Code', monospace",
      wordGoal: 500,
      autoClose: true,
      keySound: false,
      scrollSync: true,
      wordWrap: true
    },
    theme: 'dark',
    platform: 'standard', // 'standard' | 'discord' | 'whatsapp'
    viewMode: 'split', // 'split', 'editor', 'preview'
    sidebarOpen: true,
    isZen: false,
    findState: {
      query: '',
      matches: [],
      currentIndex: -1
    },
    isEditorScrolling: false,
    isPreviewScrolling: false
  };

  // ========================================================
  // 2. AUDIO SYNTHESIS (MECÁNICO CLIC)
  // ========================================================
  let audioCtx = null;
  function playKeyClickSound() {
    if (!state.settings.keySound) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320 + Math.random() * 80, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      // Audio API no disponible
    }
  }

  // ========================================================
  // SISTEMA AVANZADO DE ALMACENAMIENTO (INDEXEDDB + BÓVEDA + VERSIONES)
  // ========================================================
  const MarkStorageDB = (() => {
    const DB_NAME = 'MarkStudioPro_DB';
    const DB_VERSION = 1;
    let dbInstance = null;

    function openDatabase() {
      return new Promise((resolve) => {
        if (dbInstance) return resolve(dbInstance);
        if (!window.indexedDB) {
          console.warn('IndexedDB no soportado en este navegador, usando LocalStorage');
          return resolve(null);
        }

        try {
          const request = window.indexedDB.open(DB_NAME, DB_VERSION);

          request.onupgradeneeded = (e) => {
            const db = e.target.result;
            // Store de Documentos
            if (!db.objectStoreNames.contains('documents')) {
              db.createObjectStore('documents', { keyPath: 'id' });
            }
            // Store de Versiones / Snapshots
            if (!db.objectStoreNames.contains('versions')) {
              const verStore = db.createObjectStore('versions', { keyPath: 'id' });
              verStore.createIndex('docId', 'docId', { unique: false });
              verStore.createIndex('timestamp', 'timestamp', { unique: false });
            }
            // Store de Ajustes
            if (!db.objectStoreNames.contains('settings')) {
              db.createObjectStore('settings', { keyPath: 'key' });
            }
          };

          request.onsuccess = (e) => {
            dbInstance = e.target.result;
            resolve(dbInstance);
          };

          request.onerror = (e) => {
            console.warn('Error abriendo IndexedDB:', e.target.error);
            resolve(null);
          };
        } catch (err) {
          console.warn('Excepción al abrir IndexedDB:', err);
          resolve(null);
        }
      });
    }

    async function saveDoc(doc) {
      if (!doc || !doc.id) return false;
      const db = await openDatabase();
      if (!db) return false;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction('documents', 'readwrite');
          const store = tx.objectStore('documents');
          store.put(doc);
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    }

    async function getAllDocs() {
      const db = await openDatabase();
      if (!db) return null;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction('documents', 'readonly');
          const store = tx.objectStore('documents');
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }

    async function deleteDoc(id) {
      const db = await openDatabase();
      if (!db) return false;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction(['documents', 'versions'], 'readwrite');
          tx.objectStore('documents').delete(id);
          
          const verStore = tx.objectStore('versions');
          const index = verStore.index('docId');
          const req = index.getAllKeys(id);
          req.onsuccess = () => {
            (req.result || []).forEach(k => verStore.delete(k));
          };
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    }

    async function createSnapshot(docId, title, content, tag = 'Autoguardado') {
      const db = await openDatabase();
      if (!db) return null;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction('versions', 'readwrite');
          const store = tx.objectStore('versions');
          const snapshot = {
            id: `ver_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            docId,
            title,
            content,
            timestamp: new Date().toISOString(),
            length: content.length,
            tag
          };
          store.put(snapshot);

          // Limitar a máximo 30 versiones por documento
          const index = store.index('docId');
          const req = index.getAll(docId);
          req.onsuccess = () => {
            const list = req.result || [];
            if (list.length > 30) {
              list.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
              const excess = list.length - 30;
              for (let i = 0; i < excess; i++) {
                store.delete(list[i].id);
              }
            }
          };

          tx.oncomplete = () => resolve(snapshot);
          tx.onerror = () => resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }

    async function getVersions(docId) {
      const db = await openDatabase();
      if (!db) return [];
      return new Promise((resolve) => {
        try {
          const tx = db.transaction('versions', 'readonly');
          const store = tx.objectStore('versions');
          const index = store.index('docId');
          const req = index.getAll(docId);
          req.onsuccess = () => {
            const list = req.result || [];
            list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            resolve(list);
          };
          req.onerror = () => resolve([]);
        } catch (e) {
          resolve([]);
        }
      });
    }

    async function getAllVersions() {
      const db = await openDatabase();
      if (!db) return [];
      return new Promise((resolve) => {
        try {
          const tx = db.transaction('versions', 'readonly');
          const store = tx.objectStore('versions');
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        } catch (e) {
          resolve([]);
        }
      });
    }

    async function exportVault() {
      const docs = (await getAllDocs()) || state.docs || [];
      const versions = await getAllVersions();
      return {
        app: 'MarkStudio Pro',
        version: '2.5.0',
        exportedAt: new Date().toISOString(),
        settings: state.settings,
        theme: state.theme,
        platform: state.platform,
        documents: docs,
        versions: versions
      };
    }

    async function importVault(vaultData) {
      if (!vaultData || !Array.isArray(vaultData.documents)) {
        throw new Error('El archivo no contiene un listado válido de documentos.');
      }

      const db = await openDatabase();
      if (db) {
        await new Promise((resolve, reject) => {
          const tx = db.transaction(['documents', 'versions'], 'readwrite');
          const docStore = tx.objectStore('documents');
          const verStore = tx.objectStore('versions');

          vaultData.documents.forEach(doc => docStore.put(doc));
          if (Array.isArray(vaultData.versions)) {
            vaultData.versions.forEach(ver => verStore.put(ver));
          }

          tx.oncomplete = () => resolve();
          tx.onerror = (e) => reject(e);
        });
      }

      state.docs = vaultData.documents;
      if (state.docs.length > 0) {
        state.activeDocId = state.docs[0].id;
      }
      if (vaultData.settings) {
        state.settings = { ...state.settings, ...vaultData.settings };
      }
      if (vaultData.theme) {
        state.theme = vaultData.theme;
      }
      if (vaultData.platform) {
        state.platform = vaultData.platform;
      }

      saveDocsToStorage();
      saveSettingsToStorage();
      return {
        docsCount: vaultData.documents.length,
        versionsCount: (vaultData.versions || []).length
      };
    }

    async function getStorageMetrics() {
      const docs = (await getAllDocs()) || state.docs || [];
      const versions = await getAllVersions();
      const totalChars = docs.reduce((acc, d) => acc + (d.content ? d.content.length : 0), 0);
      const estKB = Math.round((totalChars * 2) / 1024 * 10) / 10;

      return {
        engine: dbInstance ? 'IndexedDB Activo (v1)' : 'LocalStorage Espejo',
        docsCount: docs.length,
        estKB: estKB < 1 ? '< 1 KB' : `${estKB} KB`,
        versionsCount: versions.length
      };
    }

    return {
      init: openDatabase,
      saveDoc,
      getAllDocs,
      deleteDoc,
      createSnapshot,
      getVersions,
      getAllVersions,
      exportVault,
      importVault,
      getStorageMetrics
    };
  })();

  // ========================================================
  // 3. CACHÉ & INICIALIZACIÓN DE DOCUMENTOS
  // ========================================================
  let lastAutoSnapshotDocId = null;
  let lastAutoSnapshotLength = 0;
  let lastAutoSnapshotTime = 0;

  function loadPersistedState() {
    // 1. Cargar Documentos
    try {
      const savedDocs = localStorage.getItem(STORAGE_DOCS_KEY);
      if (savedDocs) {
        state.docs = JSON.parse(savedDocs);
      }
    } catch (e) {
      console.warn('Error cargando documentos locales:', e);
    }

    if (!state.docs || !state.docs.length) {
      const initialDoc = {
        id: 'doc_' + Date.now(),
        title: 'Bienvenido.md',
        content: defaultTemplates.readme,
        updatedAt: new Date().toISOString()
      };
      state.docs = [initialDoc];
      state.activeDocId = initialDoc.id;
    } else {
      const savedActiveId = localStorage.getItem(STORAGE_ACTIVE_ID_KEY);
      const exists = state.docs.some(d => d.id === savedActiveId);
      state.activeDocId = exists ? savedActiveId : state.docs[0].id;
    }

    // 2. Cargar Ajustes
    try {
      const savedSettings = localStorage.getItem(STORAGE_SETTINGS_KEY);
      if (savedSettings) {
        state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
      }
    } catch (e) {}

    // 3. Cargar Tema
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (savedTheme) {
      state.theme = savedTheme;
    }

    // 4. Cargar Plataforma (Normal, Discord, WhatsApp)
    const savedPlatform = localStorage.getItem(STORAGE_PLATFORM_KEY);
    if (savedPlatform) {
      state.platform = savedPlatform;
    }
  }

  function saveDocsToStorage() {
    try {
      localStorage.setItem(STORAGE_DOCS_KEY, JSON.stringify(state.docs));
      localStorage.setItem(STORAGE_ACTIVE_ID_KEY, state.activeDocId);
    } catch (e) {
      showToast('Error al guardar en almacenamiento local', 'danger');
    }

    // Persistencia asíncrona avanzada en IndexedDB
    const activeDoc = getActiveDoc();
    if (activeDoc) {
      MarkStorageDB.saveDoc(activeDoc);

      // Snapshot inteligente por volumen de edición o tiempo
      const now = Date.now();
      const currentLen = activeDoc.content ? activeDoc.content.length : 0;
      const lenDiff = Math.abs(currentLen - lastAutoSnapshotLength);
      const timeDiff = now - lastAutoSnapshotTime;

      if (lastAutoSnapshotDocId !== activeDoc.id || (lenDiff >= 30 && timeDiff > 6000) || timeDiff > 45000) {
        lastAutoSnapshotDocId = activeDoc.id;
        lastAutoSnapshotLength = currentLen;
        lastAutoSnapshotTime = now;
        MarkStorageDB.createSnapshot(activeDoc.id, activeDoc.title, activeDoc.content, 'Autoguardado');
      }
    }
  }

  function saveSettingsToStorage() {
    try {
      localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(state.settings));
    } catch (e) {}
  }

  // ========================================================
  // 4. CONFIGURACIÓN DEL PARSER MARKDOWN & COMPONENTES
  // ========================================================
  // Inicialización de Mermaid
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: state.theme === 'light' ? 'default' : 'dark',
      securityLevel: 'loose',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    });
  }

  // Configuración de Marked con Highlight.js
  if (window.marked) {
    marked.setOptions({
      gfm: true,
      breaks: true,
      headerIds: true,
      mangle: false,
      highlight: function(code, lang) {
        if (lang === 'mermaid') {
          return code;
        }
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
          } catch (e) {}
        }
        return hljs.highlightAuto(code).value;
      }
    });
  }

  // Elementos DOM
  const editor = document.getElementById('editor-textarea');
  const preview = document.getElementById('preview-content');
  const previewContainer = document.getElementById('preview-container');
  const lineNumbers = document.getElementById('line-numbers');
  const docTitleInput = document.getElementById('doc-title-input');
  const saveIndicator = document.getElementById('save-indicator');
  const docsList = document.getElementById('docs-list');
  const docsCount = document.getElementById('docs-count');
  const tocList = document.getElementById('toc-list');
  const resizer = document.getElementById('resizer');
  const workspaceContainer = document.getElementById('workspace-container');
  const sidebar = document.getElementById('sidebar');

  // Stats
  const statWords = document.getElementById('stat-words');
  const statChars = document.getElementById('stat-chars');
  const statLines = document.getElementById('stat-lines');
  const statReadTime = document.getElementById('stat-read-time');
  const goalCurrent = document.getElementById('goal-current');
  const goalTarget = document.getElementById('goal-target');
  const goalProgressFill = document.getElementById('goal-progress-fill');
  const renderTimeEl = document.getElementById('render-time');
  const cursorPosEl = document.getElementById('editor-cursor-pos');

  // Modales
  const paletteModal = document.getElementById('palette-modal');
  const templatesModal = document.getElementById('templates-modal');
  const settingsModal = document.getElementById('settings-modal');
  const cheatsheetModal = document.getElementById('cheatsheet-modal');
  const versionsModal = document.getElementById('versions-modal');
  const storageModal = document.getElementById('storage-modal');

  // Buscador
  const findReplaceBar = document.getElementById('find-replace-bar');
  const findInput = document.getElementById('find-input');
  const replaceInput = document.getElementById('replace-input');
  const findCount = document.getElementById('find-count');

  // ========================================================
  // 5. RENDERIZADOR AVANZADO (KaTeX, Mermaid, Callouts, Tasks)
  // ========================================================
  let renderDebounceTimer = null;
  let lastGoalCelebrated = false;

  function renderDocument(immediate = false) {
    clearTimeout(renderDebounceTimer);
    if (immediate) {
      executeRender();
    } else {
      indicateSaving(true);
      renderDebounceTimer = setTimeout(executeRender, 50);
    }
  }

  function indicateSaving(isSaving) {
    if (isSaving) {
      saveIndicator.classList.add('saving');
      saveIndicator.innerHTML = '<span class="dot"></span> Guardando...';
    } else {
      saveIndicator.classList.remove('saving');
      saveIndicator.innerHTML = '<span class="dot"></span> Guardado';
    }
  }

  function executeRender() {
    const startTime = performance.now();
    const rawMarkdown = editor.value;
    const activeDoc = getActiveDoc();
    if (activeDoc) {
      activeDoc.content = rawMarkdown;
      activeDoc.updatedAt = new Date().toISOString();
      saveDocsToStorage();
    }

    // Si estamos en modo WhatsApp, renderizar en el simulador de chat de WhatsApp
    if (state.platform === 'whatsapp') {
      renderWhatsAppPreview(rawMarkdown);
      const endTime = performance.now();
      renderTimeEl.textContent = `WhatsApp: ${Math.round(endTime - startTime)}ms`;
      return;
    }

    // Si estamos en modo Discord, renderizar en el simulador de canal de Discord
    if (state.platform === 'discord') {
      renderDiscordPreview(rawMarkdown);
      const endTime = performance.now();
      renderTimeEl.textContent = `Discord: ${Math.round(endTime - startTime)}ms`;
      return;
    }

    previewContainer.className = 'preview-scroll-container';

    // 1. Preprocesar KaTeX Matemáticas para protegerlas de Marked
    const mathTokens = [];
    let processed = rawMarkdown;

    // Display math: $$ formula $$
    processed = processed.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
      const id = `___MATH_BLOCK_${mathTokens.length}___`;
      mathTokens.push({ type: 'block', formula: formula.trim(), id });
      return id;
    });

    // Inline math: $ formula $
    processed = processed.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
      const id = `___MATH_INLINE_${mathTokens.length}___`;
      mathTokens.push({ type: 'inline', formula: formula.trim(), id });
      return id;
    });

    // 1.5 Preprocesar Notas al Pie [^1] y [^1]: texto
    const footnotes = new Map();
    processed = processed.replace(/^\[\^([^\]]+)\]:\s*([\s\S]*?)(?=\n\[\^|\n\n|$)/gm, (match, id, content) => {
      footnotes.set(id.trim(), content.trim());
      return '';
    });

    processed = processed.replace(/\[\^([^\]]+)\]/g, (match, id) => {
      const cleanId = id.trim();
      return `<sup><a href="#fn-${cleanId}" id="fnref-${cleanId}" class="footnote-ref">[${cleanId}]</a></sup>`;
    });

    // 2. Parsear Markdown básico con Marked
    let html = marked.parse(processed);

    // 3. Restaurar KaTeX Renderizado
    mathTokens.forEach(token => {
      try {
        if (window.katex) {
          const rendered = katex.renderToString(token.formula, {
            displayMode: token.type === 'block',
            throwOnError: false
          });
          html = html.replace(token.id, rendered);
        } else {
          html = html.replace(token.id, `<code>${token.formula}</code>`);
        }
      } catch (err) {
        html = html.replace(token.id, `<span class="katex-error">${token.formula}</span>`);
      }
    });

    // 4. Transformar Callouts / Alertas de GitHub
    // Formato: <blockquote><p>[!NOTE]<br> o <blockquote><p>[!TIP]...
    html = html.replace(/<blockquote>\s*<p>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*<br>|\s*\n)?([\s\S]*?)<\/blockquote>/gi, (match, type, content) => {
      const calloutType = type.toLowerCase();
      const titles = {
        note: 'Nota',
        tip: 'Consejo',
        important: 'Importante',
        warning: 'Advertencia',
        caution: 'Precaución'
      };
      const title = titles[calloutType] || type;
      return `
        <div class="markdown-callout ${calloutType}">
          <div class="markdown-callout-header">
            <span>${title}</span>
          </div>
          <div class="markdown-callout-content"><p>${content.trim()}</p></div>
        </div>
      `;
    });

    // 4.5 Inyectar sección de notas al pie si existen
    if (footnotes.size > 0) {
      let fnHtml = '<div class="markdown-footnotes"><hr /><ol>';
      footnotes.forEach((content, id) => {
        const parsedContent = (window.marked && marked.parseInline) ? marked.parseInline(content) : content;
        fnHtml += `<li id="fn-${id}">${parsedContent} <a href="#fnref-${id}" class="footnote-back" title="Regresar al texto">↩</a></li>`;
      });
      fnHtml += '</ol></div>';
      html += fnHtml;
    }

    // 5. Inyectar envoltorios estilizados a bloques de código con botón "Copiar"
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    const preElements = tempContainer.querySelectorAll('pre');
    preElements.forEach((pre) => {
      const codeEl = pre.querySelector('code');
      if (!codeEl) return;

      const langClass = Array.from(codeEl.classList).find(c => c.startsWith('language-'));
      const lang = langClass ? langClass.replace('language-', '') : 'código';

      // Si es Mermaid, reemplazar con un contenedor Mermaid interactivo
      if (lang === 'mermaid') {
        const mermaidWrapper = document.createElement('div');
        mermaidWrapper.className = 'mermaid-wrapper';
        const mermaidDiv = document.createElement('div');
        mermaidDiv.className = 'mermaid';
        mermaidDiv.textContent = codeEl.textContent;
        mermaidWrapper.appendChild(mermaidDiv);
        pre.replaceWith(mermaidWrapper);
        return;
      }

      // Envolver bloque de código ordinario
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';

      const header = document.createElement('div');
      header.className = 'code-block-header';
      header.innerHTML = `
        <span>${lang}</span>
        <button class="code-copy-btn" title="Copiar código">
          <i data-lucide="copy"></i> Copiar
        </button>
      `;

      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);

      const copyBtn = header.querySelector('.code-copy-btn');
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.textContent);
        copyBtn.innerHTML = '<i data-lucide="check"></i> Copiado';
        lucide.createIcons({ root: copyBtn });
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="copy"></i> Copiar';
          lucide.createIcons({ root: copyBtn });
        }, 2000);
      });
    });

    // 6. Hacer que los checkboxes de lista de tareas sean interactivos
    const taskCheckboxes = tempContainer.querySelectorAll('input[type="checkbox"]');
    taskCheckboxes.forEach((checkbox, index) => {
      checkbox.dataset.taskIndex = index;
      checkbox.parentElement.classList.add('task-list-item');
    });

    // Inyectar HTML procesado
    preview.innerHTML = tempContainer.innerHTML;

    // 7. Renderizar Diagramas Mermaid de forma resiliente con manejo de sintaxis en edición
    if (window.mermaid) {
      try {
        const mermaidElements = preview.querySelectorAll('.mermaid');
        mermaidElements.forEach(async (el) => {
          const rawCode = el.textContent.trim();
          try {
            const isValid = await mermaid.parse(rawCode);
            if (isValid) {
              await mermaid.run({ nodes: [el] });
            }
          } catch (mErr) {
            const parent = el.closest('.mermaid-wrapper');
            if (parent) {
              parent.innerHTML = `
                <div class="mermaid-syntax-warning">
                  <i data-lucide="edit-3"></i>
                  <span>Diagrama en edición: esperando sintaxis válida...</span>
                </div>
              `;
              lucide.createIcons({ root: parent });
            }
          }
        });
      } catch (err) {
        // Protección contra excepciones globales de Mermaid
      }
    }

    // 8. Re-inicializar iconos Lucide en el renderizado
    lucide.createIcons({ root: preview });

    // Actualizar métricas
    updateStats(rawMarkdown);
    updateLineNumbers();
    updateTableOfContents();
    indicateSaving(false);

    const endTime = performance.now();
    renderTimeEl.textContent = `Renderizado: ${Math.round(endTime - startTime)}ms`;
  }

  // ========================================================
  // RENDERIZADOR SIMULADOR DE CHAT WHATSAPP
  // ========================================================
  function renderWhatsAppPreview(rawText) {
    previewContainer.className = 'preview-scroll-container platform-whatsapp';

    // 1. Monospace en bloque ```texto``` de WhatsApp
    const codeBlocks = [];
    let text = rawText.replace(/```([\s\S]*?)```/g, (m, code) => {
      const id = `___WA_BLOCK_${codeBlocks.length}___`;
      codeBlocks.push(escapeHtml(code.trim()));
      return id;
    });

    // 2. Código en línea simple `código`
    const inlineCodes = [];
    text = text.replace(/`([^`\n]+?)`/g, (m, code) => {
      const id = `___WA_INLINE_${inlineCodes.length}___`;
      inlineCodes.push(escapeHtml(code.trim()));
      return id;
    });

    let escaped = escapeHtml(text);

    // 3. URLs directas -> Links clickables
    escaped = escaped.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener" class="wa-link">$1</a>');

    // 4. Citas de WhatsApp: > texto o &gt; texto
    escaped = escaped.replace(/(?:^(?:&gt;|>)\s?.*(?:\r?\n|$))+/gm, (block) => {
      const lines = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => l.replace(/^(?:&gt;|>)\s?/, ''));
      return `<blockquote class="wa-quote">${lines.join('<br>')}</blockquote>`;
    });

    // 5. Listas nativas de WhatsApp (viñetas con guión o asterisco, y numeradas)
    escaped = escaped.replace(/(?:^[ \t]*[-*]\s+.+(?:\r?\n|$))+/gm, (block) => {
      const items = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => {
        const itemText = l.replace(/^[ \t]*[-*]\s+/, '');
        return `<li>${itemText}</li>`;
      });
      return `<ul class="wa-list">${items.join('')}</ul>`;
    });

    escaped = escaped.replace(/(?:^[ \t]*\d+\.\s+.+(?:\r?\n|$))+/gm, (block) => {
      const items = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => {
        const itemText = l.replace(/^[ \t]*\d+\.\s+/, '');
        return `<li>${itemText}</li>`;
      });
      return `<ol class="wa-list">${items.join('')}</ol>`;
    });

    // 6. Formatos básicos y combinaciones (*negrita*, _cursiva_, ~tachado~)
    // Múltiples pasadas para permitir anidación como *_negrita cursiva_* o *~negrita tachado~*
    for (let i = 0; i < 3; i++) {
      escaped = escaped.replace(/(^|[\s(.,;:¡!¿?>])\*([^\*\n]+?)\*($|[\s).,:;¡!¿?<])/g, '$1<strong>$2</strong>$3');
      escaped = escaped.replace(/(^|[\s(.,;:¡!¿?>])\_([^\_\n]+?)\_($|[\s).,:;¡!¿?<])/g, '$1<em>$2</em>$3');
      escaped = escaped.replace(/(^|[\s(.,;:¡!¿?>])\~([^\~\n]+?)\~($|[\s).,:;¡!¿?<])/g, '$1<del>$2</del>$3');
    }

    // 7. Saltos de línea
    escaped = escaped.replace(/\n/g, '<br>');

    // 8. Restaurar código en línea y bloques monospace
    inlineCodes.forEach((ic, idx) => {
      escaped = escaped.replace(`___WA_INLINE_${idx}___`, `<span class="wa-inline-code">${ic}</span>`);
    });
    codeBlocks.forEach((cb, idx) => {
      escaped = escaped.replace(`___WA_BLOCK_${idx}___`, `<span class="wa-monospace">${cb}</span>`);
    });

    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'p. m.' : 'a. m.';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeFormatted = `${hours}:${minutes} ${ampm}`;

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dateFormatted = `${day}/${month}/${year}`;

    preview.innerHTML = `
      <div class="whatsapp-chat-wrapper">
        <div class="whatsapp-chat-header">
          <div class="whatsapp-header-left">
            <div class="whatsapp-header-avatar">
              <img src="whatsapp-avatar.svg" alt="Avatar" />
            </div>
            <div class="whatsapp-header-info">
              <div class="whatsapp-header-name-row">
                <span class="whatsapp-header-name">Tú</span>
                <span class="whatsapp-header-tag">(Notas y Enlaces)</span>
              </div>
              <span class="whatsapp-header-status">Envía mensajes a este mismo número.</span>
            </div>
          </div>
          <div class="whatsapp-header-actions">
            <button class="whatsapp-header-action-btn" title="Archivos multimedia y enlaces">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </button>
            <button class="whatsapp-header-action-btn" title="Buscar">
              <i data-lucide="search"></i>
            </button>
            <button class="whatsapp-header-action-btn" title="Más opciones">
              <i data-lucide="more-vertical"></i>
            </button>
          </div>
        </div>

        <div class="whatsapp-chat-body">
          <div class="whatsapp-date-pill">${dateFormatted}</div>
          
          <div class="whatsapp-bubble-row">
            <button class="whatsapp-reaction-btn" title="Reaccionar al mensaje">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </button>
            <div class="whatsapp-bubble">
              <div class="whatsapp-bubble-content">${escaped || '<em>Escribe un mensaje para WhatsApp... (*negrita*, _cursiva_, ~tachado~, ```monospace```, > cita)</em>'}</div>
              <div class="whatsapp-bubble-footer">
                <span class="whatsapp-time">${timeFormatted}</span>
                <span class="whatsapp-check">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="1.5 12.5 6 17 14.5 7.5"/>
                    <polyline points="9.5 12.5 13 16 20.5 7.5"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="whatsapp-chat-footer">
          <div class="whatsapp-input-pill">
            <button class="whatsapp-input-icon" title="Emojis">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </button>
            <div class="whatsapp-input-placeholder">
              <span class="whatsapp-cursor"></span>
              <span class="whatsapp-placeholder-text">Mensaje</span>
            </div>
            <button class="whatsapp-input-icon" title="Adjuntar">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l7.88-7.87"/>
              </svg>
            </button>
            <button class="whatsapp-input-icon" title="Cámara">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                <circle cx="12" cy="13" r="3"/>
              </svg>
            </button>
          </div>
          <button class="whatsapp-mic-btn" title="Grabar mensaje de voz">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    lucide.createIcons({ root: preview });
    updateStats(rawText);
    updateLineNumbers();
    indicateSaving(false);
  }

  
  function formatDiscordTimestamp(unixSec, style) {
    style = style || 'f';
    const date = new Date(parseInt(unixSec, 10) * 1000);
    if (isNaN(date.getTime())) return `<span class="discord-timestamp-badge">&lt;t:${unixSec}&gt;</span>`;

    const now = new Date();
    const diffSec = Math.round((date.getTime() - now.getTime()) / 1000);

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    const timeStr = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const longTimeStr = `${timeStr}:${String(date.getSeconds()).padStart(2, '0')}`;
    const shortDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const longDate = `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    const fullDate = `${days[date.getDay()]}, ${longDate} ${timeStr}`;

    let label = '';
    switch (style) {
      case 't': label = timeStr; break;
      case 'T': label = longTimeStr; break;
      case 'd': label = shortDate; break;
      case 'D': label = longDate; break;
      case 'f': label = `${longDate} ${timeStr}`; break;
      case 'F': label = fullDate; break;
      case 'R': {
        const absDiff = Math.abs(diffSec);
        let rel = '';
        if (absDiff < 60) rel = `${absDiff} segundos`;
        else if (absDiff < 3600) rel = `${Math.floor(absDiff / 60)} minutos`;
        else if (absDiff < 86400) rel = `${Math.floor(absDiff / 3600)} horas`;
        else rel = `${Math.floor(absDiff / 86400)} días`;
        label = diffSec < 0 ? `hace ${rel}` : `en ${rel}`;
        break;
      }
      default: label = `${longDate} ${timeStr}`; break;
    }

    return `<span class="discord-timestamp-badge" title="${fullDate}">${label}</span>`;
  }

  
  function parseAnsiToHtml(ansiText) {
    let output = ansiText
      .replace(/\x1b\[30m| \x1b\[30m| \u001b\[30m| \x1b\[30m| \x1b\[30m/g, '<span class="ansi-30">')
      .replace(/\x1b\[31m| \u001b\[31m/g, '<span class="ansi-31">')
      .replace(/\x1b\[32m| \u001b\[32m/g, '<span class="ansi-32">')
      .replace(/\x1b\[33m| \u001b\[33m/g, '<span class="ansi-33">')
      .replace(/\x1b\[34m| \u001b\[34m/g, '<span class="ansi-34">')
      .replace(/\x1b\[35m| \u001b\[35m/g, '<span class="ansi-35">')
      .replace(/\x1b\[36m| \u001b\[36m/g, '<span class="ansi-36">')
      .replace(/\x1b\[37m| \u001b\[37m/g, '<span class="ansi-37">')
      .replace(/\x1b\[1m| \u001b\[1m/g, '<span class="ansi-bold">')
      .replace(/\x1b\[4m| \u001b\[4m/g, '<span class="ansi-underline">')
      .replace(/\x1b\[0m| \u001b\[0m/g, '</span>');

    // Also support visual representation shown in guides like [31m...[0m
    output = output
      .replace(/\[30m/g, '<span class="ansi-30">')
      .replace(/\[31m/g, '<span class="ansi-31">')
      .replace(/\[32m/g, '<span class="ansi-32">')
      .replace(/\[33m/g, '<span class="ansi-33">')
      .replace(/\[34m/g, '<span class="ansi-34">')
      .replace(/\[35m/g, '<span class="ansi-35">')
      .replace(/\[36m/g, '<span class="ansi-36">')
      .replace(/\[37m/g, '<span class="ansi-37">')
      .replace(/\[1m/g, '<span class="ansi-bold">')
      .replace(/\[4m/g, '<span class="ansi-underline">')
      .replace(/\[0m/g, '</span>');

    return output;
  }


  function renderDiscordPreview(rawText) {
    previewContainer.className = 'preview-scroll-container platform-discord';

    // 1. Bloques de código ```lang ... ```
    const codeBlocks = [];
    let text = rawText.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g, (m, lang, code) => {
      const id = `___DISCORD_BLOCK_${codeBlocks.length}___`;
      let highlighted = '';
      if (lang && lang.toLowerCase() === 'ansi') {
        highlighted = parseAnsiToHtml(escapeHtml(code.trim()));
      } else if (lang && hljs.getLanguage(lang)) {
        highlighted = hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
      } else {
        highlighted = hljs.highlightAuto(code).value;
      }
      codeBlocks.push(`<pre><code class="hljs">${highlighted}</code></pre>`);
      return id;
    });

    // 2. Código inline `code`
    const inlineCodes = [];
    text = text.replace(/`([^`\n]+?)`/g, (m, c) => {
      const id = `___DISCORD_INLINE_${inlineCodes.length}___`;
      inlineCodes.push(`<code>${escapeHtml(c)}</code>`);
      return id;
    });

    let escaped = escapeHtml(text);

    // 3. Proteger escapes con barra invertida (ej: \*, \#, \~)
    const escapedChars = [];
    escaped = escaped.replace(/\\([*_~#\[\]()|<>:-])/g, (m, char) => {
      const id = `___DISCORD_ESC_${escapedChars.length}___`;
      escapedChars.push(char);
      return id;
    });

    // 4. Subtexto Discord: -# texto
    escaped = escaped.replace(/^-#\s+(.+)$/gm, '<div class="discord-subtext">$1</div>');

    // 5. Marcas de Tiempo Dinámicas: <t:1700000000:R> o &lt;t:1700000000:R&gt;
    escaped = escaped.replace(/(?:<|&lt;)t:(\d+)(?::([a-zA-Z]))?(?:>|&gt;)/g, (m, unixSec, style) => {
      return formatDiscordTimestamp(unixSec, style);
    });

    // 6. Hipervínculos personalizados [texto](url) y URLs con embed suprimido <url>
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    escaped = escaped.replace(/(?:<|&lt;)(https?:\/\/[^\s>&]+)(?:>|&gt;)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    escaped = escaped.replace(/(^|[\s(])(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

    // 7. Citas Discord: >>> cita multilínea o > cita simple
    escaped = escaped.replace(/^(?:&gt;|>){3}\s*([\s\S]*)$/gm, '<blockquote class="discord-quote">$1</blockquote>');
    escaped = escaped.replace(/(?:^(?:&gt;|>)\s?.*(?:\r?\n|$))+/gm, (block) => {
      const lines = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => l.replace(/^(?:&gt;|>)\s?/, ''));
      return `<blockquote class="discord-quote">${lines.join('<br>')}</blockquote>`;
    });

    // 8. Listas Discord (viñetas con sangría y ordenadas)
    escaped = escaped.replace(/(?:^[ \t]*[-*]\s+.+(?:\r?\n|$))+/gm, (block) => {
      const items = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => {
        const itemText = l.replace(/^[ \t]*[-*]\s+/, '');
        return `<li>${itemText}</li>`;
      });
      return `<ul class="discord-list">${items.join('')}</ul>`;
    });

    escaped = escaped.replace(/(?:^[ \t]*\d+\.\s+.+(?:\r?\n|$))+/gm, (block) => {
      const items = block.split(/\r?\n/).filter(l => l.trim().length > 0).map(l => {
        const itemText = l.replace(/^[ \t]*\d+\.\s+/, '');
        return `<li>${itemText}</li>`;
      });
      return `<ol class="discord-list">${items.join('')}</ol>`;
    });

    // 9. Encabezados Discord (# H1, ## H2, ### H3)
    escaped = escaped.replace(/^### (.*)$/gm, '<h3 style="font-size:1.05rem;margin:6px 0;color:#f2f3f5;font-weight:700;">$1</h3>');
    escaped = escaped.replace(/^## (.*)$/gm, '<h2 style="font-size:1.25rem;margin:8px 0;color:#f2f3f5;font-weight:700;">$1</h2>');
    escaped = escaped.replace(/^# (.*)$/gm, '<h1 style="font-size:1.45rem;margin:10px 0;color:#f2f3f5;font-weight:700;">$1</h1>');

    // 10. Spoilers ||secreto||
    escaped = escaped.replace(/\|\|([\s\S]+?)\|\|/g, '<span class="discord-spoiler" title="Clic para revelar spoiler">$1</span>');

    // 11. Subrayado anidado con Negrita y Cursiva
    escaped = escaped.replace(/__\*\*\*([^\*\n]+?)\*\*\*__/g, '<u><strong><em>$1</em></strong></u>');
    escaped = escaped.replace(/__\*\*([^\*\n]+?)\*\*__/g, '<u><strong>$1</strong></u>');
    escaped = escaped.replace(/__\*([^\*\n]+?)\*__/g, '<u><em>$1</em></u>');
    escaped = escaped.replace(/__([^_\n]+?)__/g, '<u>$1</u>');

    // 12. Negrita y Cursiva Discord
    escaped = escaped.replace(/\*\*\*([^\*\n]+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    escaped = escaped.replace(/\*\*([^\*\n]+?)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/\*([^\*\n]+?)\*/g, '<em>$1</em>');
    escaped = escaped.replace(/(^|[\s(.,;:¡!¿?>])\_([^\_\n]+?)\_($|[\s).,:;¡!¿?<])/g, '$1<em>$2</em>$3');

    // 13. Tachado ~~texto~~
    escaped = escaped.replace(/~~([^~\n]+?)~~/g, '<del>$1</del>');

    // 14. Menciones @everyone, @here, @usuario y canales #general
    escaped = escaped.replace(/@everyone/g, '<span class="discord-mention">@everyone</span>');
    escaped = escaped.replace(/@here/g, '<span class="discord-mention">@here</span>');
    escaped = escaped.replace(/(^|[\s(.,;:¡!¿?])@([a-zA-Z0-9_\-]+)/g, '$1<span class="discord-mention">@$2</span>');
    escaped = escaped.replace(/(^|[\s(.,;:¡!¿?])#([a-zA-Z0-9_\-]+)/g, '$1<span class="discord-channel-mention"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>$2</span>');

    // 15. Saltos de línea
    escaped = escaped.replace(/\n/g, '<br>');

    // 16. Restaurar inline code y bloques de código
    inlineCodes.forEach((ic, idx) => {
      escaped = escaped.replace(`___DISCORD_INLINE_${idx}___`, ic);
    });
    codeBlocks.forEach((cb, idx) => {
      escaped = escaped.replace(`___DISCORD_BLOCK_${idx}___`, cb);
    });

    // 17. Restaurar caracteres escapados
    escapedChars.forEach((ec, idx) => {
      escaped = escaped.replace(`___DISCORD_ESC_${idx}___`, ec);
    });

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const now = new Date();
    const dateStr = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    preview.innerHTML = `
      <div class="discord-wrapper">
        <div class="discord-header">
          <div class="discord-header-left">
            <span class="discord-hash-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="9" x2="20" y2="9"/>
                <line x1="4" y1="15" x2="20" y2="15"/>
                <line x1="10" y1="3" x2="8" y2="21"/>
                <line x1="16" y1="3" x2="14" y2="21"/>
              </svg>
            </span>
            <span class="discord-channel-title">general</span>
            <div class="discord-header-divider"></div>
            <span class="discord-channel-topic">Canal oficial de texto • Previsualización en tiempo real con sintaxis de Discord</span>
          </div>

          <div class="discord-header-actions">
            <button class="discord-header-btn" title="Hilos">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
              </svg>
            </button>
            <button class="discord-header-btn" title="Notificaciones">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            <button class="discord-header-btn" title="Mensajes fijados">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="17" x2="12" y2="22"/>
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>
              </svg>
            </button>
            <button class="discord-header-btn" title="Lista de miembros">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </button>
            <div class="discord-search-box">
              <span>Buscar</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="discord-body-area">
          <div class="discord-divider">
            <span class="discord-divider-pill">${dateStr}</span>
          </div>

          <div class="discord-msg-item">
            <div class="discord-hover-bar">
              <button class="discord-hover-btn" title="Añadir reacción">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </button>
              <button class="discord-hover-btn" title="Responder">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 17 4 12 9 7"/>
                  <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
                </svg>
              </button>
              <button class="discord-hover-btn" title="Más">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="19" cy="12" r="1"/>
                  <circle cx="5" cy="12" r="1"/>
                </svg>
              </button>
            </div>

            <div class="discord-avatar-wrapper">
              <img src="discord-avatar.svg" alt="Avatar" class="discord-avatar-img" />
              <div class="discord-status-dot online"></div>
            </div>

            <div class="discord-msg-detail">
              <div class="discord-user-header">
                <span class="discord-author-name">Alex Dev</span>
                <span class="discord-bot-badge">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  BOT
                </span>
                <span class="discord-timestamp">hoy a las ${timeStr}</span>
              </div>

              <div class="discord-text-content">${escaped || '<em>Escribe un mensaje en Markdown para Discord...</em>'}</div>

              <div class="discord-reactions-row">
                <div class="discord-reaction-pill active" title="Reaccionado con 🚀">
                  <span class="emoji">🚀</span>
                  <span class="count">4</span>
                </div>
                <div class="discord-reaction-pill" title="Reaccionado con ✨">
                  <span class="emoji">✨</span>
                  <span class="count">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="discord-footer">
          <div class="discord-input-box">
            <button class="discord-attach-btn" title="Subir archivo (+)">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </button>
            <div class="discord-input-placeholder">
              <span class="discord-cursor"></span>
              <span>Enviar mensaje a #general</span>
            </div>
            <div class="discord-input-actions">
              <button class="discord-action-icon" title="Comprar Nitro de regalo">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </button>
              <button class="discord-action-icon" title="Seleccionar GIF">
                <span class="discord-gif-badge">GIF</span>
              </button>
              <button class="discord-action-icon" title="Abrir selector de emojis">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Interactividad en Spoilers de Discord
    preview.querySelectorAll('.discord-spoiler').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        sp.classList.toggle('revealed');
      });
    });

    lucide.createIcons({ root: preview });
    updateStats(rawText);
    updateLineNumbers();
    indicateSaving(false);
  }
  // ========================================================
  // 6. ACTUALIZADOR DE LÍNEAS, ESTADÍSTICAS Y ESQUEMA
  // ========================================================
  function updateLineNumbers() {
    const lines = editor.value.split('\n').length;
    let numbersHtml = '';
    for (let i = 1; i <= lines; i++) {
      numbersHtml += `${i}\n`;
    }
    lineNumbers.textContent = numbersHtml;
  }

  function updateStats(text) {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const lines = text.length ? text.split('\n').length : 0;
    const minutes = Math.ceil(words / 200);

    statChars.textContent = chars.toLocaleString();
    statWords.textContent = words.toLocaleString();
    statLines.textContent = lines.toLocaleString();
    statReadTime.textContent = minutes;

    // Medidor de Meta
    const target = state.settings.wordGoal || 500;
    goalTarget.textContent = target;
    goalCurrent.textContent = words;
    const progress = Math.min(100, Math.round((words / target) * 100));
    goalProgressFill.style.width = `${progress}%`;

    // Confetti de celebración al alcanzar la meta
    if (progress >= 100 && !lastGoalCelebrated && words > 0) {
      lastGoalCelebrated = true;
      if (window.confetti) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
        });
      }
      showToast('🎉 ¡Felicitaciones! Has alcanzado tu meta de palabras.', 'success');
    } else if (progress < 100) {
      lastGoalCelebrated = false;
    }
  }

  function updateTableOfContents() {
    const headings = preview.querySelectorAll('h1, h2, h3');
    if (!headings.length) {
      tocList.innerHTML = '<div class="toc-empty">No hay encabezados todavía. Usa # H1, ## H2 para estructurar tu documento.</div>';
      return;
    }

    tocList.innerHTML = '';
    headings.forEach((heading, idx) => {
      const id = heading.id || `heading-${idx}`;
      heading.id = id;

      const item = document.createElement('div');
      item.className = `toc-item ${heading.tagName.toLowerCase()}`;
      item.textContent = heading.textContent;
      item.title = heading.textContent;

      item.addEventListener('click', () => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      tocList.appendChild(item);
    });
  }

  // ========================================================
  // 7. GESTIÓN DE DOCUMENTOS (SIDEBAR & LOCALSTORAGE)
  // ========================================================
  function getActiveDoc() {
    return state.docs.find(d => d.id === state.activeDocId);
  }

  function renderDocsList() {
    docsList.innerHTML = '';
    docsCount.textContent = state.docs.length;

    state.docs.forEach((doc) => {
      const item = document.createElement('div');
      item.className = `doc-item ${doc.id === state.activeDocId ? 'active' : ''}`;
      item.dataset.id = doc.id;

      item.innerHTML = `
        <div class="doc-item-title">
          <i data-lucide="file-text"></i>
          <span>${escapeHtml(doc.title)}</span>
        </div>
        <div class="doc-item-actions">
          <button class="doc-action-btn delete-btn" title="Eliminar documento">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      `;

      item.addEventListener('click', (e) => {
        if (e.target.closest('.delete-btn')) {
          e.stopPropagation();
          deleteDoc(doc.id);
          return;
        }
        switchDoc(doc.id);
      });

      docsList.appendChild(item);
    });

    lucide.createIcons({ root: docsList });
  }

  function switchDoc(id) {
    if (state.activeDocId === id) return;
    state.activeDocId = id;
    const doc = getActiveDoc();
    if (doc) {
      editor.value = doc.content;
      docTitleInput.value = doc.title;
      renderDocsList();
      renderDocument(true);
      editor.focus();
    }
  }

  function createNewDoc(title = 'Nuevo Documento.md', content = '') {
    const newDoc = {
      id: 'doc_' + Date.now(),
      title: title,
      content: content || '# ' + title.replace(/\.md$/, '') + '\n\nEmpieza a escribir aquí...',
      updatedAt: new Date().toISOString()
    };
    state.docs.unshift(newDoc);
    state.activeDocId = newDoc.id;
    saveDocsToStorage();
    renderDocsList();
    editor.value = newDoc.content;
    docTitleInput.value = newDoc.title;
    renderDocument(true);
    showToast('Nuevo documento creado', 'info');
    editor.focus();
  }

  function deleteDoc(id) {
    if (state.docs.length <= 1) {
      showToast('No puedes eliminar el único documento abierto', 'warning');
      return;
    }
    if (!confirm('¿Seguro que deseas eliminar este documento?')) return;

    state.docs = state.docs.filter(d => d.id !== id);
    if (state.activeDocId === id) {
      state.activeDocId = state.docs[0].id;
    }
    saveDocsToStorage();
    MarkStorageDB.deleteDoc(id);
    const current = getActiveDoc();
    editor.value = current.content;
    docTitleInput.value = current.title;
    renderDocsList();
    renderDocument(true);
    showToast('Documento eliminado', 'info');
  }

  docTitleInput.addEventListener('change', () => {
    const activeDoc = getActiveDoc();
    if (activeDoc) {
      let val = docTitleInput.value.trim();
      if (!val) val = 'Sin título.md';
      activeDoc.title = val;
      saveDocsToStorage();
      renderDocsList();
    }
  });

  document.getElementById('btn-new-doc').addEventListener('click', () => {
    createNewDoc();
  });

  document.getElementById('btn-clear-all-docs').addEventListener('click', () => {
    if (confirm('¿Vaciar todos los borradores locales y reiniciar con plantilla por defecto?')) {
      localStorage.removeItem(STORAGE_DOCS_KEY);
      localStorage.removeItem(STORAGE_ACTIVE_ID_KEY);
      loadPersistedState();
      initApp();
      showToast('Borradores reiniciados', 'info');
    }
  });

  // Importar archivo .md desde disco
  const fileImportInput = document.getElementById('file-import-input');
  fileImportInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      createNewDoc(file.name, event.target.result);
      fileImportInput.value = '';
    };
    reader.readAsText(file);
  });

  // Drag and drop de archivos Markdown en la ventana
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.md') || file.name.endsWith('.txt') || file.name.endsWith('.markdown')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          createNewDoc(file.name, ev.target.result);
        };
        reader.readAsText(file);
      }
    }
  });

  // ========================================================
  // 8. SINCRONIZACIÓN DE SCROLL INTELIGENTE (60 FPS & POINTER-AWARE)
  // ========================================================
  let activeScrollPane = 'editor';
  let isSyncingScroll = false;

  function bindScrollSync() {
    editor.addEventListener('mouseenter', () => { activeScrollPane = 'editor'; });
    editor.addEventListener('touchstart', () => { activeScrollPane = 'editor'; }, { passive: true });

    previewContainer.addEventListener('mouseenter', () => { activeScrollPane = 'preview'; });
    previewContainer.addEventListener('touchstart', () => { activeScrollPane = 'preview'; }, { passive: true });

    editor.addEventListener('scroll', () => {
      // Sincronizar números de línea siempre al instante
      lineNumbers.scrollTop = editor.scrollTop;

      if (!state.settings.scrollSync || isSyncingScroll) return;
      if (activeScrollPane !== 'editor') return;

      isSyncingScroll = true;
      requestAnimationFrame(() => {
        const maxEditorScroll = editor.scrollHeight - editor.clientHeight;
        if (maxEditorScroll > 0) {
          const percentage = editor.scrollTop / maxEditorScroll;
          const maxPreviewScroll = previewContainer.scrollHeight - previewContainer.clientHeight;
          previewContainer.scrollTop = percentage * maxPreviewScroll;
        }
        isSyncingScroll = false;
      });
    }, { passive: true });

    previewContainer.addEventListener('scroll', () => {
      if (!state.settings.scrollSync || isSyncingScroll) return;
      if (activeScrollPane !== 'preview') return;

      isSyncingScroll = true;
      requestAnimationFrame(() => {
        const maxPreviewScroll = previewContainer.scrollHeight - previewContainer.clientHeight;
        if (maxPreviewScroll > 0) {
          const percentage = previewContainer.scrollTop / maxPreviewScroll;
          const maxEditorScroll = editor.scrollHeight - editor.clientHeight;
          editor.scrollTop = percentage * maxEditorScroll;
          lineNumbers.scrollTop = editor.scrollTop;
        }
        isSyncingScroll = false;
      });
    }, { passive: true });
  }

  // Posición del cursor en tiempo real (Línea / Columna)
  function updateCursorPos() {
    const pos = editor.selectionStart;
    const text = editor.value.substring(0, pos);
    const line = text.split('\n').length;
    const col = pos - text.lastIndexOf('\n');
    cursorPosEl.textContent = `Lín ${line}, Col ${col}`;
  }

  editor.addEventListener('keyup', updateCursorPos);
  editor.addEventListener('click', updateCursorPos);

  // ========================================================
  // 9. SUPERPODERES DEL EDITOR (ATAJOS, AUTOCIERRE, TAB)
  // ========================================================
  // ========================================================
  // 9. SUPERPODERES DEL EDITOR (FORMATEO INTELIGENTE Y REVERSIBLE)
  // ========================================================

  // 1. Toggle Inline Syntax (Negrita, Cursiva, Tachado, Código inline, Math inline)
  function toggleInlineSyntax(marker, defaultPlaceholder = 'texto') {
    editor.focus();
    const fullText = editor.value;
    let start = editor.selectionStart;
    let end = editor.selectionEnd;
    const mLen = marker.length;

    if (start > end) {
      const tmp = start;
      start = end;
      end = tmp;
    }

    const selected = fullText.substring(start, end);

    // Caso 1: Hay texto seleccionado
    if (selected.length > 0) {
      // 1A: El texto seleccionado empieza y termina con el marcador exacto
      // Ejemplo: "**hola**"
      if (selected.length >= mLen * 2 && selected.slice(0, mLen) === marker && selected.slice(-mLen) === marker) {
        if (!(marker === '*' && (selected.startsWith('**') || selected.endsWith('**')))) {
          const unwrapped = selected.slice(mLen, -mLen);
          editor.setRangeText(unwrapped, start, end, 'select');
          renderDocument();
          return;
        }
      }

      // 1B: La selección está inmediatamente rodeada por el marcador afuera
      // Ejemplo: el texto es "**hola**" y el usuario seleccionó "hola"
      const before = fullText.substring(Math.max(0, start - mLen), start);
      const after = fullText.substring(end, Math.min(fullText.length, end + mLen));
      if (before === marker && after === marker) {
        if (!(marker === '*' && (fullText.charAt(start - 2) === '*' || fullText.charAt(end + 1) === '*'))) {
          editor.setSelectionRange(start - mLen, end + mLen);
          editor.setRangeText(selected, start - mLen, end + mLen, 'select');
          renderDocument();
          return;
        }
      }

      // 1C: Envolver la selección normalmente
      const wrapped = marker + selected + marker;
      editor.setRangeText(wrapped, start, end, 'select');
      // Mantener seleccionada la parte interna para que un segundo clic lo revierta al instante
      editor.setSelectionRange(start + mLen, start + mLen + selected.length);
      renderDocument();
      return;
    }

    // Caso 2: El cursor está colapsado (sin selección previa)
    // 2A: Verificar si el cursor está justo entre marcadores vacíos: e.g. **|**
    if (start >= mLen && fullText.substring(start - mLen, start) === marker &&
        fullText.substring(start, start + mLen) === marker) {
      editor.setSelectionRange(start - mLen, start + mLen);
      editor.setRangeText('', start - mLen, start + mLen, 'end');
      renderDocument();
      return;
    }

    // 2B: Verificar si el cursor está dentro de una palabra formateada en la línea actual
    const lineStart = fullText.lastIndexOf('\n', start - 1) + 1;
    let lineEnd = fullText.indexOf('\n', start);
    if (lineEnd === -1) lineEnd = fullText.length;
    const line = fullText.substring(lineStart, lineEnd);
    const offsetInLine = start - lineStart;

    let leftIdx = line.lastIndexOf(marker, offsetInLine - 1);
    while (leftIdx !== -1 && marker === '*' && line.charAt(leftIdx - 1) === '*') {
      leftIdx = line.lastIndexOf(marker, leftIdx - 2);
    }

    if (leftIdx !== -1) {
      let rightIdx = line.indexOf(marker, offsetInLine);
      while (rightIdx !== -1 && marker === '*' && line.charAt(rightIdx + 1) === '*') {
        rightIdx = line.indexOf(marker, rightIdx + 2);
      }

      if (rightIdx !== -1 && rightIdx > leftIdx) {
        const innerWord = line.substring(leftIdx + mLen, rightIdx);
        const globalLeft = lineStart + leftIdx;
        const globalRight = lineStart + rightIdx + mLen;
        editor.setSelectionRange(globalLeft, globalRight);
        editor.setRangeText(innerWord, globalLeft, globalRight, 'select');
        renderDocument();
        return;
      }
    }

    // 2C: Insertar marcador con texto de relleno y dejarlo seleccionado
    const insertText = marker + defaultPlaceholder + marker;
    editor.setRangeText(insertText, start, end, 'select');
    editor.setSelectionRange(start + mLen, start + mLen + defaultPlaceholder.length);
    editor.focus();
    renderDocument();
  }

  // 2. Alternar Encabezados cíclicamente (H2 -> H3 -> H1 -> Texto regular)
  function cycleHeading() {
    const fullText = editor.value;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;

    const lineStart = fullText.lastIndexOf('\n', start - 1) + 1;
    let lineEnd = fullText.indexOf('\n', end);
    if (lineEnd === -1) lineEnd = fullText.length;

    const line = fullText.substring(lineStart, lineEnd);
    let newLine = '';

    if (line.startsWith('### ')) {
      newLine = '# ' + line.substring(4);
    } else if (line.startsWith('## ')) {
      newLine = '### ' + line.substring(3);
    } else if (line.startsWith('# ')) {
      // Revertir a texto regular (destransformar)
      newLine = line.substring(2);
    } else {
      const clean = line.replace(/^#{1,6}\s*/, '');
      newLine = '## ' + (clean || 'Encabezado');
    }

    editor.setSelectionRange(lineStart, lineEnd);
    editor.setRangeText(newLine, lineStart, lineEnd, 'select');
    editor.focus();
    renderDocument();
  }

  // 3. Alternar Prefijos de Línea (Citas, Listas, Tareas)
  function toggleLinePrefix(type) {
    const fullText = editor.value;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;

    const lineStart = fullText.lastIndexOf('\n', start - 1) + 1;
    let lineEnd = fullText.indexOf('\n', end);
    if (lineEnd === -1) lineEnd = fullText.length;

    const linesText = fullText.substring(lineStart, lineEnd);
    const lines = linesText.split('\n');

    let prefixRegex;
    if (type === 'quote') {
      prefixRegex = /^>\s?/;
    } else if (type === 'ulist') {
      prefixRegex = /^[-*+]\s+/;
    } else if (type === 'olist') {
      prefixRegex = /^\d+\.\s+/;
    } else if (type === 'task') {
      prefixRegex = /^[-*+]\s*\[[ xX]\]\s+/;
    }

    let allHavePrefix = true;
    for (const l of lines) {
      if (l.trim().length > 0 && !prefixRegex.test(l)) {
        allHavePrefix = false;
        break;
      }
    }

    const newLines = lines.map((l, idx) => {
      if (allHavePrefix) {
        // Destransformar: eliminar prefijo
        return l.replace(prefixRegex, '');
      } else {
        // Transformar: limpiar prefijos previos y agregar el nuevo
        const clean = l.replace(/^([-*+]\s*\[[ xX]\]\s+|[-*+]\s+|\d+\.\s+|>\s?)/, '');
        if (type === 'subtext') return '-# ' + (clean || 'Texto diminuto');
        if (type === 'quote') return '> ' + (clean || 'Cita');
        if (type === 'ulist') return '- ' + (clean || 'Elemento de lista');
        if (type === 'olist') return `${idx + 1}. ` + (clean || 'Paso');
        if (type === 'task') return '- [ ] ' + (clean || 'Nueva tarea');
        return l;
      }
    });

    const replacement = newLines.join('\n');
    editor.setSelectionRange(lineStart, lineEnd);
    editor.setRangeText(replacement, lineStart, lineEnd, 'select');
    editor.focus();
    renderDocument();
  }

  // 4. Alternar Bloque de Código Fenced (```lenguaje ... ```)
  function toggleCodeBlock(lang = 'javascript') {
    editor.focus();
    const fullText = editor.value;
    let start = editor.selectionStart;
    let end = editor.selectionEnd;
    const selected = fullText.substring(start, end);

    // Caso 1: La selección ya está envuelta en un bloque de código ```...```
    const trimmed = selected.trim();
    if (/^```[a-zA-Z0-9_-]*\n[\s\S]*?\n```$/.test(trimmed)) {
      const unwrapped = trimmed.replace(/^```[a-zA-Z0-9_-]*\n/, '').replace(/\n```$/, '');
      editor.setRangeText(unwrapped, start, end, 'select');
      renderDocument();
      return;
    }

    // Caso 2: El cursor o selección está dentro de un bloque de código existente
    const before = fullText.substring(0, start);
    const after = fullText.substring(end);
    const openIdx = before.lastIndexOf('```');
    if (openIdx !== -1) {
      const closeIdx = after.indexOf('```');
      if (closeIdx !== -1) {
        const textBeforeStart = before.substring(openIdx);
        if (!textBeforeStart.includes('```', 3)) {
          const blockStart = openIdx;
          const blockEnd = end + closeIdx + 3;
          const wholeBlock = fullText.substring(blockStart, blockEnd);
          const unwrapped = wholeBlock.replace(/^```[a-zA-Z0-9_-]*\n?/, '').replace(/\n?```$/, '');
          editor.setSelectionRange(blockStart, blockEnd);
          editor.setRangeText(unwrapped, blockStart, blockEnd, 'select');
          renderDocument();
          return;
        }
      }
    }

    // Caso 3: Envolver como bloque de código limpio en sus propias líneas
    const codeText = selected || 'console.log("Hola mundo");';
    const needsLeadingNewline = start > 0 && fullText.charAt(start - 1) !== '\n';
    const needsTrailingNewline = end < fullText.length && fullText.charAt(end) !== '\n';

    const prefix = (needsLeadingNewline ? '\n' : '') + `\`\`\`${lang}\n`;
    const suffix = '\n```' + (needsTrailingNewline ? '\n' : '');
    const wrapped = prefix + codeText + suffix;

    editor.setRangeText(wrapped, start, end, 'select');
    const newInnerStart = start + prefix.length;
    const newInnerEnd = newInnerStart + codeText.length;
    editor.setSelectionRange(newInnerStart, newInnerEnd);
    renderDocument();
  }

  // 5. Alternar Enlace
  function toggleLink() {
    const fullText = editor.value;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = fullText.substring(start, end);

    const linkMatch = selected.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      editor.setRangeText(linkMatch[1], start, end, 'select');
      renderDocument();
      return;
    }

    const text = selected || 'Título del enlace';
    const wrapped = `[${text}](https://)`;
    editor.setRangeText(wrapped, start, end, 'select');
    const urlStart = start + text.length + 3;
    const urlEnd = urlStart + 8;
    editor.setSelectionRange(urlStart, urlEnd);
    renderDocument();
  }

  // 6. Alternar Matemáticas
  function toggleMath() {
    const fullText = editor.value;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = fullText.substring(start, end);

    if (selected.startsWith('$$') && selected.endsWith('$$')) {
      const unwrapped = selected.replace(/^\$\$\n?/, '').replace(/\n?\$\$$/, '');
      editor.setRangeText(unwrapped, start, end, 'select');
      renderDocument();
      return;
    }

    if (selected.includes('\n')) {
      const wrapped = '$$\n' + selected + '\n$$';
      editor.setRangeText(wrapped, start, end, 'select');
      renderDocument();
      return;
    }

    toggleInlineSyntax('$', 'E = mc^2');
  }

  function insertSyntax(before, after = '', defaultPlaceholder = '') {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = editor.value.substring(start, end) || defaultPlaceholder;
    const replacement = before + selected + after;

    editor.setRangeText(replacement, start, end, 'select');
    editor.focus();
    renderDocument();
  }

  // Barra de herramientas de formato
  document.querySelectorAll('.tool-btn[data-action]').forEach(btn => {
    btn.addEventListener('mousedown', (e) => {
      // Evita que el textarea pierda el foco o la selección activa al hacer clic
      e.preventDefault();
    });
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      executeFormattingAction(action);
    });
  });

  function executeFormattingAction(action) {
    switch (action) {
      case 'undo':
        document.execCommand('undo');
        renderDocument();
        showToast('Acción deshecha', 'info');
        break;
      case 'redo':
        document.execCommand('redo');
        renderDocument();
        showToast('Acción rehecha', 'info');
        break;
      case 'bold':
        if (state.platform === 'whatsapp') {
          toggleInlineSyntax('*', 'negrita');
        } else {
          toggleInlineSyntax('**', 'texto en negrita');
        }
        break;
      case 'italic':
        if (state.platform === 'whatsapp') {
          toggleInlineSyntax('_', 'cursiva');
        } else {
          toggleInlineSyntax('*', 'texto en cursiva');
        }
        break;
      case 'heading':
        if (state.platform !== 'whatsapp') cycleHeading();
        break;
      case 'strikethrough':
        if (state.platform === 'whatsapp') {
          toggleInlineSyntax('~', 'tachado');
        } else {
          toggleInlineSyntax('~~', 'texto tachado');
        }
        break;
      case 'spoiler':
        toggleInlineSyntax('||', 'secreto');
        break;
      case 'underline':
        toggleInlineSyntax('__', 'subrayado');
        break;
      case 'quote':
        toggleLinePrefix('quote');
        break;
      case 'inline-code':
        toggleInlineSyntax('`', 'código');
        break;
      case 'code':
        if (state.platform === 'whatsapp') {
          insertSyntax('```\n', '\n```');
        } else {
          toggleCodeBlock('javascript');
        }
        break;
      case 'math':
        if (state.platform === 'standard') toggleMath();
        break;
      case 'mermaid':
        if (state.platform === 'standard') insertSyntax('```mermaid\nflowchart LR\n  A[Inicio] --> B[Fin]\n```\n', '');
        break;
      case 'ulist':
        toggleLinePrefix('ulist');
        break;
      case 'olist':
        toggleLinePrefix('olist');
        break;
      case 'task':
        toggleLinePrefix('task');
        break;
      case 'table':
        insertSyntax('\n| Columna 1 | Columna 2 | Columna 3 |\n| :--- | :---: | ---: |\n| Dato A | Dato B | Dato C |\n');
        break;
      case 'link':
        toggleLink();
        break;
      case 'image':
        insertSyntax('![Descripción alternativa](', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800)');
        break;
      case 'callout':
        insertSyntax('> [!NOTE]\n> ', '', 'Escribe aquí una nota relevante');
        break;
    }
  }

  // Teclas avanzadas (Tab, Enter continuo en listas, Autocierre de llaves)
  editor.addEventListener('keydown', (e) => {
    playKeyClickSound();

    // 1. Atajos con Ctrl / Cmd
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        if (e.shiftKey) {
          executeFormattingAction('redo');
        } else {
          executeFormattingAction('undo');
        }
        return;
      }
      if (e.key === 'y' || e.key === 'Y') {
        e.preventDefault();
        executeFormattingAction('redo');
        return;
      }
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        executeFormattingAction('bold');
        return;
      }
      if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        executeFormattingAction('italic');
        return;
      }
      if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        openModal(paletteModal);
        return;
      }
      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        saveDocsToStorage();
        showToast('Documento guardado con éxito', 'success');
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFindReplace();
        return;
      }
      if (e.key === '\\') {
        e.preventDefault();
        toggleSidebar();
        return;
      }
    }

    // 2. Tabulación (2 espacios)
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText('  ', start, end, 'end');
      renderDocument();
      return;
    }

    // 3. Continuación inteligente de listas con Enter
    if (e.key === 'Enter') {
      const cursor = editor.selectionStart;
      const textBefore = editor.value.substring(0, cursor);
      const currentLine = textBefore.split('\n').pop();

      // Checklists: - [ ] o - [x]
      const taskMatch = currentLine.match(/^(\s*[-*+]\s*\[[ xX]\]\s+)(.*)$/);
      if (taskMatch) {
        if (taskMatch[2].trim() === '') {
          // Si está vacío, borrar el bullet al dar enter
          e.preventDefault();
          const lineStart = cursor - currentLine.length;
          editor.setRangeText('', lineStart, cursor, 'end');
          renderDocument();
          return;
        }
        e.preventDefault();
        editor.setRangeText('\n- [ ] ', cursor, cursor, 'end');
        renderDocument();
        return;
      }

      // Listas desordenadas: - o * o +
      const listMatch = currentLine.match(/^(\s*[-*+]\s+)(.*)$/);
      if (listMatch) {
        if (listMatch[2].trim() === '') {
          e.preventDefault();
          const lineStart = cursor - currentLine.length;
          editor.setRangeText('', lineStart, cursor, 'end');
          renderDocument();
          return;
        }
        e.preventDefault();
        editor.setRangeText(`\n${listMatch[1]}`, cursor, cursor, 'end');
        renderDocument();
        return;
      }

      // Listas ordenadas: 1. 2.
      const olistMatch = currentLine.match(/^(\s*)(\d+)\.\s+(.*)$/);
      if (olistMatch) {
        if (olistMatch[3].trim() === '') {
          e.preventDefault();
          const lineStart = cursor - currentLine.length;
          editor.setRangeText('', lineStart, cursor, 'end');
          renderDocument();
          return;
        }
        e.preventDefault();
        const nextNum = parseInt(olistMatch[2], 10) + 1;
        editor.setRangeText(`\n${olistMatch[1]}${nextNum}. `, cursor, cursor, 'end');
        renderDocument();
        return;
      }
    }

    // 4. Autocierre de llaves y comillas
    if (state.settings.autoClose) {
      const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
        '"': '"',
        "'": "'",
        '`': '`'
      };

      if (pairs[e.key]) {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        if (start !== end) {
          e.preventDefault();
          const selected = editor.value.substring(start, end);
          editor.setRangeText(`${e.key}${selected}${pairs[e.key]}`, start, end, 'select');
          renderDocument();
          return;
        }
      }
    }
  });

  editor.addEventListener('input', () => {
    renderDocument();
  });

  // ========================================================
  // 10. BUSCAR Y REEMPLAZAR INTEGRADO
  // ========================================================
  function toggleFindReplace() {
    findReplaceBar.classList.toggle('show');
    if (findReplaceBar.classList.contains('show')) {
      const selected = editor.value.substring(editor.selectionStart, editor.selectionEnd);
      if (selected) findInput.value = selected;
      findInput.focus();
      findInput.select();
      performFind();
    }
  }

  document.getElementById('btn-find-replace').addEventListener('click', toggleFindReplace);
  document.getElementById('btn-close-find').addEventListener('click', () => {
    findReplaceBar.classList.remove('show');
  });

  findInput.addEventListener('input', performFind);

  function performFind() {
    const q = findInput.value;
    if (!q) {
      findCount.textContent = '0/0';
      state.findState = { query: '', matches: [], currentIndex: -1 };
      return;
    }

    const text = editor.value;
    const matches = [];
    let idx = text.indexOf(q);
    while (idx !== -1) {
      matches.push(idx);
      idx = text.indexOf(q, idx + q.length);
    }

    state.findState.query = q;
    state.findState.matches = matches;
    state.findState.currentIndex = matches.length > 0 ? 0 : -1;

    updateFindBadge();
    if (matches.length > 0) {
      highlightCurrentFind();
    }
  }

  function updateFindBadge() {
    const { matches, currentIndex } = state.findState;
    if (!matches.length) {
      findCount.textContent = '0/0';
    } else {
      findCount.textContent = `${currentIndex + 1}/${matches.length}`;
    }
  }

  function highlightCurrentFind() {
    const { matches, currentIndex, query } = state.findState;
    if (currentIndex < 0 || currentIndex >= matches.length) return;
    const start = matches[currentIndex];
    const end = start + query.length;
    editor.setSelectionRange(start, end);
    editor.focus();
    updateFindBadge();
  }

  document.getElementById('btn-find-next').addEventListener('click', () => {
    const { matches } = state.findState;
    if (!matches.length) return;
    state.findState.currentIndex = (state.findState.currentIndex + 1) % matches.length;
    highlightCurrentFind();
  });

  document.getElementById('btn-find-prev').addEventListener('click', () => {
    const { matches } = state.findState;
    if (!matches.length) return;
    state.findState.currentIndex = (state.findState.currentIndex - 1 + matches.length) % matches.length;
    highlightCurrentFind();
  });

  document.getElementById('btn-replace-one').addEventListener('click', () => {
    const { matches, currentIndex, query } = state.findState;
    if (currentIndex < 0 || !matches.length) return;
    const repl = replaceInput.value;
    const start = matches[currentIndex];
    const end = start + query.length;

    editor.setRangeText(repl, start, end, 'end');
    renderDocument();
    performFind();
  });

  document.getElementById('btn-replace-all').addEventListener('click', () => {
    const { query } = state.findState;
    if (!query) return;
    const repl = replaceInput.value;
    editor.value = editor.value.split(query).join(repl);
    renderDocument();
    performFind();
    showToast('Reemplazo global completado', 'info');
  });

  // Limpiar y formatear markdown
  document.getElementById('btn-format-markdown').addEventListener('click', () => {
    const raw = editor.value;
    // Eliminar espacios finales en cada línea y limitar saltos de línea consecutivos excesivos
    const cleaned = raw
      .split('\n')
      .map(l => l.trimEnd())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n');
    editor.value = cleaned;
    renderDocument(true);
    showToast('Documento formateado y limpiado', 'success');
  });

  // ========================================================
  // 11. MODOS DE VISTA, ZEN & SIDEBAR
  // ========================================================
  function setViewMode(mode) {
    state.viewMode = mode;
    workspaceContainer.classList.remove('view-editor-only', 'view-preview-only');
    if (mode === 'editor') {
      workspaceContainer.classList.add('view-editor-only');
    } else if (mode === 'preview') {
      workspaceContainer.classList.add('view-preview-only');
    }

    document.querySelectorAll('.view-mode-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === mode);
    });
  }

  document.querySelectorAll('.view-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => setViewMode(btn.dataset.view));
  });

  function toggleSidebar() {
    state.sidebarOpen = !state.sidebarOpen;
    sidebar.classList.toggle('collapsed', !state.sidebarOpen);
  }
  document.getElementById('btn-toggle-sidebar').addEventListener('click', toggleSidebar);

  // Tabs del Sidebar (Documentos vs Índice)
  document.querySelectorAll('.sidebar-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.sidebar-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabId = `tab-${btn.dataset.tab}`;
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Modo Zen
  document.getElementById('btn-zen-mode').addEventListener('click', toggleZenMode);
  function toggleZenMode() {
    state.isZen = !state.isZen;
    if (state.isZen) {
      sidebar.classList.add('collapsed');
      setViewMode('editor');
      document.body.requestFullscreen?.().catch(() => {});
      showToast('Modo Zen activado. Presiona Esc o el botón para salir.', 'info');
    } else {
      if (state.sidebarOpen) sidebar.classList.remove('collapsed');
      setViewMode('split');
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    }
  }

  // Resizer entre paneles
  let isDragging = false;
  resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const containerRect = workspaceContainer.getBoundingClientRect();
    const offset = e.clientX - containerRect.left;
    const percentage = (offset / containerRect.width) * 100;

    if (percentage > 15 && percentage < 85) {
      document.getElementById('editor-pane').style.flex = `0 0 ${percentage}%`;
      document.getElementById('preview-pane').style.flex = `0 0 ${100 - percentage}%`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });

  // ========================================================
  // 12. EXPORTACIÓN Y COMPARTIR
  // ========================================================
  const exportDropdown = document.getElementById('export-dropdown');
  const btnExportMenu = document.getElementById('btn-export-menu');

  btnExportMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    exportDropdown.classList.toggle('show');
  });

  window.addEventListener('click', () => {
    exportDropdown.classList.remove('show');
  });

  // Exportar .md
  document.getElementById('export-md').addEventListener('click', () => {
    const doc = getActiveDoc();
    const blob = new Blob([editor.value], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = doc ? doc.title : 'documento.md';
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('Archivo Markdown descargado', 'success');
  });

  // Exportar HTML estilizado
  document.getElementById('export-html').addEventListener('click', () => {
    const doc = getActiveDoc();
    const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(doc ? doc.title : 'Documento')}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0b0f17; color: #f1f5f9; padding: 40px; line-height: 1.7; }
    .container { max-width: 860px; margin: 0 auto; background: #131b26; padding: 40px; border-radius: 12px; border: 1px solid #1e293b; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    h1, h2, h3 { color: #38bdf8; }
    pre { background: #05080e; padding: 16px; border-radius: 8px; overflow-x: auto; border: 1px solid #1e293b; }
    code { font-family: monospace; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #1e293b; padding: 8px 12px; }
    th { background: #1b2636; }
    blockquote { border-left: 4px solid #38bdf8; padding-left: 16px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    ${preview.innerHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = (doc ? doc.title.replace(/\.md$/, '') : 'documento') + '.html';
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('HTML estilizado descargado', 'success');
  });

  // Imprimir o guardar como PDF
  document.getElementById('export-pdf').addEventListener('click', () => {
    window.print();
  });

  // Copiar Markdown
  document.getElementById('copy-markdown').addEventListener('click', () => {
    navigator.clipboard.writeText(editor.value).then(() => {
      showToast('Markdown copiado al portapapeles', 'success');
    });
  });

  // Copiar HTML generado
  document.getElementById('copy-html').addEventListener('click', () => {
    navigator.clipboard.writeText(preview.innerHTML).then(() => {
      showToast('HTML crudo copiado al portapapeles', 'success');
    });
  });

  // Copiar como Texto Enriquecido (Pega con formato en Google Docs / Word / Gmail)
  document.getElementById('copy-rich').addEventListener('click', () => {
    try {
      const blobHtml = new Blob([preview.innerHTML], { type: 'text/html' });
      const blobText = new Blob([editor.value], { type: 'text/plain' });
      const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];

      navigator.clipboard.write(data).then(() => {
        showToast('¡Texto enriquecido copiado! Listo para pegar en Google Docs o Word.', 'success');
      }).catch(() => {
        navigator.clipboard.writeText(preview.innerHTML);
        showToast('HTML copiado (portapapeles enriquecido restringido)', 'info');
      });
    } catch (e) {
      navigator.clipboard.writeText(preview.innerHTML);
      showToast('HTML copiado', 'info');
    }
  });

  // ========================================================
  // 13. SELECCIÓN DE TEMAS VISUALES
  // ========================================================
  const themeDropdown = document.getElementById('theme-dropdown');
  const btnThemeMenu = document.getElementById('btn-theme-menu');

  btnThemeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle('show');
  });

  window.addEventListener('click', () => {
    themeDropdown.classList.remove('show');
  });

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);

    // Ajustar tema de Highlight.js y Mermaid según tema claro / oscuro
    const hljsThemeLink = document.getElementById('hljs-theme');
    if (theme === 'light') {
      hljsThemeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
    } else {
      hljsThemeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
    }

    if (window.mermaid) {
      mermaid.initialize({
        startOnLoad: false,
        theme: theme === 'light' ? 'default' : 'dark'
      });
    }

    document.querySelectorAll('.theme-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.theme === theme);
    });

    renderDocument(true);
  }

  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setTheme(opt.dataset.theme);
      showToast(`Tema cambiado a ${opt.textContent.trim()}`, 'info');
    });
  });

  // ========================================================
  // 14. PALETA DE COMANDOS RÁPIDOS (Ctrl+K)
  // ========================================================
  const paletteInput = document.getElementById('palette-input');
  const paletteResults = document.getElementById('palette-results');
  let paletteSelectionIndex = 0;

  const commands = [
    { title: 'Deshacer última acción', icon: 'undo-2', shortcut: 'Ctrl+Z', action: () => executeFormattingAction('undo') },
    { title: 'Rehacer acción', icon: 'redo-2', shortcut: 'Ctrl+Y', action: () => executeFormattingAction('redo') },
    { title: 'Nuevo Documento', icon: 'file-plus', shortcut: 'Ctrl+N', action: () => createNewDoc() },
    { title: 'Alternar Negrita', icon: 'bold', shortcut: 'Ctrl+B', action: () => executeFormattingAction('bold') },
    { title: 'Alternar Cursiva', icon: 'italic', shortcut: 'Ctrl+I', action: () => executeFormattingAction('italic') },
    { title: 'Alternar Encabezado (H2 -> H3 -> H1 -> Texto)', icon: 'heading', action: () => executeFormattingAction('heading') },
    { title: 'Alternar Lista con viñetas', icon: 'list', action: () => executeFormattingAction('ulist') },
    { title: 'Alternar Lista de tareas', icon: 'check-square', action: () => executeFormattingAction('task') },
    { title: 'Alternar Cita reflexiva', icon: 'quote', action: () => executeFormattingAction('quote') },
    { title: 'Alternar Código', icon: 'code-2', action: () => executeFormattingAction('code') },
    { title: 'Plantilla: README Moderno', icon: 'layout-template', action: () => applyTemplate('readme') },
    { title: 'Plantilla: Especificación Técnica (RFC)', icon: 'cpu', action: () => applyTemplate('tech-spec') },
    { title: 'Plantilla: Matemáticas & KaTeX', icon: 'binary', action: () => applyTemplate('math-science') },
    { title: 'Plantilla: Documentación de API', icon: 'code-xml', action: () => applyTemplate('api-docs') },
    { title: 'Plantilla: Guía de Apps con Markdown Propio', icon: 'compass', action: () => applyTemplate('apps-guide') },
    { title: 'Abrir Guía de Sintaxis por Plataformas (Normal, Discord, WhatsApp)', icon: 'book-open', action: () => openModal(cheatsheetModal) },
    { title: 'Insertar Fórmula Matemática', icon: 'sigma', action: () => executeFormattingAction('math') },
    { title: 'Insertar Diagrama Mermaid', icon: 'git-fork', action: () => executeFormattingAction('mermaid') },
    { title: 'Insertar Tabla GFM', icon: 'table', action: () => executeFormattingAction('table') },
    { title: 'Insertar Alerta / Callout', icon: 'info', action: () => executeFormattingAction('callout') },
    { title: 'Buscar y Reemplazar', icon: 'search', shortcut: 'Ctrl+F', action: toggleFindReplace },
    { title: 'Formatear y Limpiar Documento', icon: 'wand-2', action: () => document.getElementById('btn-format-markdown').click() },
    { title: 'Modo Zen / Distraction-free', icon: 'maximize-2', shortcut: 'F11', action: toggleZenMode },
    { title: 'Descargar archivo .md', icon: 'download', action: () => document.getElementById('export-md').click() },
    { title: 'Descargar HTML con estilos', icon: 'code', action: () => document.getElementById('export-html').click() },
    { title: 'Imprimir o Guardar PDF', icon: 'printer', action: () => window.print() },
    { title: 'Copiar como Texto Enriquecido', icon: 'layout', action: () => document.getElementById('copy-rich').click() },
    { title: 'Historial de Versiones & Snapshots', icon: 'history', action: () => openVersionsModal() },
    { title: 'Bóveda y Almacenamiento Avanzado (IndexedDB)', icon: 'database', action: () => openStorageModal() },
    { title: 'Crear Punto de Restauración Inmediato', icon: 'bookmark-plus', action: () => createManualSnapshot() },
    { title: 'Descargar Bóveda Completa (.json)', icon: 'download-cloud', action: () => exportVaultBackup() },
    { title: 'Cambiar Tema: Slate Dark', icon: 'moon', action: () => setTheme('dark') },
    { title: 'Cambiar Tema: Tokyo Night', icon: 'sparkles', action: () => setTheme('tokyo') },
    { title: 'Cambiar Tema: Cyber Neon', icon: 'terminal', action: () => setTheme('cyber') },
    { title: 'Cambiar Tema: Nord Polar', icon: 'cloud-snow', action: () => setTheme('nord') },
    { title: 'Cambiar Tema: Paper Luxe (Claro)', icon: 'sun', action: () => setTheme('light') }
  ];

  document.getElementById('btn-open-palette').addEventListener('click', () => {
    openModal(paletteModal);
  });

  function renderPaletteResults(filtered) {
    paletteResults.innerHTML = '';
    if (!filtered.length) {
      paletteResults.innerHTML = '<div class="toc-empty">No se encontraron comandos coincidentes.</div>';
      return;
    }

    filtered.forEach((cmd, idx) => {
      const item = document.createElement('div');
      item.className = `palette-item ${idx === paletteSelectionIndex ? 'active' : ''}`;
      item.innerHTML = `
        <div class="palette-item-left">
          <i data-lucide="${cmd.icon}"></i>
          <span>${cmd.title}</span>
        </div>
        ${cmd.shortcut ? `<span class="palette-shortcut">${cmd.shortcut}</span>` : ''}
      `;

      item.addEventListener('click', () => {
        closeModal(paletteModal);
        cmd.action();
      });

      paletteResults.appendChild(item);
    });

    lucide.createIcons({ root: paletteResults });
  }

  paletteInput.addEventListener('input', () => {
    const q = paletteInput.value.toLowerCase().trim();
    const filtered = commands.filter(c => c.title.toLowerCase().includes(q));
    paletteSelectionIndex = 0;
    renderPaletteResults(filtered);
  });

  paletteInput.addEventListener('keydown', (e) => {
    const items = paletteResults.querySelectorAll('.palette-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      paletteSelectionIndex = (paletteSelectionIndex + 1) % items.length;
      updatePaletteHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      paletteSelectionIndex = (paletteSelectionIndex - 1 + items.length) % items.length;
      updatePaletteHighlight(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      items[paletteSelectionIndex]?.click();
    }
  });

  function updatePaletteHighlight(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('active', idx === paletteSelectionIndex);
      if (idx === paletteSelectionIndex) it.scrollIntoView({ block: 'nearest' });
    });
  }

  // ========================================================
  // 15. MODALES (PLANTILLAS, AJUSTES, GUÍA)
  // ========================================================
  function openModal(modal) {
    modal.classList.add('show');
    if (modal === paletteModal) {
      paletteInput.value = '';
      paletteSelectionIndex = 0;
      renderPaletteResults(commands);
      setTimeout(() => paletteInput.focus(), 50);
    }
  }

  function closeModal(modal) {
    modal.classList.remove('show');
  }

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.close;
      closeModal(document.getElementById(modalId));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.show').forEach(closeModal);
    }
  });

  // Modal Plantillas
  document.getElementById('btn-templates').addEventListener('click', () => openModal(templatesModal));

  function applyTemplate(key) {
    const tpl = defaultTemplates[key];
    if (!tpl) return;
    const activeDoc = getActiveDoc();
    if (editor.value.trim() && !confirm('¿Sobrescribir el contenido actual con esta plantilla?')) {
      createNewDoc(`Plantilla-${key}.md`, tpl);
      return;
    }
    editor.value = tpl;
    if (activeDoc) {
      activeDoc.title = `Documento-${key}.md`;
      docTitleInput.value = activeDoc.title;
    }
    renderDocument(true);
    closeModal(templatesModal);
    showToast('Plantilla aplicada', 'success');
  }

  document.querySelectorAll('.template-card[data-template]').forEach(card => {
    card.addEventListener('click', () => {
      applyTemplate(card.dataset.template);
    });
  });

  // Modal Ajustes
  document.getElementById('btn-open-settings').addEventListener('click', () => {
    document.getElementById('setting-font-size').value = state.settings.fontSize;
    document.getElementById('setting-font-family').value = state.settings.fontFamily;
    document.getElementById('setting-word-goal').value = state.settings.wordGoal;
    document.getElementById('setting-auto-close').checked = state.settings.autoClose;
    document.getElementById('setting-key-sound').checked = state.settings.keySound;
    openModal(settingsModal);
  });

  document.getElementById('setting-font-size').addEventListener('change', (e) => {
    state.settings.fontSize = parseInt(e.target.value, 10);
    applyEditorSettings();
  });

  document.getElementById('setting-font-family').addEventListener('change', (e) => {
    state.settings.fontFamily = e.target.value;
    applyEditorSettings();
  });

  document.getElementById('setting-word-goal').addEventListener('change', (e) => {
    state.settings.wordGoal = parseInt(e.target.value, 10) || 500;
    saveSettingsToStorage();
    updateStats(editor.value);
  });

  document.getElementById('setting-auto-close').addEventListener('change', (e) => {
    state.settings.autoClose = e.target.checked;
    saveSettingsToStorage();
  });

  document.getElementById('setting-key-sound').addEventListener('change', (e) => {
    state.settings.keySound = e.target.checked;
    saveSettingsToStorage();
  });

  const btnToggleWrap = document.getElementById('btn-toggle-wrap');
  if (btnToggleWrap) {
    btnToggleWrap.addEventListener('click', toggleWordWrap);
  }

  function toggleWordWrap() {
    state.settings.wordWrap = !state.settings.wordWrap;
    applyWordWrap();
    saveSettingsToStorage();
    showToast(`Ajuste de línea: ${state.settings.wordWrap ? 'Activado (Word Wrap)' : 'Desactivado (Horizontal)'}`, 'info');
  }

  function applyWordWrap() {
    editor.classList.toggle('no-wrap', !state.settings.wordWrap);
    if (btnToggleWrap) {
      btnToggleWrap.innerHTML = `<i data-lucide="text-wrap"></i> Wrap: ${state.settings.wordWrap ? 'ON' : 'OFF'}`;
      btnToggleWrap.style.color = state.settings.wordWrap ? 'var(--accent)' : 'var(--text-dim)';
      lucide.createIcons({ root: btnToggleWrap });
    }
  }

  function applyEditorSettings() {
    document.documentElement.style.setProperty('--editor-font-size', `${state.settings.fontSize}px`);
    editor.style.fontFamily = state.settings.fontFamily;
    lineNumbers.style.fontFamily = state.settings.fontFamily;
    applyWordWrap();
    saveSettingsToStorage();
  }

  // Modal Cheatsheet / Guía de Sintaxis
  document.getElementById('btn-show-cheatsheet').addEventListener('click', () => {
    openModal(cheatsheetModal);
  });

  // Selector de pestañas interactivas de la guía
  document.querySelectorAll('.guide-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.guide-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.guide-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`guide-panel-${btn.dataset.guideTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        lucide.createIcons({ root: targetPanel });
      }
    });
  });

  // Botones para cargar las guías oficiales de cada modo en el editor
  document.getElementById('btn-load-universal-guide')?.addEventListener('click', () => {
    closeModal(cheatsheetModal);
    setPlatform('standard');
    createNewDoc('Guia-Universal-Markdown.md', defaultTemplates['universal-guide']);
    showToast('¡Guía Universal cargada en el editor!', 'success');
  });

  document.getElementById('btn-load-discord-guide')?.addEventListener('click', () => {
    closeModal(cheatsheetModal);
    setPlatform('discord');
    createNewDoc('Manual-Discord-Markdown.md', defaultTemplates['discord-guide']);
    showToast('¡Manual de Discord cargado y modo activado!', 'success');
  });

  document.getElementById('btn-load-whatsapp-guide')?.addEventListener('click', () => {
    closeModal(cheatsheetModal);
    setPlatform('whatsapp');
    createNewDoc('Manual-WhatsApp-Markdown.md', defaultTemplates['whatsapp-guide']);
    showToast('¡Manual de WhatsApp cargado y modo activado!', 'success');
  });

  // Botón para cargar guía de apps en el editor
  document.getElementById('btn-load-apps-guide')?.addEventListener('click', () => {
    closeModal(cheatsheetModal);
    createNewDoc('Guia-Apps-Markdown.md', defaultTemplates['apps-guide']);
    showToast('¡Guía completa de Apps cargada en el editor!', 'success');
  });

  // Scroll Sync Toggle
  const btnToggleSyncScroll = document.getElementById('btn-toggle-sync-scroll');
  btnToggleSyncScroll.addEventListener('click', () => {
    state.settings.scrollSync = !state.settings.scrollSync;
    btnToggleSyncScroll.innerHTML = `<i data-lucide="repeat"></i> Scroll Sync: ${state.settings.scrollSync ? 'ON' : 'OFF'}`;
    btnToggleSyncScroll.style.color = state.settings.scrollSync ? 'var(--accent)' : 'var(--text-dim)';
    lucide.createIcons({ root: btnToggleSyncScroll });
    showToast(`Sincronización de scroll ${state.settings.scrollSync ? 'activada' : 'desactivada'}`, 'info');
  });

  document.getElementById('btn-refresh-preview').addEventListener('click', () => {
    renderDocument(true);
    showToast('Vista previa actualizada', 'info');
  });

  // ========================================================
  // 15.5 HISTORIAL DE VERSIONES & BÓVEDA DE ALMACENAMIENTO AVANZADO
  // ========================================================
  let selectedVersionForRestore = null;

  async function openVersionsModal() {
    const activeDoc = getActiveDoc();
    if (!activeDoc) return;
    openModal(versionsModal);
    await loadVersionsListUI(activeDoc.id);
  }

  async function loadVersionsListUI(docId) {
    const listEl = document.getElementById('versions-list');
    const countLabel = document.getElementById('versions-count-label');
    const previewMeta = document.getElementById('version-preview-meta');
    const previewContent = document.getElementById('version-preview-content');
    const restoreBtn = document.getElementById('btn-restore-version');

    selectedVersionForRestore = null;
    if (restoreBtn) restoreBtn.style.display = 'none';

    const versions = await MarkStorageDB.getVersions(docId);
    if (countLabel) {
      countLabel.textContent = `${versions.length} versiones guardadas`;
    }

    if (!versions || !versions.length) {
      listEl.innerHTML = '<div class="toc-empty" style="padding:16px 8px;text-align:center;">No hay versiones registradas aún para esta nota. Guarda un punto de restauración con el botón superior.</div>';
      previewMeta.textContent = 'Sin versiones seleccionadas';
      previewContent.textContent = 'Elige o crea un punto de restauración para ver su contenido.';
      return;
    }

    listEl.innerHTML = '';
    versions.forEach((ver, index) => {
      const item = document.createElement('div');
      item.className = `version-item ${index === 0 ? 'active' : ''}`;
      
      const date = new Date(ver.timestamp);
      const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dateStr = date.toLocaleDateString([], { day: '2-digit', month: 'short' });

      item.innerHTML = `
        <div class="version-item-header">
          <span>${dateStr} • ${timeStr}</span>
          <span class="badge" style="font-size:0.62rem;padding:2px 6px;border-radius:4px;background:var(--bg-hover);color:var(--accent);">${escapeHtml(ver.tag || 'Auto')}</span>
        </div>
        <div class="version-item-meta">
          <span>${ver.length} caracteres</span>
          <span>${ver.title ? escapeHtml(ver.title) : 'Sin título'}</span>
        </div>
      `;

      item.addEventListener('click', () => {
        listEl.querySelectorAll('.version-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        selectVersionForPreview(ver);
      });

      listEl.appendChild(item);
    });

    // Seleccionar automáticamente la más reciente
    selectVersionForPreview(versions[0]);
  }

  function selectVersionForPreview(version) {
    selectedVersionForRestore = version;
    const previewMeta = document.getElementById('version-preview-meta');
    const previewContent = document.getElementById('version-preview-content');
    const restoreBtn = document.getElementById('btn-restore-version');

    const date = new Date(version.timestamp);
    previewMeta.textContent = `${version.title} — ${date.toLocaleString()} (${version.length} car.) [${version.tag || 'Auto'}]`;
    previewContent.textContent = version.content;
    if (restoreBtn) restoreBtn.style.display = 'inline-flex';
  }

  async function createManualSnapshot() {
    const activeDoc = getActiveDoc();
    if (!activeDoc) return;
    const content = editor.value;
    const snapshot = await MarkStorageDB.createSnapshot(activeDoc.id, activeDoc.title, content, 'Punto Manual');
    if (snapshot) {
      showToast('Punto de restauración guardado con éxito', 'success');
      if (versionsModal.classList.contains('show')) {
        await loadVersionsListUI(activeDoc.id);
      }
    } else {
      showToast('No se pudo guardar el snapshot en IndexedDB', 'danger');
    }
  }

  function restoreSelectedVersion() {
    if (!selectedVersionForRestore) return;
    const activeDoc = getActiveDoc();
    if (activeDoc) {
      activeDoc.content = selectedVersionForRestore.content;
      activeDoc.updatedAt = new Date().toISOString();
      editor.value = selectedVersionForRestore.content;
      saveDocsToStorage();
      renderDocument(true);
      closeModal(versionsModal);
      showToast('¡Documento restaurado a la versión seleccionada con éxito!', 'success');
    }
  }

  async function openStorageModal() {
    openModal(storageModal);
    await updateStorageMetricsUI();
  }

  async function updateStorageMetricsUI() {
    try {
      const metrics = await MarkStorageDB.getStorageMetrics();
      const engineEl = document.getElementById('metric-db-engine');
      const countEl = document.getElementById('metric-docs-count');
      const sizeEl = document.getElementById('metric-docs-size');
      const versionsEl = document.getElementById('metric-versions-count');

      if (engineEl) engineEl.textContent = metrics.engine;
      if (countEl) countEl.textContent = `${metrics.docsCount} notas`;
      if (sizeEl) sizeEl.textContent = `${metrics.estKB} estimados`;
      if (versionsEl) versionsEl.textContent = metrics.versionsCount;
    } catch (e) {
      console.warn('Error calculando métricas de almacenamiento:', e);
    }
  }

  async function exportVaultBackup() {
    try {
      const vault = await MarkStorageDB.exportVault();
      const jsonStr = JSON.stringify(vault, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      const link = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      link.download = `MarkStudio_Boveda_Backup_${dateStr}.json`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
      showToast('Bóveda completa descargada con éxito (.json)', 'success');
    } catch (e) {
      showToast('Error al exportar bóveda: ' + e.message, 'danger');
    }
  }

  async function importVaultBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        const result = await MarkStorageDB.importVault(data);
        const activeDoc = getActiveDoc();
        if (activeDoc) {
          editor.value = activeDoc.content;
          docTitleInput.value = activeDoc.title;
        }
        renderDocsList();
        renderDocument(true);
        closeModal(storageModal);
        showToast(`¡Bóveda restaurada con éxito! (${result.docsCount} notas, ${result.versionsCount} versiones)`, 'success');
      } catch (err) {
        showToast('Error al importar bóveda: ' + err.message, 'danger');
      }
    };
    reader.readAsText(file);
  }

  // ========================================================
  // 16. TOAST NOTIFICATIONS
  // ========================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
      success: 'check-circle',
      warning: 'alert-triangle',
      danger: 'x-circle',
      info: 'info'
    };

    toast.innerHTML = `
      <i data-lucide="${icons[type] || 'info'}"></i>
      <span>${escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);
    lucide.createIcons({ root: toast });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  // ========================================================
  // SISTEMA DE ADAPTACIÓN POR PLATAFORMAS (DISCORD & WHATSAPP)
  // ========================================================
  function setPlatform(platform) {
    state.platform = platform;
    localStorage.setItem(STORAGE_PLATFORM_KEY, platform);

    // Actualizar botones de selector
    document.querySelectorAll('.platform-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.platform === platform);
    });

    // Actualizar texto del botón convertir
    const convertBtnText = document.getElementById('convert-btn-text');
    if (convertBtnText) {
      if (platform === 'whatsapp') convertBtnText.textContent = 'Convertir a WhatsApp';
      else if (platform === 'discord') convertBtnText.textContent = 'Convertir a Discord';
      else convertBtnText.textContent = 'Convertir a Normal';
    }

    // Filtro dinámico de la barra de herramientas
    document.querySelectorAll('#toolbar-center [data-platforms]').forEach(el => {
      const allowed = el.dataset.platforms.split(',');
      const isVisible = allowed.includes(platform);
      el.dataset.platformHidden = isVisible ? 'false' : 'true';
    });

    const discordGroup = document.getElementById('discord-specific-group');
    if (discordGroup) {
      discordGroup.style.display = platform === 'discord' ? 'flex' : 'none';
    }

    renderDocument(true);
    showToast(`Modo cambiado a: ${platform === 'whatsapp' ? 'WhatsApp' : platform === 'discord' ? 'Discord' : 'Markdown Normal'}`, 'info');
  }

  function convertDocumentSyntax(targetPlatform) {
    const raw = editor.value;
    let converted = raw;

    if (targetPlatform === 'whatsapp') {
      // 1. Negrita GFM **texto** -> WhatsApp *texto*
      converted = converted.replace(/\*\*([^\*\n]+?)\*\*/g, '*$1*');
      // 2. Tachado GFM ~~texto~~ -> WhatsApp ~texto~
      converted = converted.replace(/~~([^~\n]+?)~~/g, '~$1~');
      // 3. Encabezados: # H1 -> *H1*
      converted = converted.replace(/^#{1,6}\s*(.*)$/gm, '*$1*');
      // 4. Enlaces: [Texto](url) -> Texto (url)
      converted = converted.replace(/\[(.*?)\]\((.*?)\)/g, '$1 ($2)');
      // 5. Spoilers de Discord ||secreto|| -> [Spoiler: secreto]
      converted = converted.replace(/\|\|(.*?)\|\|/g, '[Spoiler: $1]');
      // 6. Subrayado de Discord __texto__ -> _texto_
      converted = converted.replace(/__([^_]+?)__/g, '_$1_');
      // 7. Checklists: - [ ] -> •
      converted = converted.replace(/^(\s*)[-*+]\s*\[[ xX]\]\s*/gm, '$1• ');
      // 8. Tablas GFM -> listas legibles
      converted = converted.replace(/\|(.+)\|/g, (match, content) => {
        if (/^[\s\-:|]+$/.test(content)) return '';
        return content.split('|').map(s => s.trim()).filter(Boolean).join(' • ');
      });

      showToast('Texto convertido al formato nativo de WhatsApp (*negrita*, _cursiva_)', 'success');
    } else if (targetPlatform === 'discord') {
      // De WhatsApp ~texto~ a Discord ~~texto~~
      converted = converted.replace(/(^|[^\~])\~([^\~\n]+?)\~([^\~]|$)/g, '$1~~$2~~$3');
      // De WhatsApp *texto* a Discord **texto**
      converted = converted.replace(/(^|[^\*\s])\*([^\*\n]+?)\*([^\*\s]|$)/g, '$1**$2**$3');
      showToast('Texto adaptado al formato de Discord', 'success');
    } else if (targetPlatform === 'standard') {
      // De WhatsApp a Estándar
      converted = converted.replace(/(^|[^\~])\~([^\~\n]+?)\~([^\~]|$)/g, '$1~~$2~~$3');
      converted = converted.replace(/(^|[^\*])\*([^\*\n]+?)\*([^\*]|$)/g, '$1**$2**$3');
      showToast('Texto restaurado a Markdown Estándar GFM', 'success');
    }

    editor.value = converted;
    renderDocument(true);
  }

  // ========================================================
  // 17. ARRANQUE DE LA APLICACIÓN
  // ========================================================
  function initApp() {
    loadPersistedState();
    setTheme(state.theme);
    applyEditorSettings();

    const currentDoc = getActiveDoc();
    if (currentDoc) {
      editor.value = currentDoc.content;
      docTitleInput.value = currentDoc.title;
    }

    renderDocsList();
    bindScrollSync();
    setPlatform(state.platform);

    // Event Listeners de Plataforma
    document.querySelectorAll('.platform-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setPlatform(btn.dataset.platform);
      });
    });

    document.getElementById('btn-convert-syntax')?.addEventListener('click', () => {
      convertDocumentSyntax(state.platform);
    });

    document.getElementById('copy-whatsapp')?.addEventListener('click', () => {
      let text = editor.value;
      if (state.platform !== 'whatsapp') {
        text = text
          .replace(/\*\*([^\*\n]+?)\*\*/g, '*$1*')
          .replace(/~~([^~\n]+?)~~/g, '~$1~')
          .replace(/^#{1,6}\s*(.*)$/gm, '*$1*')
          .replace(/\[(.*?)\]\((.*?)\)/g, '$1 ($2)');
      }
      navigator.clipboard.writeText(text).then(() => {
        showToast('¡Texto copiado listo para pegar en WhatsApp! (*negrita*, _cursiva_)', 'success');
      });
    });

    document.getElementById('copy-discord')?.addEventListener('click', () => {
      let text = editor.value;
      navigator.clipboard.writeText(text).then(() => {
        showToast('¡Texto copiado listo para Discord! (con spoilers y menciones)', 'success');
      });
    });

    // Event Listeners de Historial de Versiones & Bóveda IndexedDB
    document.getElementById('btn-open-history')?.addEventListener('click', openVersionsModal);
    document.getElementById('btn-create-snapshot-now')?.addEventListener('click', createManualSnapshot);
    document.getElementById('btn-restore-version')?.addEventListener('click', restoreSelectedVersion);

    document.getElementById('btn-storage-dashboard')?.addEventListener('click', openStorageModal);
    document.getElementById('btn-export-vault')?.addEventListener('click', exportVaultBackup);
    document.getElementById('btn-force-checkpoint')?.addEventListener('click', async () => {
      await createManualSnapshot();
      await updateStorageMetricsUI();
    });

    const vaultImportInput = document.getElementById('vault-import-input');
    if (vaultImportInput) {
      vaultImportInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          importVaultBackup(e.target.files[0]);
          vaultImportInput.value = '';
        }
      });
    }

    // Inicializar IndexedDB en segundo plano y poblar estado inicial si es necesario
    MarkStorageDB.init().then(async (db) => {
      const storageStatusEl = document.getElementById('storage-status-text');
      if (storageStatusEl) {
        storageStatusEl.textContent = db ? 'IndexedDB Activo' : 'LocalStorage Espejo';
      }

      if (db) {
        // Asegurar que los documentos actuales estén respaldados en IndexedDB
        const storedDocs = await MarkStorageDB.getAllDocs();
        if (!storedDocs || storedDocs.length === 0) {
          state.docs.forEach(doc => MarkStorageDB.saveDoc(doc));
        }
        // Crear snapshot base inicial si no hay versiones
        const activeDoc = getActiveDoc();
        if (activeDoc) {
          const versions = await MarkStorageDB.getVersions(activeDoc.id);
          if (!versions.length) {
            await MarkStorageDB.createSnapshot(activeDoc.id, activeDoc.title, activeDoc.content, 'Base');
          }
        }
      }
    });

    // Sincronización de URL limpia /home (Vercel & SPA Friendly)
    try {
      const currentPath = window.location.pathname;
      if (currentPath === '/' || currentPath.endsWith('/index.html') || window.location.hash === '#/home') {
        const basePath = currentPath.includes('/markstudio-pro') ? '/markstudio-pro' : '';
        window.history.replaceState({ page: 'home' }, '', `${basePath}/home`);
      }
    } catch (e) {
      // Entornos con restricciones de protocolo de archivo
    }

    lucide.createIcons();
    updateCursorPos();
  }

  // Arrancar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();

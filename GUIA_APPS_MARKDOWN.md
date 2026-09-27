# 📚 Guía Definitiva de Markdown en Aplicaciones Populares
> **MarkStudio Pro Knowledge Base** • Análisis exhaustivo de dialectos, particularidades y compatibilidad entre plataformas.

---

## 🧭 Índice de Aplicaciones
1. [GitHub Flavored Markdown (GFM) — El Estándar Técnico](#1-github-flavored-markdown-gfm)
2. [Discord — Markdown para Comunidades & Chat Gamer](#2-discord)
3. [WhatsApp — Marcado Ultraligero para Móviles](#3-whatsapp)
4. [Telegram — MarkdownV2 & Entidades Ricas](#4-telegram)
5. [Slack — El Dialecto Propietario mrkdwn](#5-slack-mrkdwn)
6. [Reddit — Snoo-Flavored Markdown](#6-reddit)
7. [Obsidian & Logseq — Markdown para PKM & Wikilinks](#7-obsidian--herramientas-pkm)
8. [Notion — Markdown Basado en Bloques Interactivos](#8-notion)
9. [Jira & Confluence — Atlassian Markup Tradicional](#9-jira--confluence)
10. [📊 Matriz Comparativa Universal de Sintaxis](#10-matriz-comparativa-universal)
11. [🔄 Reglas de Conversión y Adaptación](#11-reglas-de-conversión)

---

## 1. GitHub Flavored Markdown (GFM)
**Estándar de referencia** en la industria del software y base de MarkStudio Pro.

### 🌟 Funciones Exclusivas y Destacadas
- **Alertas / Callouts Visuales:**
  ```markdown
  > [!NOTE]
  > Información contextual útil.
  
  > [!TIP]
  > Buenas prácticas y optimizaciones.
  
  > [!WARNING]
  > Advertencias críticas de configuración.
  ```
- **Checklists Interactivas:** `- [ ] Pendiente` y `- [x] Completado`.
- **Tablas Completas con Alineación:**
  ```markdown
  | Izquierda | Centro | Derecha |
  | :--- | :---: | ---: |
  | Dato A | Dato B | Dato C |
  ```
- **Diagramas Mermaid Integrados:** Bloques ````mermaid ... ```` para diagramas de flujo, secuencia y arquitecturas.
- **Fórmulas Matemáticas KaTeX:** Soporte nativo de `$E=mc^2$` y `$$\int x dx$$`.
- **Menciones Automáticas:** `@usuario`, `#123` (issues/PRs), hashes SHA de commits.

---

## 2. Discord
Discord utiliza una versión personalizada de Markdown optimizada para chat rápido, soporte multimedia y accesibilidad en canales.

### 🌟 Funciones Exclusivas de Discord
- **Spoilers de Contenido:** Oculta spoilers con dos barras verticales. Se revela haciendo clic.
  ```markdown
  El asesino de la película es ||el mayordomo||.
  ```
- **Subrayado Nativo:** Dos guiones bajos continuos.
  ```markdown
  __Texto importante subrayado__
  ```
- **Citas Multilínea Globales (`>>>`):**
  ```markdown
  >>> Toda esta sección y las siguientes líneas
  quedan dentro de la misma cita sin tener que poner > en cada línea.
  ```
- **Encabezados Reducidos (Solo H1, H2, H3):**
  ```markdown
  # Encabezado Grande
  ## Encabezado Mediano
  ### Encabezado Pequeño
  ```
  *(Discord no soporta `#` de nivel 4 a 6).*
- **Timestamps Dinámicos Adaptados a la Zona Horaria Local:**
  ```markdown
  La reunión empieza en <t:1774735200:R> (tiempo relativo) o <t:1774735200:F> (fecha completa).
  ```
- **Resaltado de Sintaxis en Bloques de Código:**
  Discord colorea más de 100 lenguajes (` ```js `, ` ```python `, ` ```ansi ` para texto coloreado con códigos ANSI).

---

## 3. WhatsApp
WhatsApp implementa un sistema de marcado ultraligero diseñado para teclearse cómodamente en teclados táctiles de smartphones.

### ⚠️ Particularidades Críticas
- **Negrita con UN solo asterisco:**
  ```markdown
  *Texto en negrita* (En GFM esto sería cursiva)
  ```
- **Cursiva con guion bajo:**
  ```markdown
  _Texto en cursiva_
  ```
- **Tachado con UNA sola tilde:**
  ```markdown
  ~Texto tachado~ (En GFM se requieren dos: ~~texto~~)
  ```
- **Monoespaciado / Código:**
  ```markdown
  ```Código en fuente monoespaciada```
  ```
- **Listas con viñetas y numeradas:**
  ```markdown
  - Elemento 1
  * Elemento 2
  1. Primero
  2. Segundo
  ```
- **Citas simples:**
  ```markdown
  > Texto citado
  ```
- **🚫 Lo que NO soporta WhatsApp:**
  - No soporta encabezados `#` (se envían como texto plano).
  - No soporta tablas `| ... |`.
  - No soporta enlaces con texto ancla personalizado `[Nombre](url)` (solo detecta URLs crudas como `https://sitio.com`).
  - No soporta imágenes embebidas vía markdown ni fórmulas KaTeX.

---

## 4. Telegram
Telegram cuenta con dos motores de formateo: **HTML** y **MarkdownV2**.

### 🌟 Funciones Exclusivas de Telegram MarkdownV2
- **Spoilers:** Igual que Discord con doble barra vertical:
  ```markdown
  ||Texto con spoiler difuminado||
  ```
- **Subrayado:**
  ```markdown
  __Texto subrayado__
  ```
- **Citas Expandibles / Colapsables:**
  ```markdown
  **> Esta cita es colapsable en la vista previa del chat.
  ```
- **Enlaces con Nombre Personalizado:**
  ```markdown
  [Canal Oficial](https://t.me/ejemplo)
  ```
- **⚠️ Advertencia de Escape en MarkdownV2:**
  Todos los caracteres especiales `_ * [ ] ( ) ~ > # + - = | { } . !` deben escaparse con una barra invertida `\` si no forman parte de una etiqueta de formato. Por ello, muchos bots prefieren generar formato HTML en Telegram.

---

## 5. Slack (mrkdwn)
Slack utiliza su propia variante denominada internamente **mrkdwn**, la cual no es compatible con el estándar CommonMark.

### 🌟 Particularidades de Slack
- **Negrita con asterisco simple:**
  ```markdown
  *Texto en negrita*
  ```
- **Cursiva con guiones bajos:**
  ```markdown
  _Texto en cursiva_
  ```
- **Tachado con una sola tilde:**
  ```markdown
  ~Texto tachado~
  ```
- **Enlaces con formato propietario de corchetes angulares:**
  ```markdown
  <https://ejemplo.com|Texto del Enlace>
  ```
  *(A diferencia de `[Texto](https://ejemplo.com)` de Markdown estándar).*
- **Bloques de código sin resaltado de sintaxis:** Slack soporta ` ```código``` ` pero no colorea por lenguaje.

---

## 6. Reddit (Snoo-flavored Markdown)
Reddit emplea un dialecto propio en sus publicaciones y comentarios.

### 🌟 Funciones Exclusivas de Reddit
- **Superíndice:** Eleva palabras a exponente:
  ```markdown
  x^2 o ^(frase completa elevada)
  ```
- **Spoilers Nativos de Reddit:**
  ```markdown
  >!Este es el final de la serie!<
  ```
  *(Nótese que usa `>!` y `!<`, a diferencia del `||` de Discord y Telegram).*
- **Tablas completas GFM:** Soporta tablas estándar con separadores `|`.
- **Líneas horizontales:** `---` o `***`.

---

## 7. Obsidian & Herramientas PKM
Obsidian, Logseq y plataformas de gestión del conocimiento personal extienden Markdown para crear redes neuronales de notas interconectadas.

### 🌟 Funciones Exclusivas de Obsidian
- **Wikilinks Bidireccionales:**
  ```markdown
  [[Título de la Nota]]
  [[Título de la Nota|Texto Personalizado]]
  [[Título de la Nota#Subencabezado]]
  ```
- **Transclusión / Embeds:** Incrusta el contenido de otra nota o imagen directamente:
  ```markdown
  ![[Notas de Arquitectura]]
  ![[diagrama.png|400]]
  ```
- **Píldoras de Etiquetas (Tags):**
  ```markdown
  #investigación/2026 #prioridad-alta
  ```
- **Callouts Estilizados y Plegables:**
  ```markdown
  > [!INFO]- Haz clic para expandir
  > Contenido oculto por defecto.
  ```
- **KaTeX y Mermaid nativos 100% compatibles con MarkStudio Pro.**

---

## 8. Notion
Notion no almacena texto plano tradicional, sino una estructura jerárquica de bloques (*Blocks*), pero permite importar, exportar y teclear atajos de Markdown al vuelo.

### 🌟 Particularidades en Notion
- **Listas Plegables (Toggle Lists):**
  ```markdown
  > Toggle List (Escribir `> ` y presionar Espacio)
  ```
- **Llamadas Destacadas (Callouts con Emoji):** Escribe `/callout` o importa bloques tipo blockquote.
- **Ecuaciones Matemáticas en Bloque e Inline:** Soporta `$$formula$$` convirtiéndolo a un bloque LaTeX editable visualmente.
- **Bases de Datos Embebidas:** Las tablas de Markdown importadas pueden convertirse en bases de datos con filtros, vistas Kanban y calendarios.

---

## 9. Jira & Confluence (Atlassian Wiki Markup)
En entornos corporativos, las versiones heredadas de Jira y Confluence utilizan un motor propio (*Atlassian Wiki Syntax*), mientras que las versiones modernas soportan CommonMark híbrido.

### 🌟 Sintaxis Atlassian Tradicional
- **Negrita:** `*negrita*`
- **Cursiva:** `_cursiva_`
- **Subrayado:** `+subrayado+`
- **Tachado:** `-tachado-`
- **Superíndice / Subíndice:** `^super^` y `~sub~`
- **Bloques de código:** `{code:javascript} ... {code}`
- **Paneles de advertencia:** `{panel:title=Alerta} ... {panel}`

---

## 10. 📊 Matriz Comparativa Universal

| Función | GFM / Normal | Discord | WhatsApp | Telegram | Slack | Reddit |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Negrita** | `**texto**` | `**texto**` | `*texto*` | `*texto*` | `*texto*` | `**texto**` |
| **Cursiva** | `*texto*` / `_texto_` | `*texto*` / `_texto_` | `_texto_` | `_texto_` | `_texto_` | `*texto*` / `_texto_` |
| **Tachado** | `~~texto~~` | `~~texto~~` | `~texto~` | `~texto~` | `~texto~` | `~~texto~~` |
| **Subrayado** | `<u>texto</u>` (HTML) | `__texto__` | ❌ No soporta | `__texto__` | ❌ No soporta | ❌ No soporta |
| **Spoiler** | ❌ No nativo | `\|\|texto\|\|` | ❌ No soporta | `\|\|texto\|\|` | ❌ No soporta | `>!texto!<` |
| **Encabezados** | `# H1` a `###### H6` | `# H1` a `### H3` | ❌ (*Negrita*) | ❌ (*Negrita*) | ❌ (*Negrita*) | `# H1` a `###### H6` |
| **Código Inline** | `` `código` `` | `` `código` `` | ```` ```código``` ```` | `` `código` `` | `` `código` `` | `` `código` `` |
| **Bloque Código** | ```` ```lang ... ``` ```` | ```` ```lang ... ``` ```` | ```` ``` ... ``` ```` | ```` ```lang ... ``` ```` | ```` ``` ... ``` ```` | ```` ```lang ... ``` ```` |
| **Cita simple** | `> cita` | `> cita` | `> cita` | `> cita` | `> cita` | `> cita` |
| **Cita multilínea** | `> línea 1`<br>`> línea 2` | `>>> todo el texto` | `> línea 1`<br>`> línea 2` | `**> expandible` | `>>> todo el texto` | `> línea 1`<br>`> línea 2` |
| **Enlaces** | `[Texto](url)` | `[Texto](url)` | Solo `https://...` | `[Texto](url)` | `<url\|Texto>` | `[Texto](url)` |
| **Tablas** | `\| A \| B \|` | ❌ En bloque código | ❌ Solo listas | ❌ Solo listas | ❌ Solo listas | `\| A \| B \|` |
| **KaTeX Math** | `$x^2$` / `$$...$$` | ❌ En bloque código | ❌ No soporta | ❌ No soporta | ❌ No soporta | ❌ No soporta |
| **Diagramas** | ```` ```mermaid ```` | ❌ No soporta | ❌ No soporta | ❌ No soporta | ❌ No soporta | ❌ No soporta |

---

## 11. 🔄 Reglas de Conversión y Adaptación

### De GFM a WhatsApp:
1. Reemplazar `**palabra**` por `*palabra*`.
2. Reemplazar `~~palabra~~` por `~palabra~`.
3. Transformar encabezados `# Titulo` a `*Titulo*`.
4. Traducir enlaces `[Nombre](url)` a `Nombre (url)`.
5. Desarmar tablas `| Col |` en listas simples con viñetas `•`.

### De GFM a Discord:
1. Mantener `**negrita**` y `~~tachado~~`.
2. Convertir etiquetas `<u>texto</u>` a `__texto__`.
3. Limitar encabezados de nivel 4 o superior a `### H3`.
4. Añadir `||spoilers||` para notas confidenciales.

> **💡 Consejo en MarkStudio Pro:**  
> Puedes alternar entre las pestañas **Normal**, **Discord** y **WhatsApp** en la barra superior. El botón **"Convertir Sintaxis"** aplicará automáticamente estas reglas de conversión en tu documento activo.

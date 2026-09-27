# 🚀 La Guía Definitiva y Demostración Total de Markdown

---

## 📑 Índice Rápido

1. [Jerarquía de Encabezados](#-jerarquía-de-encabezados)
2. [Estilos y Formato de Texto](#-estilos-y-formato-de-texto)
3. [Citas y Bloques de Alerta](#-citas-y-bloques-de-alerta)
4. [Listas Variadas y Tareas](#-listas-variadas-y-tareas)
5. [Tablas con Alineación](#-tablas-con-alineación)
6. [Bloques de Código y Sintaxis](#-bloques-de-código-y-sintaxis)
7. [Fórmulas Matemáticas ($\LaTeX$)](#-fórmulas-matemáticas-latex)
8. [Elementos Interactivos y Avanzados](#-elementos-interactivos-y-avanzados)

---

## 🏷️ Jerarquía de Encabezados

# Encabezado Nivel 1 (`# H1`)

## Encabezado Nivel 2 (`## H2`)

### Encabezado Nivel 3 (`### H3`)

#### Encabezado Nivel 4 (`#### H4`)

##### Encabezado Nivel 5 (`##### H5`)

###### Encabezado Nivel 6 (`###### H6`)

---

## ✒️ Estilos y Formato de Texto

El texto puede enriquecerse de múltiples formas:

* **Texto en negrita** usando `**texto**` o `__texto__`.
* *Texto en cursiva* usando `*texto*` o `_texto_`.
* ***Texto en negrita y cursiva*** usando `***texto***`.
* ~~Texto tachado~~ usando `~~texto~~`.
* Texto con <mark>resaltado especial</mark> usando `<mark>texto</mark>`.
* Texto en <u>subrayado</u> usando `<u>texto</u>`.
* Fórmulas químicas o anotaciones: H<sub>2</sub>O (`<sub>2</sub>`) y E = mc<sup>2</sup> (`<sup>2</sup>`).
* Texto en formato de código en línea: `const saludar = "¡Hola Mundo!";`.
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
| `#001` | *Core Engine* | `Rust` | 🟢 Listo | `100%` | **$12,500.00** |
| `#002` | *Web Frontend* | `TypeScript` | 🟡 En proceso | `65%` | **$8,200.50** |
| `#003` | *API Gateway* | `Go` | 🔴 Pendiente | `10%` | **$4,000.00** |
| `#004` | *Data Pipeline* | `Python` | 🟢 Listo | `100%` | **$15,300.75** |

---

## 💻 Bloques de Código y Sintaxis

### 🐍 Python

```python
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
```

### ⚡ JSON Estructurado

```json
{
  "usuario": "dev_explorer",
  "configuracion": {
    "tema": "dracula-dark",
    "fontSize": 14,
    "ligaduras": true
  },
  "tags": ["markdown", "cheatsheet", "full-power"]
}
```

### 🐚 Comando de Terminal (Bash)

```bash
# Clonar y entrar al repositorio
git clone https://github.com/ejemplo/markdown-power.git
cd markdown-power && npm install

# Ejecutar tests
npm run test:all -- --verbose
```

---

## 🧮 Fórmulas Matemáticas ($\LaTeX$)

Expresión en línea: El teorema de Pitágoras define que $a^2 + b^2 = c^2$.

Ecuación en bloque centrado:

$$f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi)\,e^{2 \pi i \xi x} \,d\xi$$

Distribución normal:

$$P(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2}$$

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

### 🎉 ¡Sorpresa

Este contenido está encapsulado dentro de una etiqueta `<details>`. Es perfecto para:
* Respuestas a preguntas frecuentes (FAQ)
* Logs de depuración largos
* Spoilers de contenido

> Puedes usar cualquier formato de Markdown aquí adentro sin problemas.

</details>

<br>

<details>
<summary>▶ <b>Ver Arquitectura del Flujo</b></summary>

```
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
```

</details>

---

## 📌 Notas al Pie

Markdown permite citar orígenes usando notas al pie[^1] numeradas o descriptivas[^nota-larga].

---

[^1]: Creado originalmente en 2004 por John Gruber y Aaron Swartz.
[^nota-larga]: Esta es una nota explicativa más extensa que se coloca automáticamente al final del documento con un enlace de retorno.

[ref-web]: https://kramdown.gettalong.org/ "Referencia enlazada"

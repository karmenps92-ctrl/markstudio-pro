Aquí tienes **todo** el Markdown y formato compatible en Discord, organizado por categorías:

---

### 1. Formato de Texto Básico

| Efecto | Sintaxis | Ejemplo |
| :--- | :--- | :--- |
| **Cursiva** | `*texto*` o `_texto_` | *cursiva* |
| **Negrita** | `**texto**` | **negrita** |
| **Negrita + Cursiva** | `***texto***` | ***negrita y cursiva*** |
| **Subrayado** | `__texto__` | <u>subrayado</u> |
| **Subrayado + Cursiva** | `__*texto*__` | <u>*subrayado cursiva*</u> |
| **Subrayado + Negrita** | `__**texto**__` | <u>**subrayado negrita**</u> |
| **Subrayado + Negrita + Cursiva** | `__***texto***__` | <u>***todo junto***</u> |
| **Tachado** | `~~texto~~` | ~~tachado~~ |

---

### 2. Spoilers (Ocultar contenido)

Cubre el texto o imagen con una barra negra que se revela al hacer clic.

* **Sintaxis:** `||texto secreto||`
* **Ejemplo:** Al escribir `El asesino es ||el mayordomo||`, la palabra quedará oculta.
* *Nota:* También puedes combinarlo con otros formatos: `||**secreto en negrita**||`.

---

### 3. Encabezados (Headers)

Discord **solo admite hasta el nivel 3**. Es obligatorio dejar un espacio después de los `#`.

* `# Título Gigante (H1)`
* `## Título Mediano (H2)`
* `### Título Pequeño (H3)`

---

### 4. Subtexto / Texto Diminuto

Muestra texto en un tamaño muy pequeño y en tono gris (ideal para aclaraciones, notas al pie o créditos). Requiere un espacio después del guion y la almohadilla:

* **Sintaxis:** `-# Tu texto aquí`
* **Resultado:** Se muestra en tamaño miniatura al final del mensaje.

---

### 5. Citas (Quotes)

* **Cita de una sola línea:**
  Usa `>` seguido de un espacio.

  ```text
  > Esta línea es una cita.
  Esta línea ya no lo es.
  ```

* **Cita multilínea / Bloque completo:**
  Usa `>>>` seguido de un espacio. Todo lo que escribas a continuación (incluso con saltos de línea) será parte de la cita.

  ```text
  >>> Primera línea citada.
  Segunda línea también citada.
  Tercera línea también.
  ```

---

### 6. Listas

Discord admite listas ordenadas y desordenadas (puedes anidarlas usando tabulador o 2 espacios):

* **Lista con viñetas:**

  ```text
  - Elemento 1
  - Elemento 2
    - Sub-elemento (con sangría)
  * También funciona con asterisco
  ```

* **Lista numerada:**

  ```text
  1. Primer paso
  2. Segundo paso
  3. Tercer paso
  ```

---

### 7. Bloques de Código y Sintaxis

* **Código en línea:**
  Encierra el texto entre dos comillas simples invertidas:  
  `` `código aquí` ``

* **Bloque de código multilínea:**
  Encierra el código entre tres comillas invertidas:

  ````text
  ```
  Este es un bloque
  de varias líneas
  ```
  ````

* **Bloque de código con coloreado de sintaxis:**
  Discord soporta coloreado para lenguajes populares (`js`, `py`, `html`, `css`, `json`, `cpp`, `diff`, etc.):

  ````text
  ```python
  def hola():
      print("Hola Discord")
  ```
  ````

* **Colores personalizados con `ansi`:**
  Discord permite colorear texto dentro de bloques de código usando secuencias ANSI:

  ````text
  ```ansi
  [31mTexto en rojo[0m
  [32mTexto en verde[0m
  [34mTexto en azul[0m
  [33mTexto en amarillo[0m
  ```
  ````

---

### 8. Enlaces (Links)

* **Enlace con máscara (Hipervínculo):**
  Puedes ponerle texto a un link en mensajes normales:

  ```text
  [Haz clic aquí](https://discord.com)
  ```

* **Evitar la vista previa / Embed:**
  Si quieres enviar un enlace sin que Discord genere el recuadro gigante de vista previa, enciérralo entre `<` y `>`:

  ```text
  <https://youtube.com>
  ```

---

### 9. Marcas de Tiempo Dinámicas (Timestamps)

No es Markdown estándar, pero es una sintaxis nativa de Discord. Convierte una fecha en la hora local de cada usuario que lee el mensaje usando el formato Unix (`<t:TIMESTAMP:FORMATO>`):

| Sintaxis | Resultado |
| :--- | :--- |
| `<t:1700000000:t>` | Hora corta (ej: `14:30`) |
| `<t:1700000000:T>` | Hora larga con segundos (ej: `14:30:00`) |
| `<t:1700000000:d>` | Fecha corta (ej: `14/11/2023`) |
| `<t:1700000000:D>` | Fecha larga (ej: `14 de noviembre de 2023`) |
| `<t:1700000000:f>` | Fecha y hora corta |
| `<t:1700000000:F>` | Día de la semana, fecha y hora completa |
| `<t:1700000000:R>` | **Tiempo relativo** (ej: `hace 2 horas` o `en 15 minutos`) |

---

### 10. Escapar formato (Anular el Markdown)

Si quieres mostrar un símbolo sin que Discord aplique formato (por ejemplo, mostrar asteriscos literales), coloca una barra invertida `\` justo antes:

* `\*Este texto no será cursiva\*`
* `\# Este texto no será título`
* `\:\)` muestra `:)` sin convertirlo en emoji.

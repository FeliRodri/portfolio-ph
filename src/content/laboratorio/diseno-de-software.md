---
title: "Diseño de Software: Principios que Transforman Ideas en Sistemas Robustos"
pubDate: 2026-04-02
description: "Una exploración de los principios fundamentales del diseño de software, desde la arquitectura limpia hasta los patrones que hacen que el código sea mantenible, escalable y elegante."
author: "Felipe Asenjo"
image:
    url: "../../assets/images/chercan.webp"
    alt: "Un chercán posando entre el cielo y estructuras metálicas, simbolizando la estructura ordenada de un buen diseño de software"
tags: ["software", "diseño", "arquitectura", "buenas prácticas"]
---

## Diseñar Antes de Codificar

Existe una tentación casi irresistible en el desarrollo de software: abrir el editor y empezar a escribir código de inmediato. Todos hemos caído en esa trampa. Pero con los años he aprendido que las mejores soluciones nacen mucho antes de la primera línea de código, nacen en el **diseño**.

El diseño de software no se trata de diagramas bonitos ni de documentos interminables. Se trata de **tomar decisiones deliberadas** sobre cómo organizar la complejidad para que nuestro sistema sea comprensible, modificable y confiable.

---

## Los Pilares del Buen Diseño

### **1. Separación de Responsabilidades (SRP)** 🧩

Cada módulo, cada clase, cada función debería tener **una sola razón para cambiar**. Este principio, parte de los famosos SOLID, es probablemente el más transformador.

Cuando construí este portafolio, por ejemplo, separé claramente:
- **Layouts** → Definen la estructura visual general.
- **Componentes** → Piezas reutilizables con una función específica (Navegación, Footer, ThemeToggle).
- **Páginas** → Ensamblan componentes y contenido para cada ruta.
- **Contenido** → Los datos y textos viven separados de la presentación.

Esta separación permite modificar el diseño visual sin tocar el contenido, o agregar nuevas páginas sin alterar los componentes existentes.

---

### **2. Acoplamiento Bajo, Cohesión Alta** 🔗

Un sistema bien diseñado se compone de módulos que:
- **Saben poco unos de otros** (bajo acoplamiento): Cada pieza puede evolucionar independientemente.
- **Agrupan funcionalidad relacionada** (alta cohesión): Todo lo que pertenece junto, está junto.

Imaginemos una cámara fotográfica como analogía:
- El **lente** se puede cambiar sin modificar el **cuerpo** de la cámara.
- El **sensor** procesa la luz sin saber qué lente la capturó.
- La **tarjeta de memoria** almacena datos sin importar qué sensor los generó.

Cada componente hace bien su trabajo y se comunica con los demás a través de interfaces claras y definidas. Así debería ser nuestro software.

---

### **3. Composición sobre Herencia** 🏗️

Durante años, la programación orientada a objetos nos enseñó a pensar en jerarquías: *"un Pato ES un Ave, un Ave ES un Animal"*. Pero en la práctica, las jerarquías profundas de herencia se vuelven frágiles y difíciles de modificar.

El enfoque moderno favorece la **composición**: construir comportamiento combinando piezas pequeñas e independientes.

```javascript
// En lugar de una jerarquía rígida...
class AnimalVolador extends Animal { ... }
class AnimalNadador extends Animal { ... }
// ¿Y un pato que vuela Y nada?

// Preferimos componer comportamientos
const pato = compose(
  conCapacidadDeVuelo(),
  conCapacidadDeNado(),
  conSonido('cuack')
);
```

Este mismo principio se refleja en frameworks modernos como Astro o React, donde las interfaces se construyen **componiendo** piezas independientes.

---

### **4. Diseño para el Cambio** 🔄

El único constante en el software es el cambio. Los requisitos evolucionan, las tecnologías avanzan, los usuarios descubren necesidades que no sabían que tenían.

Un buen diseño **anticipa el cambio** sin intentar predecirlo:
- **Abstrae lo que varía**: Si sabes que algo cambiará, ponlo detrás de una interfaz.
- **Favorece la configuración sobre la codificación**: Los valores que pueden cambiar no deberían estar hardcodeados.
- **Mantén las decisiones reversibles**: Elige arquitecturas que permitan cambiar de opinión sin reescribir todo.

---

## Patrones que Uso a Diario

### **El Patrón Observador** 👁️

Perfecto para sistemas reactivos. Un componente emite eventos, y otros reaccionan sin conocerse entre sí. Es la base de cómo funciona el cambio de tema oscuro/claro en este portafolio: el botón emite un cambio, y toda la interfaz reacciona.

### **El Patrón Estrategia** 🎯

Definir una familia de algoritmos intercambiables. Por ejemplo, en mi flujo de procesamiento de fotos, puedo intercambiar la estrategia de compresión (WebP, AVIF, JPEG) sin modificar el pipeline general.

### **El Patrón Fachada** 🏛️

Proporcionar una interfaz simplificada a un subsistema complejo. Cuando uso `import.meta.glob` de Astro para cargar todas las imágenes de la galería con una sola línea, estoy aprovechando una fachada que oculta toda la complejidad del sistema de archivos, el bundling y la optimización.

---

## La Conexión con la Fotografía

Curiosamente, los principios del diseño de software tienen **paralelos directos** con la composición fotográfica:

| Diseño de Software | Fotografía |
|---|---|
| Separación de responsabilidades | Regla de los tercios |
| Eliminar código muerto | Simplificar el encuadre |
| Nombrar bien las variables | El título de la foto cuenta la historia |
| Refactorizar constantemente | Editar y re-editar hasta lograr la visión |
| Tests automatizados | Revisar el histograma antes de disparar |

En ambas disciplinas, la excelencia no viene de agregar más, sino de **quitar lo innecesario** hasta que solo quede lo esencial.

---

## Reflexión Final

El diseño de software no es un paso que se hace una vez y se olvida. Es una **práctica continua**, un músculo que se fortalece con cada decisión que tomamos. Cada vez que elegimos un nombre claro para una función, separamos una responsabilidad o simplificamos una interfaz, estamos diseñando.

Como en la fotografía de naturaleza, donde la paciencia y la preparación son tan importantes como el momento del disparo, en el software la calidad del diseño determina la calidad del resultado final.

> *"La simplicidad es la máxima sofisticación."* — Leonardo da Vinci

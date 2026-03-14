# Mi Taller – Backend

Backend de la aplicación **Mi Taller**, un proyecto de aprendizaje para catalogar muebles realizados durante mi etapa como carpintera.

La aplicación permitirá visualizar proyectos de carpintería organizados por categorías (cocinas, armarios, zapateros, baños, etc.), con fichas de proyecto y galerías de fotografías.

El objetivo principal del proyecto no es la rapidez ni la simplicidad, sino **aprender arquitectura backend moderna en JavaScript/TypeScript siguiendo buenas prácticas profesionales**.

---

## Arquitectura prevista

Frontend y backend estarán separados.

Frontend:

- React
- TypeScript
- Vite

Backend:

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

---

## Modelo conceptual inicial

Un proyecto pertenece a una categoría y puede tener varias fotografías.

Ejemplo:

Categoría  
→ Proyectos  
→ Fotografías

---

## Arquitectura de capas

El backend seguirá una arquitectura por capas:

router → controller → service → repository → database

Responsabilidades:

- **router**: define las rutas de la API
- **controller**: recibe las peticiones HTTP
- **service**: contiene la lógica de negocio
- **repository**: acceso a datos mediante ORM
- **database**: SQLite

---

## Objetivos de aprendizaje

Este proyecto se utiliza para practicar:

- Node.js backend
- Express
- TypeScript
- ORM con Prisma
- diseño de APIs
- arquitectura limpia
- testing con Jest
- flujo profesional con Git

---

## Estado del proyecto

Fase inicial: configuración del backend.

# Mi Taller – Backend

Backend de la aplicación **Mi Taller**, un proyecto de aprendizaje cuyo objetivo es catalogar proyectos de carpintería realizados durante mi etapa como carpintera.

La aplicación permitirá visualizar proyectos de carpintería organizados por categorías (cocinas, armarios, zapateros, baños, etc.), con fichas de proyecto y galerías de fotografías.

El objetivo principal del proyecto **no es la velocidad de desarrollo**, sino aprender **arquitectura backend moderna en JavaScript/TypeScript aplicando buenas prácticas profesionales desde el inicio**.

---

# Arquitectura general

La aplicación está diseñada con **frontend y backend desacoplados**.

## Frontend (previsto)

- React
- TypeScript
- Vite

## Backend (actual)

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

---

# Arquitectura del backend

El backend sigue una **arquitectura por capas** para separar responsabilidades.

```
router
↓
controller
↓
service
↓
repository
↓
Prisma Client
↓
database
```

## Responsabilidades

### router

Define las rutas de la API y conecta cada endpoint con su controller.

### controller

Recibe las peticiones HTTP y transforma la respuesta en formato HTTP (JSON, status codes, etc.).

### service

Contiene la lógica de negocio de la aplicación.

### repository

Gestiona el acceso a los datos utilizando Prisma ORM.

### database

Persistencia mediante SQLite.

---

# Estructura del proyecto

```
src
├─ routes/
│  ├─ index.ts
│  └─ project.routes.ts
├─ controllers/
│  └─ project.controller.ts
├─ services/
│  └─ project.service.ts
├─ repositories/
│  └─ project.repository.ts
├─ lib/
│  └─ prisma.ts
├─ app.ts
└─ server.ts
```

---

# Acceso a datos

El acceso a la base de datos se realiza mediante **Prisma ORM**.

Cadena de acceso a datos:

Prisma Client  
↓  
SQLite adapter (better-sqlite3)  
↓  
SQLite database

Existe un **cliente Prisma único** centralizado en:

```
src/lib/prisma.ts
```

Este cliente es utilizado por los repositories para interactuar con la base de datos.

---

# Modelo de datos inicial

Modelo actual definido en Prisma:

```
Project
```

Campos:

```
id
title
category
createdAt
```

Este modelo representa un proyecto de carpintería almacenado en la base de datos.

---

# Migraciones

La estructura de la base de datos se gestiona mediante **migraciones de Prisma**.

```
prisma/schema.prisma
↓
prisma migrate
↓
SQLite database
```

Las migraciones se almacenan en:

```
prisma/migrations/
```

Esto permite reconstruir la base de datos desde el historial de cambios.

---

# Flujo interno de una petición

Flujo interno:

```
routes
↓
controllers
↓
services
↓
repositories
↓
Prisma Client
↓
SQLite
```

Este endpoint se utiliza para verificar que:

- el servidor Express está funcionando
- Prisma puede conectarse correctamente a la base de datos

---

# API implementada

Actualmente la API dispone de un CRUD básico para la entidad **Project**.

Endpoints disponibles:

```
GET     /projects
GET     /projects/:id
POST    /projects
PUT     /projects/:id
DELETE  /projects/:id
```

Ejemplo de respuesta:

```
{
  "id": 1,
  "title": "Cocina roble",
  "category": "kitchen",
  "createdAt": "2026-03-15T17:03:06.773Z"
}
```

---

# Flujo de trabajo con Git

El proyecto utiliza un flujo basado en ramas:

```
main
develop
feature/*
```

- **main** → estado estable del backend
- **develop** → integración de funcionalidades
- **feature/** → desarrollo de cada endpoint o mejora

---

# Objetivos de aprendizaje

Este proyecto se utiliza para practicar:

- Node.js backend
- Express
- TypeScript
- Prisma ORM
- diseño de APIs REST
- arquitectura por capas
- separación de responsabilidades
- migraciones de base de datos
- flujo profesional con Git

---

# Estado actual del proyecto

Infraestructura backend funcional:

- servidor Express configurado
- arquitectura por capas implementada
- Prisma ORM configurado
- SQLite conectada
- sistema de migraciones operativo
- cliente Prisma centralizado
- endpoint `/health` funcional
- CRUD completo para `Project` implementado

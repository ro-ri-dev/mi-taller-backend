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
database
```

## Responsabilidades

**router**

Define las rutas de la API y conecta cada endpoint con su controller.

**controller**

Recibe las peticiones HTTP y transforma la respuesta en formato HTTP (JSON, status codes, etc.).

**service**

Contiene la lógica de negocio de la aplicación.

**repository**

Gestiona el acceso a los datos utilizando Prisma ORM.

**database**

Persistencia mediante SQLite.

---

# Acceso a datos

El acceso a la base de datos se realiza mediante **Prisma ORM**.

La aplicación utiliza la siguiente cadena de acceso a datos:

```
Prisma Client
↓
SQLite adapter (better-sqlite3)
↓
SQLite database
```

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

# Flujo actual de una petición

Ejemplo con el endpoint de salud del sistema:

```
GET /health
```

Flujo interno:

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
SQLite
```

Este endpoint se utiliza para verificar que:

- el servidor Express está funcionando
- Prisma puede conectarse correctamente a la base de datos

---

# Flujo de trabajo con Git

El proyecto utiliza un flujo basado en ramas:

```
main
develop
feature/*
```

- **main** → estado estable del backend
- **develop** → integración de features
- **feature/** → desarrollo de funcionalidades aisladas

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

El siguiente paso del proyecto es implementar los primeros endpoints reales de dominio, comenzando por:

```
GET /projects
```

para consultar proyectos almacenados en la base de datos.

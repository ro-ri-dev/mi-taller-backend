import { prisma } from '../../lib/prisma.js'

async function findAllProjects() {
  return prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

async function createProject(data: { title: string; category: string }) {
  return prisma.project.create({
    data,
  })
}

async function findProjectById(id: number) {
  return prisma.project.findUnique({
    where: {
      id,
    },
  })
}
export { findAllProjects, createProject, findProjectById }

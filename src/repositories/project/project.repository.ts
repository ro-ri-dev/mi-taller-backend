import { prisma } from '../../lib/prisma.js'

export async function findAllProjects() {
  return prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

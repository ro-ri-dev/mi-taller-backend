import { prisma } from '../lib/prisma.js'

export async function findHealthStatus() {
  await prisma.$queryRaw`SELECT 1`
  return { status: 'ok' }
}

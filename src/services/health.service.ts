import { findHealthStatus } from '../repositories/health.repository.js'

export async function getHealthStatus() {
  return findHealthStatus()
}

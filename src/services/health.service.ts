import { findHealthStatus } from '../repositories/health.repository.js'

export function getHealthStatus() {
  return findHealthStatus()
}

import type { Request, Response } from 'express'
import { getHealthStatus } from '../services/health.service.js'

export function healthCheck(_req: Request, res: Response) {
  const result = getHealthStatus()
  res.json(result)
}

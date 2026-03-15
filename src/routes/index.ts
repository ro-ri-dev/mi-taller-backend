import { Router } from 'express'
import { healthCheck } from '../controllers/health.controller.js'
import projectRoutes from '../repositories/project/project.routes.js'

const router = Router()

router.use(projectRoutes)

router.get('/health', healthCheck)

export default router

import { Router } from 'express'
import { getProjects } from './project.controller.js'

const router = Router()

router.get('/projects', getProjects)

export default router

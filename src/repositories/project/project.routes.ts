import { Router } from 'express'
import { getProjects, createProject } from './project.controller.js'

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)

export default router

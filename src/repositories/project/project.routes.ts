import { Router } from 'express'
import { getProjects, createProject, getProject } from './project.controller.js'

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.get('/projects/:id', getProject)

export default router

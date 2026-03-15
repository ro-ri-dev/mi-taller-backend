import { Router } from 'express'
import {
  getProjects,
  createProject,
  getProject,
  updateProject,
} from './project.controller.js'

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.get('/projects/:id', getProject)
router.put('/projects/:id', updateProject)

export default router

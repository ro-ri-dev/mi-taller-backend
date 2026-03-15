import { Router } from 'express'
import {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from './project.controller.js'

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.get('/projects/:id', getProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)

export default router

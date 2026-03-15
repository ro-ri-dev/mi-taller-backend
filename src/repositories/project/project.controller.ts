import type { Request, Response } from 'express'
import {
  getAllProjects,
  createNewProject,
  getProjectById,
  updateExistingProject,
  deleteExistingProject,
} from './project.service.js'

async function getProjects(req: Request, res: Response) {
  try {
    const projects = await getAllProjects()

    res.json(projects)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to fetch projects',
    })
  }
}
async function createProject(req: Request, res: Response) {
  try {
    const { title, category } = req.body

    const project = await createNewProject({
      title,
      category,
    })

    res.status(201).json(project)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to create project',
    })
  }
}

async function getProject(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)

    const project = await getProjectById(id)

    if (!project) {
      res.status(404).json({
        error: 'Project not found',
      })
      return
    }

    res.json(project)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to fetch project',
    })
  }
}

async function updateProject(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    const { title, category } = req.body

    const project = await updateExistingProject(id, {
      title,
      category,
    })

    res.json(project)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to update project',
    })
  }
}

async function deleteProject(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)

    await deleteExistingProject(id)

    res.json({
      message: 'Project deleted',
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to delete project',
    })
  }
}

export { getProjects, createProject, getProject, updateProject, deleteProject }

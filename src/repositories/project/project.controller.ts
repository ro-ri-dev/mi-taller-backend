import type { Request, Response } from 'express'
import { getAllProjects, createNewProject } from './project.service.js'

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
export { getProjects, createProject }

import type { Request, Response } from 'express'
import { getAllProjects } from './project.service.js'

export async function getProjects(req: Request, res: Response) {
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

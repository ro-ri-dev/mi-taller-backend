import { findAllProjects, createProject } from './project.repository.js'

async function getAllProjects() {
  return findAllProjects()
}

async function createNewProject(data: { title: string; category: string }) {
  return createProject(data)
}

export { getAllProjects, createNewProject }

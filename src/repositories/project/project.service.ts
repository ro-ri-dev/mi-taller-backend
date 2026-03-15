import {
  findAllProjects,
  createProject,
  findProjectById,
} from './project.repository.js'

async function getAllProjects() {
  return findAllProjects()
}

async function createNewProject(data: { title: string; category: string }) {
  return createProject(data)
}

async function getProjectById(id: number) {
  return findProjectById(id)
}

export { getAllProjects, createNewProject, getProjectById }

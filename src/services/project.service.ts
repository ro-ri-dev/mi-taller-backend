import {
  findAllProjects,
  createProject,
  findProjectById,
  updateProject,
  deleteProject,
} from '../repositories/project.repository.js'

async function getAllProjects() {
  return findAllProjects()
}

async function createNewProject(data: { title: string; category: string }) {
  return createProject(data)
}

async function getProjectById(id: number) {
  return findProjectById(id)
}

async function updateExistingProject(
  id: number,
  data: {
    title: string
    category: string
  }
) {
  return updateProject(id, data)
}

async function deleteExistingProject(id: number) {
  return deleteProject(id)
}
export {
  getAllProjects,
  createNewProject,
  getProjectById,
  updateExistingProject,
  deleteExistingProject,
}

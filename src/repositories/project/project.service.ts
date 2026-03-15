import { findAllProjects } from './project.repository.js'

export async function getAllProjects() {
  return findAllProjects()
}

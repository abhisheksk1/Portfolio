import express, { Router, Request, Response } from 'express'

const router: Router = express.Router()

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
}

// Mock projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A React project with amazing features',
    technologies: ['React', 'Vite', 'CSS']
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Full-stack application using Express',
    technologies: ['Express', 'MongoDB', 'React']
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Real-time collaboration platform',
    technologies: ['WebSockets', 'Node.js', 'React']
  }
]

// GET /projects - Get all projects
router.get('/', (_req: Request, res: Response): void => {
  res.json(projects)
})

// GET /projects/:id - Get single project
router.get('/:id', (req: Request, res: Response): void => {
  const projectId = parseInt(req.params.id as string)
  const project = projects.find(p => p.id === projectId)
  if (!project) {
    res.status(404).json({ error: 'Project not found' })
    return
  }
  res.json(project)
})

export default router

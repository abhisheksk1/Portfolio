import express from 'express'

const router = express.Router()

// Mock projects data
const projects = [
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
router.get('/', (req, res) => {
  res.json(projects)
})

// GET /projects/:id - Get single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id))
  if (!project) {
    return res.status(404).json({ error: 'Project not found' })
  }
  res.json(project)
})

export default router

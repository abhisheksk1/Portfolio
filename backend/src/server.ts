import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import projectRoutes from './routes/projects.js'

dotenv.config()

const app: Express = express()
const PORT: string | number = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())

// Routes
app.use('/contact', contactRoutes)
app.use('/projects', projectRoutes)

// Health check
app.get('/health', (_req: Request, res: Response): void => {
  res.json({ status: 'Server is running' })
})

// 404 handler
app.use((_req: Request, res: Response): void => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

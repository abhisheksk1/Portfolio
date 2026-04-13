import express, { Router, Request, Response } from 'express'

const router: Router = express.Router()

// POST /contact - Handle contact form submissions
router.post('/', (req: Request, res: Response): void => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  console.log('Contact form submission:', { name, email, message })
  
  // TODO: Save to database or send email
  res.json({ success: true, message: 'Message received' })
})

export default router

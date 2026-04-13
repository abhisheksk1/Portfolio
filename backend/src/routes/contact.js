import express from 'express'

const router = express.Router()

// POST /contact - Handle contact form submissions
router.post('/', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  console.log('Contact form submission:', { name, email, message })
  
  // TODO: Save to database or send email
  res.json({ success: true, message: 'Message received' })
})

export default router

import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="reveal">
        <h2 className="contact-heading">Let's <span className="accent">Connect</span></h2>
        <p className="contact-sub">Open to QA Automation Engineer and SDET opportunities across India (remote or hybrid).</p>
        <div className="contact-links">
          <a href="mailto:abhishekkumar9304843750@gmail.com" className="contact-link">
            <span className="contact-link-icon">@</span> abhishekkumar9304843750@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-pandey-baa2041b8/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">in</span> LinkedIn
          </a>
          <a href="https://github.com/abhisheksk1" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">{}</span> GitHub
          </a>
          <a href="tel:+919570024301" className="contact-link">
            <span className="contact-link-icon">#</span> +91 9570024301
          </a>
        </div>
      </div>
    </section>
  )
}

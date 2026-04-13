import React from 'react'
import './Footer.css'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer>
      <p>Abhishek Kumar Pandey — QA Automation Engineer — built <span>{currentYear}</span></p>
    </footer>
  )
}

import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>Abhishek Kumar Pandey — QA Automation Engineer — built <span>{currentYear}</span></p>
    </footer>
  )
}

import React from 'react'
import './Header.css'

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="nav-logo">akp<span>@</span>portfolio<span>:~$</span></div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#skills">skills</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

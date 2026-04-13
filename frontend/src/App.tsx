import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(): JSX.Element {
  useEffect(() => {
    // Scroll reveal functionality
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [])

  return (
    <>
      <div className="grid-bg"></div>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

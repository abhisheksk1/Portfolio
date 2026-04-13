import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'API Testing Framework',
      description: 'A JavaScript-based API automation framework covering full CRUD operations (GET, POST, PUT, DELETE) with reusable utilities. Validates HTTP response codes 200, 400, 401, 403, 404, 409, and 500 with structured Mocha-Chai assertions.',
      technologies: ['Playwright', 'JavaScript', 'Mocha-Chai', 'Axios', 'REST APIs']
    },
    {
      id: 2,
      name: 'Parking Slot Detection System',
      description: 'Real-time parking slot detection using image processing and machine learning. Applied computer vision algorithms including edge detection and contour analysis for accurate slot classification under varying lighting conditions.',
      technologies: ['Java', 'Computer Vision', 'Machine Learning', 'Image Processing']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card reveal">
            <div className="project-num">project_{String(project.id).padStart(2, '0')}</div>
            <div className="project-name">{project.name}</div>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-tech">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

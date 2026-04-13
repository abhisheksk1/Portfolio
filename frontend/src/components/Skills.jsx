import './Skills.css'

export default function Skills() {
  const skillGroups = [
    {
      label: 'Test Automation',
      skills: [
        { name: 'Playwright', hot: true },
        { name: 'TypeScript', hot: true },
        { name: 'REST Assured', hot: true },
        { name: 'Selenium' },
        { name: 'Cucumber' },
        { name: 'Mocha-Chai' },
        { name: 'Postman' },
        { name: 'Axios' }
      ]
    },
    {
      label: 'Languages',
      skills: [
        { name: 'JavaScript', hot: true },
        { name: 'TypeScript', hot: true },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'SQL' }
      ]
    },
    {
      label: 'CI/CD & DevOps',
      skills: [
        { name: 'Azure DevOps', hot: true },
        { name: 'Jenkins', hot: true },
        { name: 'GitHub Actions' },
        { name: 'Git' },
        { name: 'Azure Dashboards' }
      ]
    },
    {
      label: 'Tools & Databases',
      skills: [
        { name: 'GitHub Copilot', hot: true },
        { name: 'JIRA' },
        { name: 'JMeter' },
        { name: 'MySQL' },
        { name: 'MongoDB' }
      ]
    },
    {
      label: 'Methodologies',
      skills: [
        { name: 'Agile / Scrum' },
        { name: 'BDD' },
        { name: 'Page Object Model' },
        { name: 'SDLC / STLC' },
        { name: 'Cross-browser Testing' }
      ]
    },
    {
      label: 'Frontend (Bonus)',
      skills: [
        { name: 'React.js' },
        { name: 'HTML / CSS' },
        { name: 'UI Validation' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid reveal">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-card-label">{group.label}</div>
            <div className="skill-tags">
              {group.skills.map((skill, i) => (
                <span key={i} className={`skill-tag ${skill.hot ? 'hot' : ''}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

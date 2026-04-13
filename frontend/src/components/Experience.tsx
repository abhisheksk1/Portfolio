import React from 'react'
import './Experience.css'

interface ExperienceBullet {
  text: string
}

interface ExperienceItem {
  period: string
  company: string
  type: string
  role: string
  bullets: string[]
  tags: string[]
}

export default function Experience(): JSX.Element {
  const experiences: ExperienceItem[] = [
    {
      period: 'Apr 2024 — Mar 2026',
      company: 'Keym Tech Pvt Ltd',
      type: 'Full-time · India',
      role: 'Test Automation Engineer',
      bullets: [
        'Designed and implemented a Playwright + TypeScript POM framework from scratch, enabling reusable, maintainable automation across multiple product modules.',
        'Automated 120+ end-to-end UI and API scenarios, pushing regression coverage from ~30% to 75% across 4 application modules.',
        'Integrated test suite into Azure DevOps and Jenkins CI/CD pipelines, cutting the manual regression cycle from 3 days to 6 hours.',
        'Reduced test flakiness from ~20% to under 4% via stable selectors, explicit waits, and retry logic across Chromium, Firefox, and WebKit.',
        'Accelerated test script delivery by ~40% using GitHub Copilot for AI-assisted generation.',
        'Executed API testing with REST Assured and Postman across 40+ endpoints, validating response codes, schemas, and data integrity.'
      ],
      tags: ['Playwright', 'TypeScript', 'REST Assured', 'Azure DevOps', 'Jenkins', 'GitHub Copilot', 'JIRA', 'Agile']
    },
    {
      period: 'Jan 2022 — Mar 2022',
      company: 'Mayil Technology',
      type: 'Internship · Remote',
      role: 'Software Developer Intern',
      bullets: [
        'Collaborated with development engineers to test product features and validate bug fixes against requirements.',
        'Conducted root cause analysis for reported defects, supporting structured debugging and documentation.'
      ],
      tags: ['Manual Testing', 'Bug Analysis', 'Root Cause Analysis']
    },
    {
      period: 'Sep 2021 — Dec 2021',
      company: 'Crediometer Pvt Ltd',
      type: 'Internship · Remote',
      role: 'Front-End Developer Intern',
      bullets: [
        'Built frontend features using React.js and supported cross-browser UI validation.',
        'Assisted in UI/UX improvements, delivering accessible and functional user interfaces.'
      ],
      tags: ['React.js', 'HTML/CSS', 'UI Validation']
    }
  ]

  return (
    <section id="experience">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>

      <div className="exp-list">
        {experiences.map((exp: ExperienceItem, idx: number) => (
          <div key={idx} className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-type">{exp.type}</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((tag: string, i: number) => (
                  <span key={i} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

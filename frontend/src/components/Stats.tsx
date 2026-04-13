import React from 'react'
import './Stats.css'

interface Stat {
  num: string
  label: string
}

export default function Stats(): JSX.Element {
  const stats: Stat[] = [
    { num: '2+', label: 'Years Experience' },
    { num: '120+', label: 'Tests Automated' },
    { num: '75%', label: 'Regression Coverage' },
    { num: '<4%', label: 'Flakiness Rate' },
    { num: '3', label: 'Browsers Covered' }
  ]

  return (
    <section id="stats">
      <div className="stats-row reveal">
        {stats.map((stat: Stat, idx: number) => (
          <div key={idx} className="stat-card">
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

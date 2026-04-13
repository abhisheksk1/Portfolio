import './Stats.css'

export default function Stats() {
  const stats = [
    { num: '2+', label: 'Years Experience' },
    { num: '120+', label: 'Tests Automated' },
    { num: '75%', label: 'Regression Coverage' },
    { num: '<4%', label: 'Flakiness Rate' },
    { num: '3', label: 'Browsers Covered' }
  ]

  return (
    <section id="stats">
      <div className="stats-row reveal">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

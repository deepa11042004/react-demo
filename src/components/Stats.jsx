import './Stats.css'

const stats = [
  { value: '12K+', label: 'Teams using Nexus' },
  { value: '99.9%', label: 'Uptime guarantee' },
  { value: '4.9★', label: 'Average rating' },
  { value: '3min', label: 'Average setup time' },
]

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-inner">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

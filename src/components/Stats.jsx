import { useState, useEffect } from 'react'
import './Stats.css'

const FALLBACK = [
  { value: '0K+',  label: 'Teams using Nexus' },
  { value: '0%', label: 'Uptime guarantee' },
  { value: '0★',  label: 'Average rating' },
  { value: '0min',  label: 'Average setup time' },
]

function formatStat(key, val) {
  if (key === 'teams')        return `${(val / 1000).toFixed(0)}K+`
  if (key === 'uptime')       return `${val}%`
  if (key === 'rating')       return `${val}★`
  if (key === 'setupMinutes') return `${val}min`
  return String(val)
}

const LABELS = {
  teams:        'Teams using Nexus',
  uptime:       'Uptime guarantee',
  rating:       'Average rating',
  setupMinutes: 'Average setup time',
}

export default function Stats() {
  const [stats, setStats] = useState(null)
  const [live, setLive]   = useState(false)

  useEffect(() => {
    fetch('https://api.react-demo.bserc.org/stats')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => { setStats(data); setLive(true) })
      .catch(() => {})
  }, [])

  const items = stats
    ? Object.entries(stats).map(([key, val]) => ({
        value: formatStat(key, val),
        label: LABELS[key] ?? key,
      }))
    : FALLBACK

  return (
    <section id="stats" className="stats-section">
      <div className="stats-inner">
        {items.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      {live && (
        <div className="stats-live-badge">
          <span className="live-dot" /> live from API
        </div>
      )}
    </section>
  )
}

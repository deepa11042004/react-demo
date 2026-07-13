import { useState, useEffect } from 'react'
import './Analytics.css'

const ANALYTICS_URL = 'https://analytics.react-demo.bserc.org'

const EVENT_ICONS = {
  page_view:    '👁',
  button_click: '🖱',
  sign_up:      '✅',
}

function timeAgo(ts) {
  const s = Math.floor((Date.now() - new Date(ts)) / 1000)
  if (s < 60)  return `${s}s ago`
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  return `${Math.floor(s / 3600)}h ago`
}

export default function Analytics() {
  const [overview, setOverview] = useState(null)
  const [events,   setEvents]   = useState([])
  const [live,     setLive]     = useState(false)

  useEffect(() => {
    Promise.all([
      fetch(`${ANALYTICS_URL}/analytics/overview`).then(r => r.json()),
      fetch(`${ANALYTICS_URL}/analytics/events`).then(r => r.json()),
    ])
      .then(([ov, ev]) => { setOverview(ov); setEvents(ev); setLive(true) })
      .catch(() => {})
  }, [])

  const overviewCards = overview
    ? [
        { label: 'Total Users',       value: overview.totalUsers.toLocaleString(), color: '#7c3aed' },
        { label: 'Active Sessions',   value: overview.activeSessions,              color: '#0ea5e9' },
        { label: 'Page Views Today',  value: overview.pageViewsToday.toLocaleString(), color: '#10b981' },
        { label: 'Bounce Rate',       value: `${overview.bounceRate}%`,            color: '#f59e0b' },
        { label: 'Avg Session',       value: overview.avgSessionDuration,          color: '#ec4899' },
        { label: 'Top Page',          value: overview.topPage,                     color: '#06b6d4' },
      ]
    : []

  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-inner">

        <div className="section-header">
          <span className="section-tag">Analytics</span>
          <h2 className="section-title">Live platform insights</h2>
          <p className="section-sub">
            Real-time data served directly from the analytics microservice running
            at <code>analytics.react-demo.bserc.org</code>.
          </p>
          {live && (
            <span className="analytics-live-badge">
              <span className="live-dot" /> live from analytics service
            </span>
          )}
        </div>

        {overview ? (
          <>
            <div className="analytics-overview">
              {overviewCards.map(c => (
                <div className="analytics-card" key={c.label}>
                  <div className="analytics-card-value" style={{ color: c.color }}>
                    {c.value}
                  </div>
                  <div className="analytics-card-label">{c.label}</div>
                </div>
              ))}
            </div>

            {events.length > 0 && (
              <div className="analytics-events">
                <h3 className="events-title">Recent Events</h3>
                <div className="events-table">
                  <div className="events-header">
                    <span>Event</span>
                    <span>Page</span>
                    <span>User</span>
                    <span>When</span>
                  </div>
                  {events.map(e => (
                    <div className="events-row" key={e.id}>
                      <span className="event-type">
                        <span className="event-icon">{EVENT_ICONS[e.type] ?? '•'}</span>
                        {e.type.replace('_', ' ')}
                      </span>
                      <span className="event-page">{e.page}</span>
                      <span className="event-user">{e.userId}</span>
                      <span className="event-time">{timeAgo(e.timestamp)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="analytics-loading">
            <div className="loading-spinner" />
            <p>Connecting to analytics service…</p>
          </div>
        )}

      </div>
    </section>
  )
}

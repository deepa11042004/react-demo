import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    desc: 'Optimized for speed at every layer. Pages load in under 100ms, keeping your team in flow.',
    color: '#f59e0b',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    desc: 'End-to-end encryption, SSO, and role-based access out of the box. Your data stays yours.',
    color: '#10b981',
  },
  {
    icon: '🤝',
    title: 'Real-time Collaboration',
    desc: 'Work together with live cursors, inline comments, and instant updates — no refreshing needed.',
    color: '#0ea5e9',
  },
  {
    icon: '📊',
    title: 'Deep Analytics',
    desc: 'Understand your team\'s output with velocity charts, burndown reports, and custom dashboards.',
    color: '#ec4899',
  },
  {
    icon: '🔗',
    title: '100+ Integrations',
    desc: 'Connect Slack, GitHub, Figma, Jira, and more. Nexus fits right into your existing workflow.',
    color: '#7c3aed',
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    desc: 'Let AI write tasks, summarize threads, suggest priorities, and unblock your team automatically.',
    color: '#06b6d4',
  },
]

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-inner">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything your team needs</h2>
          <p className="section-sub">
            Stop switching between tools. Nexus brings together everything modern
            product teams need to move fast and stay aligned.
          </p>
        </div>

        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon" style={{ background: f.color + '18', color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

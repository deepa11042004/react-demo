import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          Now in public beta — try it free
        </div>

        <h1 className="hero-title">
          Build products that<br />
          <span className="gradient-text">people love to use</span>
        </h1>

        <p className="hero-sub">
          Nexus is the all-in-one workspace for modern teams. Plan, build, track,
          and ship — all in one place, at the speed you need.
        </p>

        <div className="hero-actions">
          <a href="#" className="hero-btn-primary">
            Start for free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
          <a href="#features" className="hero-btn-ghost">
            See how it works
          </a>
        </div>

        <div className="hero-social-proof">
          <div className="avatars">
            {['#7c3aed','#ec4899','#0ea5e9','#10b981','#f59e0b'].map((c, i) => (
              <span key={i} className="avatar" style={{ background: c, zIndex: 5 - i }} />
            ))}
          </div>
          <p>Trusted by <strong>12,000+</strong> teams worldwide</p>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <div className="card-dots">
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28ca41' }} />
            </div>
            <span className="card-title">nexus — dashboard</span>
          </div>
          <div className="hero-card-body">
            <div className="mock-sidebar">
              <div className="mock-item active">
                <span className="mock-icon">⬡</span> Dashboard
              </div>
              <div className="mock-item">
                <span className="mock-icon">📋</span> Projects
              </div>
              <div className="mock-item">
                <span className="mock-icon">✓</span> Tasks
              </div>
              <div className="mock-item">
                <span className="mock-icon">📊</span> Analytics
              </div>
              <div className="mock-item">
                <span className="mock-icon">💬</span> Messages
              </div>
            </div>
            <div className="mock-main">
              <div className="mock-stats-row">
                {[
                  { label: 'Active Projects', val: '24', color: '#7c3aed' },
                  { label: 'Tasks Done', val: '138', color: '#10b981' },
                  { label: 'Team Members', val: '9', color: '#0ea5e9' },
                ].map(s => (
                  <div className="mock-stat" key={s.label}>
                    <div className="mock-stat-bar" style={{ background: s.color + '22' }}>
                      <div className="mock-stat-fill" style={{ background: s.color, width: '60%' }} />
                    </div>
                    <strong style={{ color: s.color }}>{s.val}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mock-tasks">
                {[
                  { name: 'Design new onboarding', done: true, tag: 'Design' },
                  { name: 'API rate limiting', done: true, tag: 'Backend' },
                  { name: 'Write release notes', done: false, tag: 'Content' },
                  { name: 'QA final checklist', done: false, tag: 'QA' },
                ].map(t => (
                  <div className={`mock-task ${t.done ? 'done' : ''}`} key={t.name}>
                    <span className="mock-check">{t.done ? '✓' : ''}</span>
                    <span className="mock-task-name">{t.name}</span>
                    <span className="mock-tag">{t.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

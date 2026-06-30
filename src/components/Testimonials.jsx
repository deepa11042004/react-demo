import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Product, Stripe',
    avatar: '#7c3aed',
    initials: 'SC',
    quote: 'Nexus cut our sprint planning meetings in half. The AI suggestions are actually good — it\'s like having a PM assistant that never sleeps.',
    stars: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'CTO, Linear',
    avatar: '#0ea5e9',
    initials: 'MW',
    quote: 'We tried everything — Jira, Notion, Asana. Nexus is the only tool where the whole team actually uses it. Setup took 3 minutes.',
    stars: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Engineering Lead, Vercel',
    avatar: '#ec4899',
    initials: 'PN',
    quote: 'The GitHub integration is seamless. PRs automatically link to tasks, deployment status shows in-app. It feels like magic.',
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'Founder, Lemon.io',
    avatar: '#10b981',
    initials: 'JO',
    quote: 'As a startup, we needed something flexible and fast. Nexus scales with us — from 2 people to 40 without breaking a sweat.',
    stars: 5,
  },
  {
    name: 'Anna Kowalski',
    role: 'Design Director, Figma',
    avatar: '#f59e0b',
    initials: 'AK',
    quote: 'Finally, a project tool that designers actually enjoy. The UI is so clean it makes me want to open it every morning.',
    stars: 5,
  },
  {
    name: 'David Park',
    role: 'VP Engineering, Shopify',
    avatar: '#06b6d4',
    initials: 'DP',
    quote: 'We migrated 200+ projects in a weekend. Zero downtime, zero lost data, and the team was productive on day one.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Loved by teams everywhere</h2>
          <p className="section-sub">
            Don&rsquo;t take our word for it — hear from the teams already shipping faster with Nexus.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="t-avatar" style={{ background: t.avatar }}>
                  {t.initials}
                </div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

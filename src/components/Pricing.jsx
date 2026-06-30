import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    desc: 'Perfect for solo makers and small experiments.',
    features: ['Up to 3 projects', '5 team members', '1GB storage', 'Basic analytics', 'Community support'],
    cta: 'Start for free',
    highlight: false,
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 15,
    desc: 'For growing teams that need more power and flexibility.',
    features: ['Unlimited projects', '25 team members', '50GB storage', 'Advanced analytics', 'Priority support', 'GitHub & Slack integrations', 'AI Assistant'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 49,
    yearly: 39,
    desc: 'Custom solutions for large organizations.',
    features: ['Unlimited everything', 'SSO & SAML', 'Audit logs', 'Custom contracts', 'Dedicated success manager', 'SLA guarantee', 'On-premise option'],
    cta: 'Contact sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Simple, honest pricing</h2>
          <p className="section-sub">Start free. Upgrade as you grow. Cancel anytime.</p>
        </div>

        <div className="billing-toggle">
          <span className={!yearly ? 'active' : ''}>Monthly</span>
          <button
            className={`toggle-btn ${yearly ? 'on' : ''}`}
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle billing period"
          >
            <span className="toggle-knob" />
          </button>
          <span className={yearly ? 'active' : ''}>
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map(p => (
            <div className={`pricing-card ${p.highlight ? 'highlighted' : ''}`} key={p.name}>
              {p.highlight && <div className="popular-badge">Most popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                {p.monthly === 0 ? (
                  <span className="price-num">Free</span>
                ) : (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-num">{yearly ? p.yearly : p.monthly}</span>
                    <span className="price-period">/mo</span>
                  </>
                )}
              </div>
              <p className="plan-desc">{p.desc}</p>
              <a href="#" className={`plan-cta ${p.highlight ? 'cta-primary' : 'cta-outline'}`}>
                {p.cta}
              </a>
              <ul className="plan-features">
                {p.features.map(f => (
                  <li key={f}>
                    <span className="check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

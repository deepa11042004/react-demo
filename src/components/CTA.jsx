import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-blob" />
        <span className="section-tag">Get started today</span>
        <h2 className="cta-title">Ready to ship faster?</h2>
        <p className="cta-sub">
          Join over 12,000 teams already using Nexus. Free to start, no credit card required.
        </p>
        <div className="cta-actions">
          <a href="#" className="hero-btn-primary">
            Start for free →
          </a>
          <a href="#" className="hero-btn-ghost">
            Book a demo
          </a>
        </div>
        <p className="cta-fine">Free forever on Starter. Upgrade when you&rsquo;re ready.</p>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="var(--accent)" opacity="0.2" />
            <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="none" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="14" cy="14" r="4" fill="var(--accent)" />
          </svg>
          <span>Nexus</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#stats" onClick={() => setMenuOpen(false)}>Why Us</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#" className="nav-link-btn">Log in</a>
          <a href="#" className="btn-primary">Get started →</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

import './Footer.css'

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Docs', 'API Reference', 'Guides', 'Community', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Security'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="var(--accent)" opacity="0.2" />
              <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" fill="none" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="14" cy="14" r="4" fill="var(--accent)" />
            </svg>
            Nexus
          </a>
          <p className="footer-tagline">
            The all-in-one workspace for modern product teams.
          </p>
          <div className="footer-socials">
            {['Twitter', 'GitHub', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="social-link">{s}</a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div className="footer-col" key={group}>
            <div className="footer-col-title">{group}</div>
            <ul>
              {items.map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nexus, Inc. All rights reserved.</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  )
}

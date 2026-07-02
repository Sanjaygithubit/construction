import { COMPANY, NAV_LINKS, SERVICE_DROPDOWN } from '../data/siteData';

function Facebook({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.12 8.25H13.5V6.9c0-.68.44-.84.75-.84h.82V3.24L13.24 3.23c-2.03 0-3.14 1.52-3.14 3.73v1.29H8v2.91h2.1V21h3.4v-9.84h2.29l.33-2.91Z" />
    </svg>
  );
}

function Instagram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Linkedin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.33 4Zm14.95 9.9c0-3.01-1.61-4.41-3.76-4.41-1.73 0-2.51.95-2.94 1.62V8.98h-3.21V20h3.21v-6.13c0-1.64.31-3.23 2.35-3.23 2 0 2.03 1.88 2.03 3.33V20h3.22l-.01-6.1Z" />
    </svg>
  );
}

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ marginBottom: 16 }}>{COMPANY.name}<span className="dot">.</span></div>
            <p className="muted" style={{ fontSize: 14, maxWidth: 260, marginBottom: 20 }}>
              Engineering strength and building trust across Tamil Nadu for over 15 years.
            </p>
            <div className="social-row">
              <span className="social-icon"><Facebook size={16} /></span>
              <span className="social-icon"><Instagram size={16} /></span>
              <span className="social-icon"><Linkedin size={16} /></span>
            </div>
          </div>
          <div>
            <h5>Navigate</h5>
            {NAV_LINKS.map(item => (
              <span className="footer-link" key={item.id} onClick={() => navigate(item.id)}>{item.label}</span>
            ))}
            <span className="footer-link" onClick={() => navigate('contact')}>Contact</span>
          </div>
          <div>
            <h5>Services</h5>
            {SERVICE_DROPDOWN.map(s => (
              <span className="footer-link" key={s} onClick={() => navigate('services')}>{s}</span>
            ))}
          </div>
          <div>
            <h5>Get In Touch</h5>
            <span className="footer-link">{COMPANY.phoneDisplay}</span>
            <span className="footer-link">{COMPANY.email}</span>
            <span className="footer-link">{COMPANY.address}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</p>
          <p>Built with the MERN stack.</p>
        </div>
      </div>
    </footer>
  );
}

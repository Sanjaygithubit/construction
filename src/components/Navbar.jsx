import { useEffect, useState } from 'react';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICE_DROPDOWN } from '../data/siteData';

export default function Navbar({ page, navigate, mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate('home')} aria-label="Stratum Construction home">
          {COMPANY.name}<span className="dot">.</span>
        </button>
        <ul className="nav-links">
          {NAV_LINKS.map(item => (
            <li className="nav-item" key={item.id}>
              <button
                className={`nav-link ${page === item.id ? 'active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </button>
              {item.hasDropdown && (
                <div className="nav-dropdown">
                  {SERVICE_DROPDOWN.map(s => (
                    <span className="nav-dropdown-link" key={s} onClick={() => navigate('services')}>{s}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-cta-visible" style={{ display: 'flex', gap: 14 }}>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('contact')}>
            Enquiry <ArrowRight size={15} />
          </button>
        </div>
        <button className="nav-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>
    </nav>
  );
}

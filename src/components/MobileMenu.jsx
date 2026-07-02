import { useState } from 'react';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICE_DROPDOWN } from '../data/siteData';

export default function MobileMenu({ open, setOpen, page, navigate }) {
  const [subOpen, setSubOpen] = useState(false);
  return (
    <>
      <div className={`mobile-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={26} />
        </button>
        {NAV_LINKS.map(item => (
          <div key={item.id}>
            <button
              className="mobile-link"
              onClick={() => item.hasDropdown ? setSubOpen(!subOpen) : navigate(item.id)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={18} style={{ transform: subOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }} />}
            </button>
            {item.hasDropdown && subOpen && (
              <div className="mobile-sub">
                {SERVICE_DROPDOWN.map(s => (
                  <button key={s} className="mobile-link" onClick={() => navigate('services')}>{s}</button>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="btn btn-primary btn-block" style={{ marginTop: 28 }} onClick={() => navigate('contact')}>
          Enquiry <ArrowRight size={15} />
        </button>
      </div>
    </>
  );
}

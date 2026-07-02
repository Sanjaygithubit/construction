import { useState } from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, ArrowUpRight, Building2, MapPin } from 'lucide-react';
import { COMPANY, SERVICE_DROPDOWN, STATS, SERVICES, WHY_CHOOSE, PROJECTS } from '../data/siteData';
import Counter from '../components/Counter';
import DimensionDivider from '../components/DimensionDivider';
import NeedHelpCTA from '../components/NeedHelpCTA';
import Reveal from '../components/Reveal';
import { saveEnquiry } from '../utils/saveEnquiry';

export default function HomePage({ navigate }) {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Residential Construction' });
  const [sent, setSent] = useState(false);

  async function submitQuick(e) {
    e.preventDefault();
    const ok = await saveEnquiry({ ...form, type: 'quick-enquiry' });
    if (ok) { setSent(true); setForm({ name: '', phone: '', service: 'Residential Construction' }); }
  }

  return (
    <div className="page-wrap">
      {/* HERO */}
      <section className="hero blueprint-bg">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">{COMPANY.eyebrow}</div>
              <h1>{COMPANY.heroTitle}</h1>
              <p className="hero-desc">{COMPANY.heroDesc}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('contact')}>
                  Enquire Now <ArrowRight size={16} />
                </button>
                <a className="btn btn-outline" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-form-card bracket-frame on-light">
              <h4>Get A Free Quote</h4>
              {sent ? (
                <div className="form-success"><CheckCircle2 size={18} /> Thanks! Our team will reach out within 24 hours.</div>
              ) : (
                <form onSubmit={submitQuick}>
                  <div className="field">
                    <label>Your Name</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile number" />
                  </div>
                  <div className="field">
                    <label>Service Needed</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      {SERVICE_DROPDOWN.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Get My Free Quote <ArrowRight size={15} /></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <DimensionDivider label="Stratum Construction" />

      {/* ABOUT COMPANY */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title" style={{ marginBottom: 22 }}>Fifteen years of turning approved drawings into occupied buildings.</h2>
              <p className="muted" style={{ marginBottom: 28, maxWidth: 480 }}>
                Stratum Construction was founded on a simple idea: a building is only as good as the precision behind it. From independent homes to full commercial complexes, we manage every stage in-house — design, materials, execution and handover — so nothing gets lost between the blueprint and the build.
              </p>
              <div className="stats-row">
                {STATS.map(s => (
                  <div className="stat-box" key={s.label}>
                    <span className="stat-num"><Counter end={s.end} suffix={s.suffix} /></span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="img-block bracket-frame">
                <Building2 size={72} strokeWidth={1} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">What We Build</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Our Core Services</h2>
          </div>
          <div className="grid-3">
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal delay={i * 100} key={s.slug}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-icon"><s.icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <button
                    onClick={() => navigate('services')}
                    style={{ background: 'none', border: 'none', color: 'var(--rust)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 18, cursor: 'pointer', fontWeight: 600, fontSize: 14, padding: 0, fontFamily: "'IBM Plex Sans',sans-serif" }}
                  >
                    Learn more <ArrowUpRight size={15} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Stratum</div>
            <h2 className="section-title">What Sets Our Work Apart</h2>
          </div>
          <div className="grid-3">
            {WHY_CHOOSE.map((col, i) => (
              <Reveal delay={i * 100} key={col.title}>
                <h3 style={{ fontSize: 19, marginBottom: 20 }}>{col.title}</h3>
                <ul className="check-list">
                  {col.points.map(p => (
                    <li key={p}><CheckCircle2 size={16} />{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <button className="btn btn-outline-dark btn-sm" onClick={() => navigate('projects')}>
              View All Projects <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal delay={i * 100} key={p.title}>
                <div className="img-block" style={{ marginBottom: 18 }}>
                  <Building2 size={48} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: 13, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <MapPin size={13} /> {p.location}
                </p>
                <p className="muted" style={{ fontSize: 14 }}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NeedHelpCTA />
    </div>
  );
}

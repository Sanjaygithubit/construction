import { useState } from 'react';
import { Building2, MapPin } from 'lucide-react';
import { PROJECTS, MATERIALS } from '../data/siteData';
import DimensionDivider from '../components/DimensionDivider';
import NeedHelpCTA from '../components/NeedHelpCTA';
import Reveal from '../components/Reveal';

const PROJECT_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'renovation', label: 'Renovation' },
  { id: 'interior', label: 'Interior' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'turnkey', label: 'Turnkey' },
];

export default function ProjectsPage({ navigate }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="page-wrap">
      <section className="hero blueprint-bg" style={{ minHeight: '56vh' }}>
        <div className="container">
          <div className="eyebrow">Our Projects</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', maxWidth: 720 }}>Two-hundred-fifty handovers. Zero excuses.</h1>
          <p className="hero-desc">A sample of the homes, offices and facilities we've delivered across Tamil Nadu.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Browse By Type</div>
          <div className="pill-row" style={{ marginTop: 16 }}>
            {PROJECT_FILTERS.map(f => (
              <button
                key={f.id}
                className={`pill ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {visible.map((p, i) => (
              <Reveal delay={(i % 3) * 100} key={p.title}>
                <div className="img-block" style={{ marginBottom: 18 }}>
                  <Building2 size={48} strokeWidth={1} />
                </div>
                <span className="eyebrow" style={{ marginBottom: 8 }}>{p.category}</span>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: 13, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <MapPin size={13} /> {p.location}
                </p>
                <p className="muted" style={{ fontSize: 14 }}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="muted">No projects in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      <DimensionDivider label="Materials & Method" />

      <section className="section section-light">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Materials &amp; Method</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>What Goes Into Every Build</h2>
          </div>
          <div className="grid-5">
            {MATERIALS.map((m, i) => (
              <Reveal delay={i * 80} key={m.title}>
                <div className="card" style={{ textAlign: 'center', padding: '28px 18px' }}>
                  <div className="card-icon" style={{ margin: '0 auto 18px' }}><m.icon size={22} /></div>
                  <h3 style={{ fontSize: 14.5, lineHeight: 1.3 }}>{m.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NeedHelpCTA />
    </div>
  );
}

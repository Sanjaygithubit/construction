import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, PROCESS_STEPS, SAFETY_STANDARDS } from '../data/siteData';
import DimensionDivider from '../components/DimensionDivider';
import NeedHelpCTA from '../components/NeedHelpCTA';
import Reveal from '../components/Reveal';

export default function ServicesPage({ navigate }) {
  return (
    <div className="page-wrap">
      <section className="hero blueprint-bg" style={{ minHeight: '56vh' }}>
        <div className="container">
          <div className="eyebrow">Our Services</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', maxWidth: 720 }}>Six disciplines. One accountable team.</h1>
          <p className="hero-desc">Whatever the brief — a home, an office or a factory floor — the same engineers see it through.</p>
        </div>
      </section>

      <DimensionDivider label="Capabilities" />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <Reveal delay={(i % 3) * 100} key={s.slug}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-icon"><s.icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal delay={100} className="img-block-wrap">
              <div className="img-block bracket-frame on-light">
                <ShieldCheck size={72} strokeWidth={1} />
              </div>
            </Reveal>
            <Reveal>
              <div className="eyebrow">The Stratum Standard</div>
              <h2 className="section-title" style={{ marginBottom: 22 }}>Benefits of working with our team</h2>
              <p className="muted" style={{ marginBottom: 20, maxWidth: 460 }}>
                Every service above runs through the same operating standard — the reason clients come back for their second and third projects.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 size={16} />Single point of contact from quote to keys</li>
                <li><CheckCircle2 size={16} />Fixed-price contracts, no surprise costs</li>
                <li><CheckCircle2 size={16} />In-house engineers, not subcontracted labour</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">How We Work</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Our Construction Process</h2>
          </div>
          <div className="process-row">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal delay={i * 120} key={step.title}>
                <div className="process-step">
                  <span className="process-num">0{i + 1}</span>
                  <step.icon size={26} color="var(--brass)" style={{ marginBottom: 16 }} />
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p className="muted" style={{ fontSize: 14 }}>{step.desc}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="process-arrow"><ArrowRight size={20} /></span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Safety &amp; Quality</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Standards We Never Skip</h2>
          </div>
          <div className="grid-4">
            {SAFETY_STANDARDS.map((s, i) => (
              <Reveal delay={i * 90} key={s.title}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-icon"><s.icon size={22} /></div>
                  <h3 style={{ fontSize: 16.5 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5 }}>{s.desc}</p>
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

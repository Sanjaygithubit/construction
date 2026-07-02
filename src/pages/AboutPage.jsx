import { ArrowRight, MessageCircle, Users } from 'lucide-react';
import { COMPANY, AWARDS, FAQS } from '../data/siteData';
import DimensionDivider from '../components/DimensionDivider';
import FAQAccordion from '../components/FAQAccordion';
import NeedHelpCTA from '../components/NeedHelpCTA';
import Reveal from '../components/Reveal';

export default function AboutPage({ navigate }) {
  return (
    <div className="page-wrap">
      <section className="hero blueprint-bg" style={{ minHeight: '56vh' }}>
        <div className="container">
          <div className="eyebrow">About The Company</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', maxWidth: 720 }}>Built by engineers. Run like a promise.</h1>
          <p className="hero-desc">The people, process and standards behind every Stratum project.</p>
        </div>
      </section>

      <DimensionDivider label="Company Overview" />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title" style={{ marginBottom: 22 }}>A construction partner that stays accountable, start to finish.</h2>
              <p className="muted" style={{ marginBottom: 14, maxWidth: 480 }}>
                Stratum Construction began with a small residential crew in Chennai and grew into a full-service contractor working across five Tamil Nadu cities. What hasn't changed is how we work: in-house engineers, transparent contracts and a single project manager who answers for every milestone.
              </p>
              <p className="muted" style={{ marginBottom: 28, maxWidth: 480 }}>
                Today, our teams handle residential, commercial, industrial and turnkey projects — each one run to the same quality standard, whether it's a single home or a twelve-storey tower.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('contact')}>Enquire Now <ArrowRight size={16} /></button>
                <a className="btn btn-outline-dark" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="img-block bracket-frame">
                <Users size={72} strokeWidth={1} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Recognition</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Awards &amp; Certifications</h2>
          </div>
          <div className="grid-3">
            {AWARDS.map((a, i) => (
              <Reveal delay={i * 100} key={a.title}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 22px' }}><a.icon size={24} /></div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head center">
            <div className="eyebrow">Common Questions</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Frequently Asked Questions</h2>
          </div>
          <Reveal>
            <FAQAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <NeedHelpCTA />
    </div>
  );
}

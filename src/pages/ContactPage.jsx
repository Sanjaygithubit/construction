import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2, Send } from 'lucide-react';
import { COMPANY, SERVICE_DROPDOWN, LOCATIONS } from '../data/siteData';
import DimensionDivider from '../components/DimensionDivider';
import Reveal from '../components/Reveal';
import { saveEnquiry } from '../utils/saveEnquiry';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: SERVICE_DROPDOWN[0], message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    const ok = await saveEnquiry({ ...form, type: 'contact-form' });
    setSending(false);
    if (ok) {
      setSent(true);
      setForm({ name: '', phone: '', email: '', service: SERVICE_DROPDOWN[0], message: '' });
    }
  }

  return (
    <div className="page-wrap">
      <section className="hero blueprint-bg" style={{ minHeight: '48vh' }}>
        <div className="container">
          <div className="eyebrow">Get In Touch</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', maxWidth: 720 }}>Let's put your plan on the schedule.</h1>
          <p className="hero-desc">Free site visit, honest estimate, no pressure to sign anything today.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Reveal>
              <div className="eyebrow">Start Your Project</div>
              <h2 className="section-title" style={{ marginBottom: 28 }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 34 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--rust)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 3 }}>Office Address</div>
                    <p className="muted" style={{ fontSize: 14.5 }}>{COMPANY.address}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Phone size={20} color="var(--rust)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 3 }}>Phone</div>
                    <p className="muted" style={{ fontSize: 14.5 }}>{COMPANY.phoneDisplay}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Mail size={20} color="var(--rust)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 3 }}>Email</div>
                    <p className="muted" style={{ fontSize: 14.5 }}>{COMPANY.email}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--rust)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 3 }}>Business Hours</div>
                    <p className="muted" style={{ fontSize: 14.5 }}>{COMPANY.hours}</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14 }}>
                <a className="btn btn-outline-dark" href={`tel:${COMPANY.phoneRaw}`}><Phone size={16} /> Call Now</a>
                <a className="btn btn-primary" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card bracket-frame" style={{ padding: '38px 32px' }}>
                <h3 style={{ marginBottom: 22, fontSize: 20 }}>Send Us A Message</h3>
                {sent ? (
                  <div className="form-success"><CheckCircle2 size={18} /> Thank you! Your enquiry has been received — we'll respond within 24 hours.</div>
                ) : (
                  <form onSubmit={submit}>
                    <div className="field">
                      <label>Full Name</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile number" />
                    </div>
                    <div className="field">
                      <label>Email Address</label>
                      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                    </div>
                    <div className="field">
                      <label>Service Needed</label>
                      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                        {SERVICE_DROPDOWN.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label>Message</label>
                      <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us briefly about your project..." />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
                      {sending ? 'Sending...' : <>Send Message <Send size={15} /></>}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <DimensionDivider label="Where We Build" />

      <section className="section section-light">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Where We Build</div>
            <h2 className="section-title-lg" style={{ margin: '0 auto' }}>Service Locations</h2>
          </div>
          <div className="grid-5">
            {LOCATIONS.map((loc, i) => (
              <Reveal delay={i * 80} key={loc}>
                <div className="card" style={{ textAlign: 'center', padding: '26px 16px' }}>
                  <MapPin size={22} color="var(--rust)" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: 15.5 }}>{loc}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

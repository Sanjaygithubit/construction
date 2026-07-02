import { useState } from 'react';
import { Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import Reveal from './Reveal';
import { saveEnquiry } from '../utils/saveEnquiry';

export default function NeedHelpCTA() {
  const [showCallback, setShowCallback] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [sent, setSent] = useState(false);

  async function submitCallback(e) {
    e.preventDefault();
    const ok = await saveEnquiry({ ...form, type: 'callback' });
    if (ok) { setSent(true); setForm({ name: '', phone: '' }); }
  }

  return (
    <section className="section-sm blueprint-bg" style={{ background: 'var(--graphite-2)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <h3 style={{ fontSize: 'clamp(24px,3.5vw,34px)', marginBottom: 14 }}>Need Help In Construction?</h3>
          <p className="muted" style={{ maxWidth: 520, margin: '0 auto 32px' }}>
            Tell us what you're planning and our team will get back to you within one business day — no obligation, no pressure.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" onClick={() => setShowCallback(v => !v)}>
              <Phone size={16} /> Request Callback
            </button>
            <a className="btn btn-outline" href={`tel:${COMPANY.phoneRaw}`}>
              <Phone size={16} /> Call Directly
            </a>
            <a className="btn btn-primary" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
          {showCallback && (
            <form onSubmit={submitCallback} style={{ maxWidth: 420, margin: '32px auto 0', textAlign: 'left' }}>
              {sent ? (
                <div className="form-success"><CheckCircle2 size={18} /> Thanks! We'll call you back shortly.</div>
              ) : (
                <>
                  <div className="field">
                    <label>Your Name</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Karthik Raja" />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 98765 43210" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Request Callback <ArrowRight size={15} /></button>
                </>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

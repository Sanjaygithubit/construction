import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <ChevronDown size={20} className="faq-chevron" />
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

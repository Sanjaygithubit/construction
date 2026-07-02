import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="#fff" />
    </a>
  );
}

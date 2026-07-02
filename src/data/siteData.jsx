import {
  Home as HomeIcon, Building2, Wrench, Layers, Hammer, Warehouse, ShieldCheck,
  Award, Star, FileText, Compass, ClipboardCheck, Eye, Truck, Leaf, Droplet
} from 'lucide-react';

export const COMPANY = {
  name: 'STRATUM',
  fullName: 'Stratum Construction',
  eyebrow: 'GENERAL CONTRACTORS · CHENNAI, TN',
  heroTitle: 'From First Line to Final Handover.',
  heroDesc: "Residential, commercial and industrial construction across Tamil Nadu — engineered with precision and delivered on schedule, every time.",
  phoneDisplay: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '919876543210',
  email: 'info@stratumconstruction.in',
  address: 'No. 24, Anna Salai, Chennai, Tamil Nadu – 600002',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services', hasDropdown: true },
  { id: 'projects', label: 'Projects' },
];

export const SERVICE_DROPDOWN = [
  'Residential Construction', 'Commercial Construction', 'Renovation',
  'Interior Construction', 'Turnkey Construction'
];

export const SERVICES = [
  { icon: HomeIcon, title: 'Residential Construction', slug: 'residential', desc: 'Custom-built homes designed around how you actually live, from independent houses to gated villas.' },
  { icon: Building2, title: 'Commercial Construction', slug: 'commercial', desc: 'Offices, retail outlets and commercial complexes built for performance, footfall and durability.' },
  { icon: Wrench, title: 'Renovation', slug: 'renovation', desc: 'New life for existing structures — structural, cosmetic or complete rebuilds, without cutting corners.' },
  { icon: Layers, title: 'Interior Construction', slug: 'interior', desc: 'End-to-end interior fit-outs that turn an empty shell into a finished, functional space.' },
  { icon: Hammer, title: 'Turnkey Construction', slug: 'turnkey', desc: 'Foundation to furnishing under one contract — a single point of accountability throughout.' },
  { icon: Warehouse, title: 'Industrial Construction', slug: 'industrial', desc: 'Factories and warehouses engineered for scale, safety and operational efficiency.' },
];

export const WHY_CHOOSE = [
  { title: 'Quality First', points: ['Licensed & certified engineers', 'Premium-grade materials, always', 'Multi-stage quality checks', 'ISO 9001:2015 certified process'] },
  { title: 'Truly Reliable', points: ['On-time project delivery', 'Transparent, fixed pricing', 'Zero hidden costs', 'One dedicated project manager'] },
  { title: 'Always Supportive', points: ['24/7 client support line', '5-year structural warranty', 'Free site consultation', 'End-to-end project management'] },
];

export const PROCESS_STEPS = [
  { icon: FileText, title: 'Consultation & Site Visit', desc: 'We understand your vision, assess the site and outline what is possible.' },
  { icon: Compass, title: 'Design & Approval', desc: 'Architectural plans, 3D visuals and every regulatory approval, handled.' },
  { icon: Hammer, title: 'Construction & Execution', desc: 'Skilled crews and quality materials bring the plan to life, on schedule.' },
  { icon: ClipboardCheck, title: 'Quality Check & Handover', desc: 'Rigorous inspection, then a smooth, documented handover to you.' },
];

export const SAFETY_STANDARDS = [
  { icon: ShieldCheck, title: 'Certified Safety Protocols', desc: 'PPE compliance and routine safety audits at every active site.' },
  { icon: Layers, title: 'Sourced Quality Materials', desc: 'Every material batch-tested before it reaches your site.' },
  { icon: Eye, title: 'Regular Site Inspections', desc: 'Independent quality checks at every construction milestone.' },
  { icon: FileText, title: '100% Code Compliance', desc: 'Fully compliant with local building codes and RERA norms.' },
];

export const MATERIALS = [
  { icon: Layers, title: 'Premium TMT Steel & Cement' },
  { icon: Truck, title: 'Modern Construction Equipment' },
  { icon: Compass, title: '3D BIM Modeling & Design' },
  { icon: Leaf, title: 'Eco-Friendly, Sustainable Materials' },
  { icon: Droplet, title: 'Advanced Waterproofing Systems' },
];

export const AWARDS = [
  { icon: Award, title: 'ISO 9001:2015 Certified', desc: 'Quality management system audited and certified.' },
  { icon: ShieldCheck, title: 'RERA Registered Builder', desc: 'Fully compliant with real-estate regulatory norms.' },
  { icon: Star, title: 'Excellence in Construction, 2024', desc: 'Regional industry recognition for project delivery.' },
];

export const FAQS = [
  { q: 'How long does a typical residential project take?', a: 'Most homes take 8–14 months depending on size and design complexity, from foundation to handover.' },
  { q: 'Is the initial site visit and consultation free?', a: 'Yes — we offer a completely free site visit and consultation with no obligation to proceed.' },
  { q: "What's included in a turnkey construction package?", a: 'Everything from design and approvals to construction, interiors and final handover — one contract, one point of contact.' },
  { q: 'Are your projects RERA registered?', a: 'Yes, all applicable projects are RERA registered and fully compliant with regulatory norms.' },
  { q: "What's your payment structure?", a: 'Payments are milestone-based, tied to actual construction progress, with everything detailed upfront in your contract.' },
  { q: 'Do you offer a warranty after construction?', a: 'Yes — a 5-year structural warranty and a 1-year finishing warranty on every project.' },
  { q: 'Can I make design changes mid-construction?', a: 'Minor changes are usually possible before the relevant stage begins. Your project manager will guide you on feasibility and cost impact.' },
  { q: 'Which areas do you currently serve?', a: 'We currently serve Chennai, Coimbatore, Madurai, Tiruchirappalli and Salem, with select projects beyond.' },
  { q: 'How do you ensure quality control on site?', a: 'Through multi-stage inspections, third-party material testing and a dedicated quality engineer on every project.' },
  { q: 'What documents do I need to get started?', a: 'Property documents, an approved layout if available, and a valid ID — our team will guide you through the rest.' },
];

export const LOCATIONS = ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'];

export const PROJECTS = [
  { category: 'residential', title: 'Green Valley Residency', location: 'OMR, Chennai', desc: 'A 4,500 sq.ft contemporary villa featuring open-plan living and sustainable design elements.' },
  { category: 'commercial', title: 'Skyline Corporate Tower', location: 'Anna Salai, Chennai', desc: 'A 12-storey commercial complex, delivered three weeks ahead of schedule with zero safety incidents.' },
  { category: 'renovation', title: 'Heritage Bungalow Restoration', location: 'RS Puram, Coimbatore', desc: 'Full structural restoration of a 1980s bungalow, balancing heritage charm with modern comfort.' },
  { category: 'interior', title: 'Urban Loft Interiors', location: 'Nungambakkam, Chennai', desc: 'A complete interior fit-out for a 3BHK apartment, with custom-built furnishing throughout.' },
  { category: 'industrial', title: 'Precision Industries Facility', location: 'SIPCOT, Coimbatore', desc: 'A 40,000 sq.ft manufacturing facility, engineered and delivered turnkey in just 8 months.' },
  { category: 'turnkey', title: 'Lakeview Villa Community', location: 'Madurai', desc: 'A 12-unit gated villa community, delivered fully furnished and move-in ready.' },
];

export const STATS = [
  { end: 15, suffix: '+', label: 'Years Experience' },
  { end: 250, suffix: '+', label: 'Projects Done' },
  { end: 98, suffix: '%', label: 'Client Satisfaction' },
  { end: 5, suffix: '', label: 'Cities Served' },
];

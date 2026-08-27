import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "About NIDS", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Attack Types", to: "/attack-types" },
  { label: "Research", to: "/research" },
];

const resources = [
  { label: "Datasets", to: "/datasets" },
  { label: "ML Models", to: "/ml-models" },
  { label: "Detection Process", to: "/detection-process" },
  { label: "Reports", to: "/reports" },
  { label: "FAQ", to: "/faq" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60 mt-24">
      <div className="container-lens px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/40">
                <ShieldCheck size={18} className="text-accent" />
              </span>
              <span className="font-display font-bold text-lg">
                Net<span className="text-accent">Lens</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              An AI-driven Network Intrusion Detection System built to monitor traffic, flag anomalies, and
              alert administrators in real time — developed as a final-year B.Sc. IT project.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 flex items-center justify-center rounded-md border border-border text-slate-300 hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white">Resources</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {resources.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-secondary shrink-0" /> netlens.project@college.edu
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-secondary shrink-0" /> +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-secondary shrink-0 mt-0.5" /> Dept. of IT, Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} NetLens. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center md:text-right">
            Project Guide: Prof. A. Sharma · Dept. of Information Technology · A.Y. 2025–26
          </p>
        </div>
      </div>
    </footer>
  );
}

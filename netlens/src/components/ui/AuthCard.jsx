import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-primary/20 rounded-full blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative card-lens w-full max-w-md p-8 md:p-10"
      >
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/40">
            <ShieldCheck size={18} className="text-accent" />
          </span>
          <span className="font-display font-bold text-lg">
            Net<span className="text-accent">Lens</span>
          </span>
        </Link>
        <h1 className="text-2xl font-bold text-white text-center mb-2">{title}</h1>
        {subtitle && <p className="text-sm text-muted text-center mb-8">{subtitle}</p>}
        {children}
        {footer && <div className="mt-7 text-center text-sm text-muted">{footer}</div>}
      </motion.div>
    </div>
  );
}

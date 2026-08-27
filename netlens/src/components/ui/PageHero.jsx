import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description, crumbs = [] }) {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-lens relative">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs font-mono text-muted mb-6 flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent glow-dot" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mt-3 max-w-3xl">{title}</h1>
          {description && (
            <p className="text-muted mt-4 max-w-2xl text-base md:text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, Search, Bell } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Attack Types", to: "/attack-types" },
  { label: "Live Monitor", to: "/live-monitoring" },
  { label: "Reports", to: "/reports" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container-lens flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-[70px]">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/40 group-hover:shadow-glow transition-shadow">
            <ShieldCheck size={18} className="text-accent" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            Net<span className="text-accent">Lens</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "text-accent" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="h-9 w-9 flex items-center justify-center rounded-md border border-border text-slate-300 hover:text-accent hover:border-accent transition-colors"
          >
            <Search size={15} />
          </button>
          <Link
            to="/notifications"
            aria-label="Notifications"
            className="relative h-9 w-9 flex items-center justify-center rounded-md border border-border text-slate-300 hover:text-accent hover:border-accent transition-colors"
          >
            <Bell size={15} />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-danger border-2 border-bg" />
          </Link>
          <Link to="/login" className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors">
            Log In
          </Link>
          <Link to="/register" className="btn-primary !py-2 !px-4 text-sm">
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden h-10 w-10 flex items-center justify-center text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden lg:block overflow-hidden border-b border-border bg-surface/95"
          >
            <div className="container-lens px-6 md:px-10 lg:px-16 py-3">
              <input
                autoFocus
                type="text"
                placeholder="Search alerts, attacks, IPs..."
                className="w-full bg-bg border border-border rounded-lg px-4 py-2 text-sm focus:border-accent outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-bg/98 backdrop-blur-md border-b border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-sm font-medium ${
                      isActive ? "text-accent bg-accent/10" : "text-slate-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-border">
                <Link to="/login" onClick={() => setOpen(false)} className="btn-outline flex-1 !py-2 text-sm">
                  Log In
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2 text-sm">
                  Sign Up
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import PageHero from "../components/ui/PageHero";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        description="Questions about the project, the dataset, or the detection models? Send a message and we'll get back to you."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container-lens grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-lens p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-accent mb-4">Reach us directly</p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-secondary" />
                  </span>
                  <span className="text-slate-300">netlens.project@college.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-secondary" />
                  </span>
                  <span className="text-slate-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-secondary" />
                  </span>
                  <span className="text-slate-300">Dept. of Information Technology, Mumbai</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="h-9 w-9 flex items-center justify-center rounded-md border border-border text-slate-300 hover:text-accent hover:border-accent transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-lens overflow-hidden h-56 relative flex items-center justify-center bg-surface2">
              <div className="absolute inset-0 bg-grid-pattern opacity-50" />
              <div className="relative text-center">
                <MapPin size={22} className="text-accent mx-auto mb-2" />
                <p className="text-xs text-muted font-mono">Map placeholder — Mumbai, IN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 card-lens p-7 md:p-9"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 size={40} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
                <p className="text-muted text-sm max-w-sm">
                  Thanks for reaching out — this is a UI-only demo form, so nothing was sent, but this is
                  exactly how a confirmation would look.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 !py-2 !px-4 text-sm">
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-2 block">Name</label>
                    <input required type="text" placeholder="Your full name" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-2 block">Email</label>
                    <input required type="email" placeholder="you@example.com" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-2 block">Subject</label>
                  <input required type="text" placeholder="What's this about?" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-2 block">Message</label>
                  <textarea required rows={5} placeholder="Write your message..." className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

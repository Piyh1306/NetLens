import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";

const team = [
  { name: "Aarav Mehta", role: "Project Lead & ML Engineer", initials: "AM" },
  { name: "Priya Nair", role: "Backend & Data Pipeline", initials: "PN" },
  { name: "Rohan Iyer", role: "Frontend & UI/UX", initials: "RI" },
  { name: "Sara Khan", role: "Research & Documentation", initials: "SK" },
];

const testimonials = [
  { quote: "The hybrid detection approach in NetLens showed a genuinely strong grasp of both classical and ML-based IDS techniques.", author: "Project Evaluation Panel" },
  { quote: "A clean, well-documented pipeline — from packet capture to dashboard — that would hold up in a real research presentation.", author: "Department Reviewer" },
  { quote: "Impressive to see anomaly detection and signature matching combined this cleanly in a student project.", author: "External Examiner" },
];

export default function Team() {
  return (
    <div>
      <PageHero eyebrow="The People" title="Team & Feedback" description="Meet the team behind NetLens and what reviewers had to say." crumbs={[{ label: "Team" }]} />

      <section className="section">
        <div className="container-lens">
          <SectionHeading eyebrow="Team Members" title="Built by four final-year students" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="card-lens p-6 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-lg font-bold font-display mb-4">
                  {m.initials}
                </div>
                <p className="font-semibold text-white text-sm">{m.name}</p>
                <p className="text-xs text-muted mt-1">{m.role}</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <a href="#" className="h-8 w-8 flex items-center justify-center rounded-md border border-border text-muted hover:text-accent hover:border-accent transition-colors">
                    <FaGithub size={13} />
                  </a>
                  <a href="#" className="h-8 w-8 flex items-center justify-center rounded-md border border-border text-muted hover:text-accent hover:border-accent transition-colors">
                    <FaLinkedin size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-t border-border">
        <div className="container-lens">
          <SectionHeading eyebrow="Feedback" title="What reviewers said" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="card-lens p-7"
              >
                <Quote size={22} className="text-accent mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{t.quote}</p>
                <p className="text-xs font-medium text-white">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { ShieldAlert, Target, Compass, Gem, Radar, Layers, GitMerge } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";

const objectives = [
  "Capture and analyze live network traffic without disrupting performance",
  "Classify traffic as normal or malicious using signature and anomaly detection",
  "Reduce false positives through hybrid, ML-assisted classification",
  "Alert administrators in real time with actionable, prioritized information",
  "Provide a clear dashboard for reviewing history and generating reports",
];

const scope = [
  "Monitors traffic at the network layer across TCP, UDP, HTTP, and DNS protocols",
  "Trained and evaluated against benchmark datasets (CICIDS2017, NSL-KDD, UNSW-NB15)",
  "Designed as a research and demonstration platform, not a production security product",
  "Extendable to host-based detection and cloud environments in future iterations",
];

const benefits = [
  { icon: ShieldAlert, title: "Early Threat Visibility", desc: "Surfaces suspicious behavior before it escalates into a breach." },
  { icon: Radar, title: "Reduced Manual Effort", desc: "Automates traffic triage so administrators focus only on real threats." },
  { icon: Layers, title: "Layered Detection", desc: "Combines rule-based and learning-based methods for stronger coverage." },
  { icon: Gem, title: "Actionable Reporting", desc: "Turns raw packet data into summaries administrators can actually use." },
];

const types = [
  {
    icon: Target,
    title: "Signature-based Detection",
    desc: "Matches incoming traffic against a database of known attack patterns. Fast and highly accurate for previously seen threats, but blind to novel attacks.",
  },
  {
    icon: Compass,
    title: "Anomaly-based Detection",
    desc: "Builds a baseline of normal behavior using machine learning, then flags anything that deviates from it. Catches unknown attacks at the cost of more false positives.",
  },
  {
    icon: GitMerge,
    title: "Hybrid Detection",
    desc: "Combines both approaches — signature matching for speed and certainty, anomaly detection for coverage — which is the model NetLens is built around.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About the System"
        title="What is a Network Intrusion Detection System?"
        description="An NIDS observes traffic flowing across a network, compares it against known patterns and learned behavior, and raises an alert the moment something looks like an intrusion."
        crumbs={[{ label: "About NIDS" }]}
      />

      <section className="section">
        <div className="container-lens grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              A Network Intrusion Detection System sits at a strategic point in a network — often at a
              gateway or switch span port — and inspects every packet that passes through. Rather than
              blocking traffic outright like a firewall, an NIDS focuses on visibility: it identifies
              patterns associated with reconnaissance, exploitation, or data exfiltration, and reports
              them so a human or automated system can respond.
            </p>
            <p>
              Cybersecurity matters because the cost of a missed intrusion compounds quickly — a single
              undetected foothold can lead to data theft, service outages, or full network compromise.
              As organizations move more infrastructure online, the volume and sophistication of attacks
              keeps growing, which makes automated, always-on monitoring less of a convenience and more
              of a necessity.
            </p>
            <p>
              NetLens was built to demonstrate how modern detection techniques — packet capture,
              preprocessing, feature extraction, and machine learning classification — come together
              into a single working pipeline, from the moment a packet arrives to the moment an
              administrator sees an alert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-lens p-6 h-fit"
          >
            <h3 className="font-semibold text-white mb-4">Objectives</h3>
            <ul className="space-y-3">
              {objectives.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container-lens">
          <SectionHeading eyebrow="Detection Approaches" title="Three ways NetLens recognizes a threat" align="left" />
          <div className="grid md:grid-cols-3 gap-6">
            {types.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="card-lens p-7"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <t.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lens grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-5">Scope</h3>
            <ul className="space-y-3">
              {scope.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-2xl font-bold mb-5">Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="card-lens p-5">
                  <b.icon size={18} className="text-accent mb-3" />
                  <p className="font-semibold text-sm text-white mb-1.5">{b.title}</p>
                  <p className="text-xs text-muted leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

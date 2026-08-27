import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Activity,
  Radar,
  Bell,
  BarChart3,
  Cpu,
  Lock,
  Network,
  FileCheck2,
} from "lucide-react";
import NetworkVisualization from "../components/home/NetworkVisualization";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { trafficComposition, recentAlerts } from "../data/traffic";
import { riskColor } from "../data/attacks";

const stats = [
  { label: "Packets Analyzed", value: 128420, suffix: "+" },
  { label: "Detection Accuracy", value: 99, suffix: "%" },
  { label: "Attacks Blocked", value: 3427, suffix: "+" },
  { label: "Avg. Response Time", value: 40, suffix: "ms" },
];

const features = [
  { icon: Activity, title: "Real-time Monitoring", desc: "Continuously watches every packet moving across the network, day and night." },
  { icon: Network, title: "Packet Analysis", desc: "Inspects headers and payloads to understand exactly what traffic is carrying." },
  { icon: Radar, title: "Threat Detection", desc: "Flags signature-based and anomaly-based intrusions the moment they appear." },
  { icon: Bell, title: "Alert System", desc: "Sends instant, prioritized alerts so administrators respond before damage spreads." },
  { icon: BarChart3, title: "Traffic Analysis", desc: "Breaks down traffic patterns to separate normal behavior from the suspicious." },
  { icon: Cpu, title: "AI Detection", desc: "Machine learning models trained on real intrusion datasets for sharper accuracy." },
  { icon: Lock, title: "Secure Reporting", desc: "Generates tamper-evident reports administrators can trust and export." },
  { icon: FileCheck2, title: "Dashboard", desc: "One clear view of packets, threats, and system health at a glance." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-72 w-72 md:h-96 md:w-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container-lens relative grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent glow-dot" />
              Final Year B.Sc. IT Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] mt-5">
              Watch your network <span className="text-gradient">before intruders</span> get the chance to.
            </h1>
            <p className="text-muted text-lg mt-6 max-w-lg leading-relaxed">
              NetLens is a machine-learning powered Network Intrusion Detection System that inspects
              traffic in real time, tells normal from malicious, and alerts you the instant something
              looks wrong.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/dashboard" className="btn-primary">
                Explore Dashboard <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline">
                About NetLens
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-12 flex-wrap">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold font-display text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <NetworkVisualization />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-lens px-6 md:px-10 lg:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold font-display text-gradient">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs md:text-sm text-muted mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container-lens grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <ShieldCheck size={13} /> What is NetLens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              A defense layer that never blinks.
            </h2>
            <p className="text-muted mt-5 leading-relaxed">
              Traditional firewalls only stop what they already recognize. NetLens goes further —
              combining signature-based rules with anomaly-based machine learning so it can catch both
              known attack patterns and traffic that simply doesn't behave normally. Every packet is
              captured, analyzed, and scored before it ever becomes a breach.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["Signature-based Detection", "Anomaly-based Detection", "Hybrid Detection Engine", "Live Admin Alerts"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-accent font-semibold mt-8 text-sm hover:gap-2.5 transition-all">
              Learn about the system <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-lens p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <p className="font-semibold text-sm text-white">Traffic Composition</p>
              <span className="flex items-center gap-1.5 text-xs text-accent font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> LIVE
              </span>
            </div>
            <div className="space-y-4">
              {trafficComposition.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300">{t.name}</span>
                    <span className="font-mono text-white">{t.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-bg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: t.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted mb-3 font-mono uppercase tracking-wider">Recent Alert</p>
              <div className="flex items-center justify-between bg-bg rounded-lg p-3 border border-border">
                <div>
                  <p className="text-sm font-medium text-white">{recentAlerts[2].type}</p>
                  <p className="text-xs text-muted font-mono mt-0.5">{recentAlerts[2].ip}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${riskColor[recentAlerts[2].severity] ?? riskColor.High}`}>
                  {recentAlerts[2].severity}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-surface/30 border-y border-border">
        <div className="container-lens">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything a modern IDS needs"
            description="From packet-level inspection to AI-backed classification, NetLens covers the full detection pipeline."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="card-lens p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors">
                  <f.icon size={19} className="text-secondary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/features" className="btn-outline">
              View All Features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-lens">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative card-lens p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
                See NetLens detect an intrusion in real time.
              </h2>
              <p className="text-muted mt-4 max-w-lg mx-auto">
                Jump into the live monitoring simulation and watch packets get classified as they arrive.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link to="/live-monitoring" className="btn-primary">
                  Launch Live Monitor <ArrowRight size={16} />
                </Link>
                <Link to="/research" className="btn-outline">
                  Read the Research
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

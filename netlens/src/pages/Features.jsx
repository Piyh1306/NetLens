import { motion } from "framer-motion";
import {
  Activity, Network, Radar, Bell, BarChart3, LayoutDashboard, Cpu, FileCheck2,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";

const features = [
  { icon: Activity, title: "Real-time Monitoring", desc: "Traffic is captured and evaluated continuously — no polling delays, no blind windows between checks.", tag: "Core" },
  { icon: Network, title: "Packet Analysis", desc: "Each packet's headers and payload are parsed to extract protocol, size, flags, and flow-level features.", tag: "Core" },
  { icon: Radar, title: "Threat Detection", desc: "Signature matching catches known attacks instantly; anomaly scoring catches everything else.", tag: "Core" },
  { icon: Bell, title: "Alert System", desc: "Alerts are ranked by severity and pushed to the dashboard the moment a threshold is crossed.", tag: "Response" },
  { icon: BarChart3, title: "Traffic Analysis", desc: "Historical and live traffic is broken into normal, suspicious, and blocked categories for quick review.", tag: "Insight" },
  { icon: LayoutDashboard, title: "Dashboard", desc: "A single control surface showing packet volume, accuracy, live status, and recent alerts.", tag: "Insight" },
  { icon: Cpu, title: "AI Detection", desc: "Trained classifiers (Random Forest, XGBoost, and more) score traffic for anomaly likelihood.", tag: "Intelligence" },
  { icon: FileCheck2, title: "Secure Reporting", desc: "Daily, weekly, and monthly reports can be reviewed on-screen or exported as PDF.", tag: "Response" },
];

export default function Features() {
  return (
    <div>
      <PageHero
        eyebrow="Capabilities"
        title="Built for full-pipeline intrusion detection"
        description="Every feature below maps directly onto a stage of the detection pipeline — from raw packet capture to the report an administrator finally reads."
        crumbs={[{ label: "Features" }]}
      />

      <section className="section">
        <div className="container-lens grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="card-lens p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors">
                  <f.icon size={20} className="text-secondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted border border-border rounded-full px-2.5 py-1">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

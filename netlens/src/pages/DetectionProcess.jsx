import { motion } from "framer-motion";
import {
  Radio, PackageSearch, SlidersHorizontal, Sigma, BrainCircuit, ShieldAlert, BellRing, UserCog,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";

const steps = [
  { icon: Radio, title: "Collect Network Traffic", desc: "Traffic is mirrored from the network gateway so every packet crossing it can be observed." },
  { icon: PackageSearch, title: "Capture Packets", desc: "Raw packets are captured in real time and queued for processing without interrupting flow." },
  { icon: SlidersHorizontal, title: "Preprocess Data", desc: "Packets are cleaned, normalized, and formatted into a structure the model can consume." },
  { icon: Sigma, title: "Feature Extraction", desc: "Key attributes — packet size, protocol, flags, flow duration — are extracted for analysis." },
  { icon: BrainCircuit, title: "Machine Learning Analysis", desc: "Trained classifiers score the extracted features against known and learned attack patterns." },
  { icon: ShieldAlert, title: "Intrusion Detection", desc: "Traffic crossing the anomaly threshold is flagged as suspicious or malicious." },
  { icon: BellRing, title: "Generate Alert", desc: "A prioritized alert is created and logged with IP, protocol, and threat level." },
  { icon: UserCog, title: "Administrator Response", desc: "The administrator reviews the alert on the dashboard and takes appropriate action." },
];

export default function DetectionProcess() {
  return (
    <div>
      <PageHero
        eyebrow="Pipeline"
        title="How NetLens detects an intrusion"
        description="Eight stages, from the moment a packet touches the network to the moment an administrator sees it flagged."
        crumbs={[{ label: "Detection Process" }]}
      />

      <section className="section">
        <div className="container-lens">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />
            <div className="space-y-10">
              {steps.map((s, i) => {
                const leftSide = i % 2 === 0;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      leftSide ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`hidden md:block md:w-1/2 ${leftSide ? "pr-10 text-right" : "pl-10 text-left"}`}>
                      <p className="text-xs font-mono text-accent mb-1">STEP {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="font-semibold text-white text-lg mb-1.5">{s.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                    </div>

                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-glow-green shrink-0 z-10">
                      <s.icon size={19} className="text-accent" />
                    </div>

                    <div className="md:hidden pl-16">
                      <p className="text-xs font-mono text-accent mb-1">STEP {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="font-semibold text-white text-lg mb-1.5">{s.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

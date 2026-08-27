import { motion } from "framer-motion";
import { FileText, Workflow, Layers3, BookOpen, Telescope, ListOrdered } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";

const methodology = [
  "Collect and preprocess traffic data from benchmark intrusion datasets",
  "Extract statistical and flow-based features from each packet or session",
  "Train and validate multiple classifiers, comparing accuracy and inference speed",
  "Select the best-performing hybrid detection strategy for deployment",
  "Integrate the model into a real-time pipeline with a monitoring dashboard",
];

const references = [
  "Sharafaldin, I. et al. — \"Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization\" (CICIDS2017)",
  "Moustafa, N., Slay, J. — \"UNSW-NB15: A Comprehensive Data Set for Network Intrusion Detection Systems\"",
  "Tavallaee, M. et al. — \"A Detailed Analysis of the KDD CUP 99 Data Set\"",
  "Buczak, A. L., Guven, E. — \"A Survey of Data Mining and Machine Learning Methods for Cyber Security Intrusion Detection\"",
];

export default function Research() {
  return (
    <div>
      <PageHero
        eyebrow="Documentation"
        title="Research"
        description="The academic backbone of the NetLens project — abstract, methodology, architecture, and the literature it builds on."
        crumbs={[{ label: "Research" }]}
      />

      <section className="section">
        <div className="container-lens grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} className="text-accent" />
                <h3 className="font-semibold text-white text-lg">Abstract</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                This project presents NetLens, a hybrid Network Intrusion Detection System that combines
                signature-based rule matching with anomaly-based machine learning to identify malicious
                network traffic in real time. The system captures live packets, extracts flow-level
                features, and classifies traffic using models trained on established benchmark datasets.
                Results show that ensemble methods such as Random Forest and XGBoost achieve the strongest
                balance of accuracy and inference speed, making them suitable for near real-time deployment
                on standard hardware.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <Workflow size={16} className="text-accent" />
                <h3 className="font-semibold text-white text-lg">Methodology</h3>
              </div>
              <ol className="space-y-3">
                {methodology.map((m, i) => (
                  <li key={m} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="font-mono text-accent shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {m}
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <Layers3 size={16} className="text-accent" />
                <h3 className="font-semibold text-white text-lg">System Architecture</h3>
              </div>
              <div className="card-lens p-6 grid sm:grid-cols-3 gap-4 text-center">
                {["Traffic Capture Layer", "Feature & ML Engine", "Dashboard & Alerting"].map((layer, i) => (
                  <div key={layer} className="bg-bg border border-border rounded-lg p-5">
                    <p className="text-xs font-mono text-accent mb-2">LAYER {i + 1}</p>
                    <p className="text-sm font-medium text-white">{layer}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-3">
                Traffic flows left to right: packets are captured, scored by the ML engine, then surfaced
                to administrators through the dashboard and alert system.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={16} className="text-accent" />
                <h3 className="font-semibold text-white text-lg">Literature Review</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prior work on intrusion detection has largely split between signature-based systems, which
                offer precision at the cost of missing novel attacks, and anomaly-based systems, which
                generalize better but produce more false positives. Recent research increasingly favors
                hybrid and ensemble approaches — this project builds directly on that trend, evaluating
                seven classical and ensemble models against three modern benchmark datasets.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <Telescope size={16} className="text-accent" />
                <h3 className="font-semibold text-white text-lg">Future Scope</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Future iterations could extend NetLens to host-based intrusion detection, incorporate deep
                learning models such as LSTMs for sequential traffic analysis, and support distributed
                deployment across multiple network segments with centralized alert correlation.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens p-6 h-fit lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-4">
              <ListOrdered size={16} className="text-accent" />
              <h3 className="font-semibold text-white">References</h3>
            </div>
            <ul className="space-y-4">
              {references.map((r, i) => (
                <li key={i} className="text-xs text-muted leading-relaxed pb-4 border-b border-border last:border-0 last:pb-0">
                  [{i + 1}] {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

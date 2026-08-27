import { motion } from "framer-motion";
import { BrainCircuit, Zap, Check, X } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { models } from "../data/models";

const speedColor = {
  "Very Fast": "text-accent",
  Fast: "text-secondary",
  Moderate: "text-amber-400",
  Slow: "text-danger",
};

export default function MLModels() {
  return (
    <div>
      <PageHero
        eyebrow="Model Comparison"
        title="Machine learning models evaluated"
        description="Seven classifiers were trained and benchmarked to find the best accuracy-to-speed tradeoff for real-time detection."
        crumbs={[{ label: "Machine Learning Models" }]}
      />

      <section className="section">
        <div className="container-lens grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="card-lens p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <BrainCircuit size={18} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-white">{m.name}</h3>
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-muted">Accuracy</span>
                <span className="text-sm font-mono font-semibold text-accent">{m.accuracy}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-bg overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.accuracy}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>

              <div className="flex items-center gap-1.5 text-xs mb-5">
                <Zap size={13} className={speedColor[m.speed]} />
                <span className={speedColor[m.speed]}>{m.speed}</span>
                <span className="text-muted">inference speed</span>
              </div>

              <div className="space-y-2 mb-4">
                {m.advantages.map((a) => (
                  <div key={a} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check size={13} className="text-accent shrink-0 mt-0.5" /> {a}
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-border">
                {m.disadvantages.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-xs text-muted">
                    <X size={13} className="text-danger shrink-0 mt-0.5" /> {d}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

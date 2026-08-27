import { motion } from "framer-motion";
import { ShieldAlert, ChevronRight } from "lucide-react";
import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import { attacks, riskColor } from "../data/attacks";

export default function AttackTypes() {
  const [active, setActive] = useState(attacks[0].id);
  const activeAttack = attacks.find((a) => a.id === active);

  return (
    <div>
      <PageHero
        eyebrow="Threat Library"
        title="Common attack types NetLens watches for"
        description="Ten attack patterns that make up the majority of real-world network intrusions, each with its own signature and prevention strategy."
        crumbs={[{ label: "Attack Types" }]}
      />

      <section className="section">
        <div className="container-lens grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {attacks.map((a, i) => (
            <motion.button
              key={a.id}
              onClick={() => setActive(a.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 5) * 0.06 }}
              className={`text-left card-lens p-5 transition-all duration-300 hover:-translate-y-1 ${
                active === a.id ? "border-accent shadow-glow-green" : "hover:border-accent/40"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg bg-danger/10 border border-danger/30 flex items-center justify-center">
                  <ShieldAlert size={17} className="text-danger" />
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-full border font-medium ${riskColor[a.risk]}`}>
                  {a.risk}
                </span>
              </div>
              <p className="font-semibold text-white text-sm">{a.name}</p>
              <p className="text-xs text-muted mt-1">{a.short}</p>
            </motion.button>
          ))}
        </div>

        {activeAttack && (
          <motion.div
            key={activeAttack.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-lens p-8 md:p-10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-danger/10 border border-danger/30 flex items-center justify-center">
                  <ShieldAlert size={24} className="text-danger" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{activeAttack.name}</h2>
                  <p className="text-sm text-muted">{activeAttack.short}</p>
                </div>
              </div>
              <span className={`text-sm px-3 py-1.5 rounded-full border font-medium ${riskColor[activeAttack.risk]}`}>
                Risk Level: {activeAttack.risk}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-3xl mb-8">{activeAttack.description}</p>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Prevention Methods</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {activeAttack.prevention.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 bg-bg border border-border rounded-lg p-4 text-sm text-slate-300">
                    <ChevronRight size={15} className="text-accent shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}

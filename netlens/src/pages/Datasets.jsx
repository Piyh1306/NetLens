import { motion } from "framer-motion";
import { Database, Download } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { datasets } from "../data/datasets";

export default function Datasets() {
  return (
    <div>
      <PageHero
        eyebrow="Training Data"
        title="Datasets behind the detection models"
        description="NetLens's classifiers are trained and benchmarked against four widely used intrusion detection datasets, each with different scale and attack coverage."
        crumbs={[{ label: "Dataset" }]}
      />

      <section className="section">
        <div className="container-lens">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {datasets.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="card-lens p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Database size={20} className="text-secondary" />
                  </div>
                  <span className="text-xs font-mono text-muted border border-border rounded-full px-2.5 py-1">
                    {d.year}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">{d.name}</h3>
                <p className="text-xs text-muted mb-4">{d.source}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{d.description}</p>
                <div className="flex items-center justify-between text-xs text-muted mb-5">
                  <span>{d.records} records</span>
                  <span>{d.attackTypes} attack categories</span>
                </div>
                <button className="btn-outline w-full !py-2.5 text-sm">
                  <Download size={14} /> Download Dataset
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="card-lens overflow-hidden"
          >
            <div className="p-6">
              <p className="font-semibold text-white">Dataset Comparison</p>
              <p className="text-xs text-muted mt-1">Quick reference across scale, source, and coverage</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-t border-border text-left text-xs text-muted uppercase tracking-wider">
                    <th className="px-6 py-3 font-medium">Dataset</th>
                    <th className="px-6 py-3 font-medium">Year</th>
                    <th className="px-6 py-3 font-medium">Records</th>
                    <th className="px-6 py-3 font-medium">Attack Categories</th>
                    <th className="px-6 py-3 font-medium">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {datasets.map((d) => (
                    <tr key={d.name} className="border-t border-border hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-3.5 font-medium text-white">{d.name}</td>
                      <td className="px-6 py-3.5 text-slate-300">{d.year}</td>
                      <td className="px-6 py-3.5 text-slate-300 font-mono">{d.records}</td>
                      <td className="px-6 py-3.5 text-slate-300">{d.attackTypes}</td>
                      <td className="px-6 py-3.5 text-muted">{d.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

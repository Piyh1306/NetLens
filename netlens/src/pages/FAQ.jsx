import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const faqs = [
  {
    q: "What makes NetLens different from a regular firewall?",
    a: "A firewall blocks traffic based on fixed rules. NetLens observes traffic, learns what's normal, and flags anomalies a static rule set would miss — while still using signature matching for known threats.",
  },
  {
    q: "Which datasets were used to train the models?",
    a: "NetLens's classifiers were trained and evaluated on CICIDS2017, NSL-KDD, UNSW-NB15, and KDD Cup 99 — four widely cited intrusion detection benchmarks.",
  },
  {
    q: "Is this a production-ready security product?",
    a: "No — NetLens is a final-year academic project built to demonstrate the detection pipeline end-to-end. The live monitoring view uses simulated data for demonstration.",
  },
  {
    q: "Which machine learning model performs best?",
    a: "In our evaluation, XGBoost and Random Forest delivered the strongest accuracy, while Logistic Regression and Naive Bayes offered the fastest inference at a lower accuracy trade-off.",
  },
  {
    q: "Can NetLens be extended to host-based detection?",
    a: "Yes — the architecture separates traffic capture from the ML engine, so a host-based data source could be integrated with the same feature extraction and classification pipeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <PageHero eyebrow="Help" title="Frequently Asked Questions" description="Answers to common questions about how NetLens works." crumbs={[{ label: "FAQ" }]} />
      <section className="section pt-14">
        <div className="container-lens max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="card-lens overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white text-sm pr-4">{f.q}</span>
                <ChevronDown size={16} className={`text-accent shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

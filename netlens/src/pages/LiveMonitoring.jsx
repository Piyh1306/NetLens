import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Radio } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { generatePacket } from "../data/traffic";

const statusColor = {
  Normal: "text-accent",
  Suspicious: "text-amber-400",
  Blocked: "text-danger",
};

const threatColor = {
  Low: "bg-secondary/15 text-secondary border-secondary/30",
  Medium: "bg-amber-400/15 text-amber-400 border-amber-400/30",
  High: "bg-danger/15 text-danger border-danger/30",
  Critical: "bg-danger/25 text-danger border-danger/50",
};

export default function LiveMonitoring() {
  const [packets, setPackets] = useState([]);
  const [running, setRunning] = useState(true);
  const counter = useRef(0);
  const [counts, setCounts] = useState({ Normal: 0, Suspicious: 0, Blocked: 0 });

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      counter.current += 1;
      const packet = generatePacket(counter.current);
      setPackets((prev) => [packet, ...prev].slice(0, 14));
      setCounts((prev) => ({ ...prev, [packet.status]: prev[packet.status] + 1 }));
    }, 1100);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <PageHero
        eyebrow="Simulation"
        title="Live Monitoring"
        description="A simulated packet stream showing how NetLens classifies traffic the moment it arrives. This view is illustrative for demonstration purposes."
        crumbs={[{ label: "Live Monitoring" }]}
      />

      <section className="section pt-14">
        <div className="container-lens">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5">
                <Radio size={12} className={running ? "animate-pulse" : ""} />
                {running ? "STREAMING" : "PAUSED"}
              </span>
              <span className="text-xs text-muted font-mono">{counter.current} packets captured</span>
            </div>
            <button onClick={() => setRunning((r) => !r)} className="btn-outline !py-2 !px-4 text-sm">
              {running ? <Pause size={14} /> : <Play size={14} />}
              {running ? "Pause Stream" : "Resume Stream"}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {["Normal", "Suspicious", "Blocked"].map((k) => (
              <div key={k} className="card-lens p-4 text-center">
                <p className={`text-2xl font-bold font-display ${statusColor[k]}`}>{counts[k]}</p>
                <p className="text-xs text-muted mt-1">{k}</p>
              </div>
            ))}
          </div>

          <div className="card-lens overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted uppercase tracking-wider">
                    <th className="px-6 py-3 font-medium">IP Address</th>
                    <th className="px-6 py-3 font-medium">Protocol</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Threat Level</th>
                    <th className="px-6 py-3 font-medium">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence initial={false}>
                    {packets.map((p) => (
                      <motion.tr
                        key={p.id}
                        initial={{ opacity: 0, backgroundColor: "rgba(37,99,235,0.15)" }}
                        animate={{ opacity: 1, backgroundColor: "rgba(37,99,235,0)" }}
                        transition={{ duration: 1.2 }}
                        className="border-t border-border"
                      >
                        <td className="px-6 py-3 font-mono text-slate-300">{p.ip}</td>
                        <td className="px-6 py-3 text-slate-300">{p.protocol}</td>
                        <td className={`px-6 py-3 font-medium ${statusColor[p.status]}`}>{p.status}</td>
                        <td className="px-6 py-3">
                          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${threatColor[p.threat]}`}>
                            {p.threat}
                          </span>
                        </td>
                        <td className="px-6 py-3 text-muted font-mono text-xs">{p.time}</td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                  {packets.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-muted py-10 text-sm">
                        Waiting for packets…
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

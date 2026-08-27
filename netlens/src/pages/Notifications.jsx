import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Info } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { recentAlerts } from "../data/traffic";

const icons = { Critical: ShieldAlert, High: ShieldAlert, Medium: Info, Low: ShieldCheck };
const colors = { Critical: "text-danger bg-danger/10 border-danger/30", High: "text-danger bg-danger/10 border-danger/30", Medium: "text-amber-400 bg-amber-400/10 border-amber-400/30", Low: "text-secondary bg-secondary/10 border-secondary/30" };

export default function Notifications() {
  return (
    <div>
      <PageHero eyebrow="Alerts" title="Notification Panel" description="All recent system notifications in one place." crumbs={[{ label: "Notifications" }]} />
      <section className="section pt-14">
        <div className="container-lens max-w-2xl mx-auto space-y-3">
          {recentAlerts.map((a, i) => {
            const Icon = icons[a.severity];
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-lens p-5 flex items-start gap-4"
              >
                <span className={`h-10 w-10 rounded-lg border flex items-center justify-center shrink-0 ${colors[a.severity]}`}>
                  <Icon size={17} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">{a.type} detected</p>
                    <span className="text-xs text-muted">{a.time}</span>
                  </div>
                  <p className="text-xs text-muted mt-1 font-mono">
                    {a.ip} · {a.status}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

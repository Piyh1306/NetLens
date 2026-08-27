import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function StatCard({ icon: Icon, label, value, suffix = "", prefix = "", accentColor = "text-accent", trend }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      className="card-lens p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted mb-2">{label}</p>
          <p className={`text-2xl md:text-3xl font-bold font-display ${accentColor}`}>
            <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
          </p>
        </div>
        {Icon && (
          <div className="h-10 w-10 rounded-lg bg-bg border border-border flex items-center justify-center shrink-0">
            <Icon size={16} className={accentColor} />
          </div>
        )}
      </div>
      {trend && <p className="text-xs text-muted mt-3">{trend}</p>}
    </motion.div>
  );
}

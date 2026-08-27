import { motion } from "framer-motion";
import {
  ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line, AreaChart, Area,
} from "recharts";
import { Package, ShieldCheck, ShieldAlert, ShieldX, Target, Signal } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import StatCard from "../components/dashboard/StatCard";
import { trafficByHour, trafficComposition, attackCategoryBar, recentAlerts } from "../data/traffic";
import { riskColor } from "../data/attacks";

const tooltipStyle = {
  contentStyle: { background: "#0F172A", border: "1px solid #1E293B", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "#94A3B8" },
};

export default function Dashboard() {
  return (
    <div>
      <PageHero
        eyebrow="Live Overview"
        title="Detection Dashboard"
        description="Real-time visibility into packet volume, traffic health, and the most recent alerts flagged by the detection engine."
        crumbs={[{ label: "Dashboard" }]}
      />

      <section className="section pt-14">
        <div className="container-lens">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-xl font-semibold">System Snapshot</h2>
            <span className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> LIVE STATUS: OPERATIONAL
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            <StatCard icon={Package} label="Total Packets" value={128420} suffix="" accentColor="text-white" />
            <StatCard icon={ShieldCheck} label="Normal Traffic" value={82} suffix="%" accentColor="text-accent" />
            <StatCard icon={ShieldAlert} label="Suspicious Traffic" value={13} suffix="%" accentColor="text-amber-400" />
            <StatCard icon={ShieldX} label="Blocked Attacks" value={3427} accentColor="text-danger" />
            <StatCard icon={Target} label="Detection Accuracy" value={99} suffix="%" accentColor="text-secondary" />
            <StatCard icon={Signal} label="Live Status" value={1} suffix="" accentColor="text-accent" trend="System operational" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="card-lens p-6 lg:col-span-2"
            >
              <p className="font-semibold text-white mb-1">Network Traffic Over Time</p>
              <p className="text-xs text-muted mb-5">Normal vs. suspicious vs. blocked packets by hour</p>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={trafficByHour}>
                  <defs>
                    <linearGradient id="normalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="time" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} />
                  <Area type="monotone" dataKey="normal" stroke="#22C55E" fill="url(#normalGrad)" strokeWidth={2} name="Normal" />
                  <Line type="monotone" dataKey="suspicious" stroke="#F59E0B" strokeWidth={2} dot={false} name="Suspicious" />
                  <Line type="monotone" dataKey="blocked" stroke="#EF4444" strokeWidth={2} dot={false} name="Blocked" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
              className="card-lens p-6"
            >
              <p className="font-semibold text-white mb-1">Traffic Composition</p>
              <p className="text-xs text-muted mb-3">Share of total packets</p>
              <ResponsiveContainer width="100%" height={230}>
                <PieChart>
                  <Pie
                    data={trafficComposition}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                  >
                    {trafficComposition.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} stroke="#0B1120" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip {...tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {trafficComposition.map((t) => (
                  <div key={t.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: t.color }} />
                      {t.name}
                    </span>
                    <span className="font-mono text-white">{t.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="card-lens p-6 mb-6"
          >
            <p className="font-semibold text-white mb-1">Attacks Detected by Category</p>
            <p className="text-xs text-muted mb-5">Count of flagged events this month</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={attackCategoryBar}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} cursor={{ fill: "rgba(37,99,235,0.08)" }} />
                <Bar dataKey="count" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="card-lens overflow-hidden"
          >
            <div className="p-6 pb-0 flex items-center justify-between">
              <p className="font-semibold text-white">Recent Alerts</p>
              <span className="text-xs text-muted font-mono">{recentAlerts.length} events</span>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-t border-border text-left text-xs text-muted uppercase tracking-wider">
                    <th className="px-6 py-3 font-medium">IP Address</th>
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">Severity</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAlerts.map((a) => (
                    <tr key={a.id} className="border-t border-border hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-3.5 font-mono text-slate-300">{a.ip}</td>
                      <td className="px-6 py-3.5 text-white">{a.type}</td>
                      <td className="px-6 py-3.5">
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${riskColor[a.severity]}`}>
                          {a.severity}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <span className={a.status === "Blocked" ? "text-danger" : "text-secondary"}>{a.status}</span>
                      </td>
                      <td className="px-6 py-3.5 text-muted">{a.time}</td>
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

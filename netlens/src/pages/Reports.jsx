import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";
import { Download, TrendingUp } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { weeklyAttacks, monthlyAttacks, topAttackingIps, attackCategoryBar } from "../data/traffic";

const tooltipStyle = {
  contentStyle: { background: "#0F172A", border: "1px solid #1E293B", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "#94A3B8" },
};

export default function Reports() {
  return (
    <div>
      <PageHero
        eyebrow="Analytics"
        title="Reports"
        description="A breakdown of attack activity over time, the categories involved, and the IPs responsible for the most attempts."
        crumbs={[{ label: "Reports" }]}
      />

      <section className="section pt-14">
        <div className="container-lens">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted">
              <TrendingUp size={16} className="text-accent" />
              Detection rate this month: <span className="text-white font-semibold">99.1%</span>
            </div>
            <button className="btn-primary !py-2.5 !px-5 text-sm">
              <Download size={14} /> Download PDF Report
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="card-lens p-6">
              <p className="font-semibold text-white mb-1">Weekly Attacks</p>
              <p className="text-xs text-muted mb-5">Flagged events by day, last 7 days</p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={weeklyAttacks}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="day" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} cursor={{ fill: "rgba(37,99,235,0.08)" }} />
                  <Bar dataKey="attacks" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="card-lens p-6">
              <p className="font-semibold text-white mb-1">Monthly Attacks</p>
              <p className="text-xs text-muted mb-5">Trend over the last 6 months</p>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={monthlyAttacks}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} />
                  <Line type="monotone" dataKey="attacks" stroke="#22C55E" strokeWidth={2.5} dot={{ fill: "#22C55E", r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens overflow-hidden">
              <div className="p-6 pb-4">
                <p className="font-semibold text-white">Top Attacking IPs</p>
                <p className="text-xs text-muted mt-1">Ranked by attempt count this month</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-t border-border text-left text-xs text-muted uppercase tracking-wider">
                    <th className="px-6 py-3 font-medium">IP</th>
                    <th className="px-6 py-3 font-medium">Attempts</th>
                    <th className="px-6 py-3 font-medium">Origin</th>
                  </tr>
                </thead>
                <tbody>
                  {topAttackingIps.map((t) => (
                    <tr key={t.ip} className="border-t border-border">
                      <td className="px-6 py-3 font-mono text-slate-300">{t.ip}</td>
                      <td className="px-6 py-3 text-danger font-semibold">{t.attempts}</td>
                      <td className="px-6 py-3 text-muted">{t.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens p-6">
              <p className="font-semibold text-white mb-1">Attack Categories</p>
              <p className="text-xs text-muted mb-5">Distribution of flagged events by type</p>
              <div className="space-y-3">
                {attackCategoryBar.map((c) => {
                  const max = Math.max(...attackCategoryBar.map((x) => x.count));
                  return (
                    <div key={c.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">{c.name}</span>
                        <span className="font-mono text-white">{c.count}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-bg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(c.count / max) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Users, ShieldAlert, Settings, Database, Search, MoreVertical } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { recentAlerts } from "../data/traffic";
import { riskColor } from "../data/attacks";

const users = [
  { name: "Aarav Mehta", email: "aarav@netlens.io", role: "Super Admin", status: "Active" },
  { name: "Priya Nair", email: "priya@netlens.io", role: "Analyst", status: "Active" },
  { name: "Rohan Iyer", email: "rohan@netlens.io", role: "Viewer", status: "Suspended" },
  { name: "Sara Khan", email: "sara@netlens.io", role: "Analyst", status: "Active" },
];

const statCards = [
  { icon: Users, label: "Active Users", value: "4" },
  { icon: ShieldAlert, label: "Open Alerts", value: recentAlerts.length.toString() },
  { icon: Database, label: "Datasets Loaded", value: "4" },
  { icon: Settings, label: "System Uptime", value: "99.98%" },
];

export default function AdminPanel() {
  return (
    <div>
      <PageHero
        eyebrow="Admin"
        title="Admin Panel"
        description="UI-only demonstration of administrative controls — manage users, review alerts, and adjust system settings."
        crumbs={[{ label: "Admin Panel" }]}
      />

      <section className="section pt-14">
        <div className="container-lens">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {statCards.map((s) => (
              <div key={s.label} className="card-lens p-5">
                <s.icon size={17} className="text-accent mb-3" />
                <p className="text-2xl font-bold font-display text-white">{s.value}</p>
                <p className="text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens overflow-hidden mb-8">
            <div className="p-6 flex items-center justify-between flex-wrap gap-3">
              <p className="font-semibold text-white">User Management</p>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input placeholder="Search users..." className="bg-bg border border-border rounded-lg pl-9 pr-3 py-2 text-xs w-52 focus:border-accent outline-none" />
              </div>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-border text-left text-xs text-muted uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email} className="border-t border-border hover:bg-white/[0.02]">
                    <td className="px-6 py-3.5 text-white font-medium">{u.name}</td>
                    <td className="px-6 py-3.5 text-muted">{u.email}</td>
                    <td className="px-6 py-3.5 text-slate-300">{u.role}</td>
                    <td className="px-6 py-3.5">
                      <span className={u.status === "Active" ? "text-accent" : "text-danger"}>{u.status}</span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <button className="text-muted hover:text-white">
                        <MoreVertical size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens overflow-hidden">
            <div className="p-6">
              <p className="font-semibold text-white">Alert Queue</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-border text-left text-xs text-muted uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">IP</th>
                  <th className="px-6 py-3 font-medium">Type</th>
                  <th className="px-6 py-3 font-medium">Severity</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentAlerts.slice(0, 4).map((a) => (
                  <tr key={a.id} className="border-t border-border hover:bg-white/[0.02]">
                    <td className="px-6 py-3.5 font-mono text-slate-300">{a.ip}</td>
                    <td className="px-6 py-3.5 text-white">{a.type}</td>
                    <td className="px-6 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${riskColor[a.severity]}`}>{a.severity}</span>
                    </td>
                    <td className="px-6 py-3.5">
                      <button className="text-xs text-accent hover:underline">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { User, Mail, Shield, Bell, Key } from "lucide-react";
import PageHero from "../components/ui/PageHero";

export default function Profile() {
  return (
    <div>
      <PageHero eyebrow="Account" title="User Profile" description="Manage your account details and preferences." crumbs={[{ label: "Profile" }]} />

      <section className="section pt-14">
        <div className="container-lens grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-lens p-7 text-center h-fit">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-2xl font-bold font-display mb-4">
              AM
            </div>
            <h3 className="font-semibold text-white text-lg">Aarav Mehta</h3>
            <p className="text-xs text-muted mt-1">Super Admin</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-accent mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Online
            </div>
            <button className="btn-outline w-full !py-2.5 text-sm mt-6">Change Avatar</button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="card-lens p-7">
              <p className="font-semibold text-white mb-5 flex items-center gap-2"><User size={16} className="text-accent" /> Personal Information</p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-2 block">Full Name</label>
                  <input defaultValue="Aarav Mehta" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-2 block">Email</label>
                  <input defaultValue="aarav@netlens.io" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-accent outline-none" />
                </div>
              </div>
              <button className="btn-primary !py-2.5 !px-5 text-sm mt-6">Save Changes</button>
            </div>

            <div className="card-lens p-7">
              <p className="font-semibold text-white mb-5 flex items-center gap-2"><Key size={16} className="text-accent" /> Security</p>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="text-sm text-white">Two-Factor Authentication</p>
                  <p className="text-xs text-muted mt-0.5">Add an extra layer of security</p>
                </div>
                <button className="btn-outline !py-2 !px-3 text-xs">Enable</button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm text-white">Password</p>
                  <p className="text-xs text-muted mt-0.5">Last changed 3 months ago</p>
                </div>
                <button className="btn-outline !py-2 !px-3 text-xs">Update</button>
              </div>
            </div>

            <div className="card-lens p-7">
              <p className="font-semibold text-white mb-5 flex items-center gap-2"><Bell size={16} className="text-accent" /> Notification Preferences</p>
              {["Email alerts for critical threats", "Weekly summary reports", "Product updates"].map((n) => (
                <label key={n} className="flex items-center justify-between py-2.5 text-sm text-slate-300">
                  {n}
                  <input type="checkbox" defaultChecked className="rounded border-border accent-accent h-4 w-4" />
                </label>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

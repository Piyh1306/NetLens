import { Link } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";
import AuthCard from "../components/ui/AuthCard";

export default function Register() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Set up admin access to monitor and manage NetLens"
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs font-medium text-slate-300 mb-2 block">Full Name</label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input type="text" required placeholder="Jane Doe" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-300 mb-2 block">Email</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input type="email" required placeholder="you@example.com" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-300 mb-2 block">Password</label>
          <div className="relative">
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input type="password" required placeholder="Create a password" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
          </div>
        </div>
        <label className="flex items-start gap-2 text-xs text-muted">
          <input type="checkbox" required className="mt-0.5 rounded border-border accent-accent" />
          I agree to the{" "}
          <Link to="/terms" className="text-accent hover:underline">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </label>
        <button type="submit" className="btn-primary w-full">
          Create Account
        </button>
      </form>
    </AuthCard>
  );
}

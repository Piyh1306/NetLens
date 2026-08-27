import { Link } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import AuthCard from "../components/ui/AuthCard";

export default function Login() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to access the NetLens admin dashboard"
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-accent font-medium hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs font-medium text-slate-300 mb-2 block">Email</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input type="email" required placeholder="you@example.com" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-slate-300">Password</label>
            <Link to="/forgot-password" className="text-xs text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input type="password" required placeholder="••••••••" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
          </div>
        </div>
        <label className="flex items-center gap-2 text-xs text-muted">
          <input type="checkbox" className="rounded border-border accent-accent" /> Keep me signed in
        </label>
        <button type="submit" className="btn-primary w-full">
          Log In
        </button>
      </form>
    </AuthCard>
  );
}

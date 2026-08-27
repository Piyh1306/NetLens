import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle2 } from "lucide-react";
import AuthCard from "../components/ui/AuthCard";

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);

  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email and we'll send a reset link"
      footer={
        <Link to="/login" className="text-accent font-medium hover:underline">
          Back to log in
        </Link>
      }
    >
      {sent ? (
        <div className="text-center py-4">
          <CheckCircle2 size={36} className="text-accent mx-auto mb-4" />
          <p className="text-sm text-slate-300">
            If an account exists for that email, a reset link has been sent.
          </p>
        </div>
      ) : (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label className="text-xs font-medium text-slate-300 mb-2 block">Email</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input type="email" required placeholder="you@example.com" className="w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:border-accent outline-none transition-colors" />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Reset Link
          </button>
        </form>
      )}
    </AuthCard>
  );
}

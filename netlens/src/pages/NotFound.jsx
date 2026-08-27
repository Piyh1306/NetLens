import { Link } from "react-router-dom";
import { ShieldQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <ShieldQuestion size={44} className="text-accent mx-auto mb-6" />
        <p className="font-mono text-xs text-muted mb-3 tracking-widest">ERROR 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Packet not found on this route</h1>
        <p className="text-muted max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}

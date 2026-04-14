import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — L'Épicurien" },
      { name: "description", content: "Sign in to your L'Épicurien account. Access your reservations, order history, and exclusive offers." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Authentication coming soon. This is a UI preview.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="font-display text-3xl text-gold tracking-wide">L'Épicurien</Link>
          <p className="text-muted-foreground text-sm mt-3">Welcome back. Sign in to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Email Address</label>
            <Input type="email" placeholder="your@email.com" className="bg-card border-border py-3 h-auto" required />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Input type={showPass ? "text" : "password"} placeholder="••••••••" className="bg-card border-border py-3 h-auto pr-10" required />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
              <input type="checkbox" className="accent-gold" /> Remember me
            </label>
            <button type="button" className="text-gold hover:text-gold-light transition-colors text-xs uppercase tracking-wider">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="w-full bg-gold text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-gold hover:text-gold-light transition-colors">Create one</Link>
        </p>
      </motion.div>
    </div>
  );
}

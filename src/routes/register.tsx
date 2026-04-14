import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account — L'Épicurien" },
      { name: "description", content: "Create your L'Épicurien account. Enjoy seamless reservations, order tracking, and exclusive member privileges." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Registration coming soon. This is a UI preview.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="font-display text-3xl text-gold tracking-wide">L'Épicurien</Link>
          <p className="text-muted-foreground text-sm mt-3">Join us. Create your account below.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">First Name</label>
              <Input placeholder="Jean" className="bg-card border-border py-3 h-auto" required />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Last Name</label>
              <Input placeholder="Dubois" className="bg-card border-border py-3 h-auto" required />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Email Address</label>
            <Input type="email" placeholder="your@email.com" className="bg-card border-border py-3 h-auto" required />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Phone</label>
            <Input type="tel" placeholder="+250 789 000 000" className="bg-card border-border py-3 h-auto" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Input type={showPass ? "text" : "password"} placeholder="Create a strong password" className="bg-card border-border py-3 h-auto pr-10" required />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" className="accent-gold mt-1" required />
            <span>I agree to the terms of service and privacy policy</span>
          </label>

          <button type="submit" className="w-full bg-gold text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-gold hover:text-gold-light transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}

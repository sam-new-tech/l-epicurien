import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/menu" as const, label: "Menu" },
  { to: "/reservations" as const, label: "Reservations" },
  { to: "/order" as const, label: "Order" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl tracking-wide text-gold">
            L'Épicurien
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                activeProps={{ className: "text-sm tracking-widest uppercase text-gold" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link to="/order" className="relative hover:text-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-primary-foreground text-xs flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/login" className="hidden lg:flex hover:text-gold transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden hover:text-gold transition-colors" aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-lg tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "block text-lg tracking-widest uppercase text-gold" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="block text-lg tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Link } from "@tanstack/react-router";
import { restaurant } from "@/lib/restaurant-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-gold mb-4">L'Épicurien</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Authentic French gastronomy in the heart of Kigali. A celebration of flavour, tradition, and the art of fine dining.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Navigate</h4>
            <div className="space-y-3">
              {[
                { to: "/menu" as const, label: "Menu" },
                { to: "/reservations" as const, label: "Reservations" },
                { to: "/order" as const, label: "Order Online" },
                { to: "/about" as const, label: "Our Story" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mon – Fri: 11:30 – 22:00</p>
              <p>Saturday: 17:00 – 22:00</p>
              <p>Sunday: 11:30 – 22:00</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Visit Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{restaurant.address}</p>
              <p>{restaurant.phone}</p>
              <p className="pt-4 text-xs">Visa · Mastercard · Amex · Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} L'Épicurien. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/login" className="text-xs text-muted-foreground hover:text-gold transition-colors">Sign In</Link>
            <Link to="/register" className="text-xs text-muted-foreground hover:text-gold transition-colors">Create Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

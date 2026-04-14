import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { heroImages, restaurant } from "@/lib/restaurant-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, CreditCard, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — L'Épicurien" },
      { name: "description", content: "Get in touch with L'Épicurien. Find us in Kimihurura, Kigali. Reservations, private events, and general inquiries." },
      { property: "og:title", content: "Contact — L'Épicurien" },
      { property: "og:description", content: "Find us in Kimihurura, Kigali. Reservations, private events, and inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div>
      <HeroSection image={heroImages.contact} title="Contact" subtitle="We'd love to hear from you" compact />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold">Location</h3>
              </div>
              <p className="text-foreground">{restaurant.address}</p>
              <p className="text-sm text-muted-foreground mt-1">Kimihurura District, near the Convention Centre</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-gold" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold">Telephone</h3>
              </div>
              <p className="text-foreground">{restaurant.phone}</p>
              <p className="text-sm text-muted-foreground mt-1">Available during operating hours</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold">Hours</h3>
              </div>
              <div className="space-y-2">
                {restaurant.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm max-w-xs">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.open} – {h.close}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-gold" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold">Payment</h3>
              </div>
              <p className="text-sm text-muted-foreground">{restaurant.payments.join(" · ")}</p>
            </div>

            {/* Map */}
            <div className="border border-border overflow-hidden">
              <iframe src={restaurant.mapEmbed} width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="L'Épicurien location" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">Message Received</h3>
                <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="text-sm text-gold hover:text-gold-light transition-colors tracking-wide uppercase">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Send Us a Message</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Name *</label>
                    <Input placeholder="Your name" className="bg-card border-border py-3 h-auto" required />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Email *</label>
                    <Input type="email" placeholder="your@email.com" className="bg-card border-border py-3 h-auto" required />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Subject</label>
                  <Input placeholder="Reservation inquiry, private event, feedback…" className="bg-card border-border py-3 h-auto" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Message *</label>
                  <Textarea placeholder="Tell us how we can help…" className="bg-card border-border min-h-[150px]" required />
                </div>
                <button type="submit" className="w-full bg-gold text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { heroImages, restaurant } from "@/lib/restaurant-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — L'Épicurien" },
      { name: "description", content: "Reserve your table at L'Épicurien. Private dining, garden gazebos, and romantic settings for every occasion." },
      { property: "og:title", content: "Reservations — L'Épicurien" },
      { property: "og:description", content: "Reserve your table for an unforgettable dining experience in Kigali." },
    ],
  }),
  component: ReservationsPage,
});

const timeSlots = ["11:30", "12:00", "12:30", "13:00", "13:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    setConfirmed(true);
    toast.success("Reservation confirmed!");
  };

  if (confirmed) {
    return (
      <div>
        <HeroSection image={heroImages.reservations} title="Confirmed" subtitle="We look forward to welcoming you" compact />
        <section className="py-24 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-display text-3xl text-foreground mb-4">Your Table Awaits</h2>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p><span className="text-foreground font-medium">{name}</span></p>
              <p>{date && format(date, "EEEE, MMMM do, yyyy")} at {time}</p>
              <p>{guests} {guests === 1 ? "guest" : "guests"}</p>
            </div>
            <div className="mt-8 p-6 border border-border rounded-lg text-left text-sm text-muted-foreground">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Details</p>
              <p>{restaurant.address}</p>
              <p>{restaurant.phone}</p>
              {notes && <p className="mt-2 italic">Note: {notes}</p>}
            </div>
            <button onClick={() => setConfirmed(false)} className="mt-8 text-sm text-gold hover:text-gold-light transition-colors tracking-wide uppercase">
              Make Another Reservation
            </button>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <HeroSection image={heroImages.reservations} title="Reservations" subtitle="Secure your place at the table" compact />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Select Your Preferences</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Date *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className={cn("w-full flex items-center gap-2 border border-border bg-card px-4 py-3 text-sm text-left", !date && "text-muted-foreground")}>
                        <CalendarIcon className="w-4 h-4 text-gold" />
                        {date ? format(date, "MMM d, yyyy") : "Choose date"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Time *</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full border border-border bg-card pl-10 pr-4 py-3 text-sm appearance-none cursor-pointer">
                      <option value="">Select</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Guests *</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full border border-border bg-card pl-10 pr-4 py-3 text-sm appearance-none cursor-pointer">
                      {partySizes.map((n) => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Your Information</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Full Name *</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jean-Pierre Dubois" className="bg-card border-border py-3 h-auto" required />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Email *</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jean@example.com" className="bg-card border-border py-3 h-auto" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Phone *</label>
                  <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+250 789 175 868" className="bg-card border-border py-3 h-auto" required />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Special Requests</label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Dietary requirements, celebrations, seating preference…" className="bg-card border-border min-h-[100px]" />
            </div>

            <button type="submit" className="w-full bg-gold text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
              Confirm Reservation
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.aside initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-2 space-y-8">
            <div className="border border-border p-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Hours of Service</h3>
              <div className="space-y-3">
                {restaurant.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.open} – {h.close}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Private Dining</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For parties of 8 or more, we offer private garden gazebos and bespoke menus. Contact us directly at <span className="text-gold">{restaurant.phone}</span> for arrangements.
              </p>
            </div>

            <div className="overflow-hidden border border-border">
              <img src={heroImages.reservations} alt="Dining atmosphere" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

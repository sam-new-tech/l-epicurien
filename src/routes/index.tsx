import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { restaurant, heroImages, galleryImages } from "@/lib/restaurant-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L'Épicurien — French Fine Dining in Kigali" },
      { name: "description", content: "Where French tradition meets Kigali's soul. Reserve your table at L'Épicurien for an unforgettable dining experience." },
      { property: "og:title", content: "L'Épicurien — French Fine Dining in Kigali" },
      { property: "og:description", content: "Where French tradition meets Kigali's soul. Reserve your table for an unforgettable dining experience." },
      { property: "og:image", content: heroImages.home },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" } }),
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImages.home} alt="L'Épicurien fine dining ambiance" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Established in Kigali</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05]">
              L'Épicurien
            </h1>
            <div className="w-20 h-px bg-gold mx-auto my-8" />
            <p className="text-lg md:text-2xl text-cream/80 font-light tracking-wide font-display italic">
              {restaurant.tagline}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
              Reserve a Table
            </Link>
            <Link to="/menu" className="inline-flex items-center justify-center gap-2 border border-gold/40 text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.4em] uppercase text-gold mb-6">The Experience</motion.p>
            <motion.p variants={fadeUp} custom={1} className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 font-light italic">
              "{restaurant.description}"
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold fill-gold" />
                {restaurant.rating} · {restaurant.reviewCount} reviews
              </span>
              <span className="w-px h-4 bg-border" />
              <span>{restaurant.priceRange} · French</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            { title: "Reserve", desc: "Secure your table for an evening of refined pleasure. Private dining and garden gazebos available.", link: "/reservations" as const, img: heroImages.reservations },
            { title: "Dine", desc: "Explore our carefully curated menu — from classic escargots to Filet de Bœuf Rossini with Périgord truffle.", link: "/menu" as const, img: heroImages.menu },
            { title: "Order", desc: "Enjoy our cuisine at home. Full menu available for takeaway — same care, same quality, your space.", link: "/order" as const, img: heroImages.about },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={item.link} className="group block bg-card relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm tracking-wide group-hover:gap-3 transition-all">
                    Discover <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Gallery</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl text-foreground">Moments at L'Épicurien</motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`overflow-hidden ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={img} alt="L'Épicurien atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 aspect-square" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="border-t border-border py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <Clock className="w-5 h-5 text-gold mx-auto mb-4" />
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Hours</h4>
            <p className="text-sm text-muted-foreground">Mon–Fri: 11:30 – 22:00</p>
            <p className="text-sm text-muted-foreground">Sat: 17:00 – 22:00</p>
            <p className="text-sm text-muted-foreground">Sun: 11:30 – 22:00</p>
          </div>
          <div>
            <MapPin className="w-5 h-5 text-gold mx-auto mb-4" />
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Location</h4>
            <p className="text-sm text-muted-foreground">{restaurant.address}</p>
            <p className="text-sm text-muted-foreground mt-1">{restaurant.phone}</p>
          </div>
          <div>
            <Star className="w-5 h-5 text-gold mx-auto mb-4" />
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Rated</h4>
            <p className="text-sm text-muted-foreground">{restaurant.rating} out of 5</p>
            <p className="text-sm text-muted-foreground">{restaurant.reviewCount} reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}

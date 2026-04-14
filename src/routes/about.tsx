import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { heroImages, galleryImages, restaurant } from "@/lib/restaurant-data";
import { Utensils, TreePine, Wine, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — L'Épicurien" },
      { name: "description", content: "Discover the story of L'Épicurien — authentic French gastronomy, garden dining, and a passion for culinary excellence in Kigali." },
      { property: "og:title", content: "Our Story — L'Épicurien" },
      { property: "og:description", content: "A sanctuary of refined French gastronomy in the heart of Kigali." },
      { property: "og:image", content: heroImages.about },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } }),
};

function AboutPage() {
  return (
    <div>
      <HeroSection image={heroImages.about} title="Our Story" subtitle="Born from a love of French culinary tradition and Kigali's vibrant spirit" compact />

      {/* Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.4em] uppercase text-gold mb-6 text-center">The Philosophy</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">
              The Art of Living Well
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the lush greenery of Kigali's Kimihurura district, L'Épicurien is more than a restaurant — it is a philosophy. Founded on the belief that dining is an act of celebration, every detail is orchestrated to create moments of pure pleasure.
              </p>
              <p>
                Our kitchen marries the timeless techniques of French haute cuisine with the finest ingredients sourced both locally and from across the continent. From the delicate <em className="text-foreground">Escargots de Bourgogne</em> that open your evening to the indulgent <em className="text-foreground">Filet de Bœuf Rossini</em> — each plate tells a story of craftsmanship and care.
              </p>
              <p>
                The garden setting, with its intimate gazebos and candlelit tables beneath the stars, transforms every meal into an occasion. Whether it's a quiet dinner for two or a business lunch that demands discretion, L'Épicurien provides the perfect backdrop for life's meaningful moments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-y border-border px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Utensils, title: "Culinary Excellence", desc: "Classical French techniques, premium ingredients, meticulous presentation — every dish a masterwork." },
            { icon: TreePine, title: "Garden Oasis", desc: "Dine amidst verdant gardens and private gazebos, a tranquil escape in the heart of the city." },
            { icon: Wine, title: "Fine Wine Selection", desc: "A curated cellar of French and international wines, expertly paired by our sommelier." },
            { icon: Shield, title: "Impeccable Service", desc: "Discreet, attentive, and personalised — service that anticipates your every desire." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
              <item.icon className="w-6 h-6 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Amenities</p>
          <h2 className="font-display text-3xl text-foreground mb-10">Every Comfort Considered</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {restaurant.amenities.map((a) => (
              <span key={a} className="px-4 py-2 border border-border text-sm text-muted-foreground">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryImages.slice(0, 6).map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="overflow-hidden aspect-square">
                <img src={img} alt="L'Épicurien" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

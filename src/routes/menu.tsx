import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { heroImages, menuSections } from "@/lib/restaurant-data";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — L'Épicurien" },
      { name: "description", content: "Explore the L'Épicurien menu. Classic French starters, prime cuts, fresh seafood, and exquisite desserts." },
      { property: "og:title", content: "Menu — L'Épicurien" },
      { property: "og:description", content: "Classic French starters, prime cuts, fresh seafood, and exquisite desserts in Kigali." },
      { property: "og:image", content: heroImages.menu },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { addItem } = useCart();

  return (
    <div>
      <HeroSection image={heroImages.menu} title="Le Menu" subtitle="A carefully curated journey through the finest of French gastronomy" compact />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {menuSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1, duration: 0.6 }}
              className="mb-20 last:mb-0"
            >
              <div className="text-center mb-12">
                <div className="w-12 h-px bg-gold mx-auto mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground">{section.title}</h2>
                <div className="w-12 h-px bg-gold mx-auto mt-4" />
              </div>

              <div className="space-y-0 divide-y divide-border">
                {section.items.map((item) => (
                  <div key={item.name} className="group py-6 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">{item.name}</h3>
                        <span className="flex-1 border-b border-dotted border-border/50 mb-1 hidden sm:block" />
                        <span className="text-gold font-medium text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        addItem(item);
                        toast.success(`${item.name} added to order`);
                      }}
                      className="shrink-0 mt-1 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
                      aria-label={`Add ${item.name} to order`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-16">
            <Link to="/order" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
              Place an Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

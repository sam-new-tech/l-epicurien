import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuSections } from "@/lib/restaurant-data";
import { useCart } from "@/lib/cart-context";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Minus, Trash2, ShoppingBag, Check, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — L'Épicurien" },
      { name: "description", content: "Order L'Épicurien's French cuisine for dine-in or takeaway. Browse the full menu and checkout online." },
      { property: "og:title", content: "Order Online — L'Épicurien" },
      { property: "og:description", content: "Order authentic French cuisine for dine-in or takeaway." },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const { items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, orderType, setOrderType } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instructions, setInstructions] = useState("");
  const [activeSection, setActiveSection] = useState(0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setConfirmed(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (confirmed) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-display text-3xl text-foreground mb-4">Order Confirmed</h1>
          <p className="text-muted-foreground text-sm mb-2">Thank you, {name}!</p>
          <p className="text-muted-foreground text-sm">We'll contact you at {phone} shortly.</p>
          <button onClick={() => { setConfirmed(false); setShowCheckout(false); }} className="mt-8 text-sm text-gold hover:text-gold-light transition-colors tracking-wide uppercase">
            Place Another Order
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">À Votre Service</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground">Order Online</h1>
        <div className="w-16 h-px bg-gold mx-auto mt-6 mb-8" />
        {/* Order type toggle */}
        <div className="inline-flex border border-border overflow-hidden">
          {(["dine-in", "takeaway"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-6 py-3 text-sm tracking-widest uppercase transition-colors ${orderType === type ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {type === "dine-in" ? "Dine In" : "Takeaway"}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu */}
        <div className="lg:col-span-2">
          {/* Section tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {menuSections.map((section, i) => (
              <button
                key={section.title}
                onClick={() => setActiveSection(i)}
                className={`whitespace-nowrap text-sm tracking-wider uppercase transition-colors pb-2 border-b-2 ${activeSection === i ? "border-gold text-gold" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="space-y-4">
            {menuSections[activeSection].items.map((item) => {
              const inCart = items.find((i) => i.name === item.name);
              return (
                <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 p-4 border border-border hover:border-gold/30 transition-colors">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded shrink-0" loading="lazy" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base text-foreground truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.description}</p>
                    <p className="text-gold text-sm mt-1 font-medium">{item.price}</p>
                  </div>
                  {inCart ? (
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => updateQuantity(item.name, inCart.quantity - 1)} className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-gold transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{inCart.quantity}</span>
                      <button onClick={() => updateQuantity(item.name, inCart.quantity + 1)} className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-gold transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => { addItem(item); toast.success(`Added ${item.name}`); }}
                      className="shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cart sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 border border-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h3 className="font-display text-lg">Your Order</h3>
              <span className="text-xs text-muted-foreground ml-auto">{totalItems} items</span>
            </div>

            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">Your order is empty. Browse the menu and add items.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div key={item.name} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.price} × {item.quantity}</p>
                        </div>
                        <button onClick={() => removeItem(item.name)} className="text-muted-foreground hover:text-destructive transition-colors shrink-0">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-border pt-4 mb-6 flex justify-between text-sm">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-gold font-display text-lg">RWF {totalPrice.toLocaleString()}</span>
                </div>

                {!showCheckout ? (
                  <button onClick={() => setShowCheckout(true)} className="w-full bg-gold text-primary-foreground py-3 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
                    Checkout
                  </button>
                ) : (
                  <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleCheckout} className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs tracking-[0.2em] uppercase text-gold">Checkout</p>
                      <button type="button" onClick={() => setShowCheckout(false)} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
                    </div>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name *" className="bg-card border-border" required />
                    <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number *" className="bg-card border-border" required />
                    <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Special instructions" className="bg-card border-border min-h-[60px]" />
                    <button type="submit" className="w-full bg-gold text-primary-foreground py-3 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
                      Place Order
                    </button>
                  </motion.form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

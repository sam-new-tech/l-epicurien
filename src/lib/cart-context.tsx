import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem } from "./restaurant-data";

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  orderType: "dine-in" | "takeaway";
  setOrderType: (type: "dine-in" | "takeaway") => void;
}

const CartContext = createContext<CartContextType | null>(null);

function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<"dine-in" | "takeaway">("dine-in");

  const addItem = (item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  const updateQuantity = (name: string, qty: number) => {
    if (qty <= 0) {
      removeItem(name);
      return;
    }
    setItems((prev) => prev.map((i) => i.name === name ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, orderType, setOrderType }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

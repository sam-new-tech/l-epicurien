

# L'Épicurien — Luxury Restaurant Website

## Design Direction
Ultra-minimal, luxury aesthetic inspired by Michelin-starred restaurant websites. Dark theme with warm gold accents. Elegant serif typography (Playfair Display for headings, Inter for body). Generous whitespace, smooth animations, and full-bleed hero imagery using high-quality Unsplash food/restaurant photos.

**Color Palette:** Deep charcoal `#1A1A1A` background, warm gold `#C9A96E` accents, cream `#F5F0E8` text, soft white `#FAFAF8` for light sections.

## Pages & Structure

### 1. Homepage (`/`)
- Full-screen hero with parallax background image (French fine dining ambiance)
- Animated tagline: *"Where French tradition meets Kigali's soul"*
- Three elegant cards: Reserve a Table, View Menu, Order Takeaway
- Scrolling highlights section with atmospheric photos
- Testimonial/rating badge (4.3★ · 455 reviews)
- Hours & location preview with embedded map

### 2. Menu (`/menu`)
- Elegant sectioned menu: Starters, Main Courses, Desserts, Business Lunch
- All items with French names, descriptions, and prices from JSON data
- Subtle hover animations, gold dividers between sections
- "Order This" button on each item (links to order flow)

### 3. Reservations (`/reservations`)
- Beautiful booking UI: date picker, time slots, party size, special requests
- Contact info fields (name, email, phone)
- Confirmation screen with booking summary
- Operating hours displayed alongside the form

### 4. Order (`/order`)
- Full menu with add-to-cart functionality
- Cart sidebar/drawer with item count, subtotals
- Order type toggle: Dine-in / Takeaway
- Checkout form: name, phone, special instructions
- Order confirmation page

### 5. About (`/about`)
- Restaurant story with professional copywriting
- Atmosphere & amenities showcase
- Photo gallery grid (Unsplash French cuisine/garden dining images)
- Chef's philosophy section

### 6. Contact (`/contact`)
- Address, phone, map embed
- Contact form
- Hours of operation (full weekly schedule)
- Accessibility info & payment methods

### 7. Auth System (`/login`, `/register`)
- Elegant login/register UI forms (email + password)
- UI-only for now (no backend wired) — ready for Supabase integration
- "Remember me", forgot password link
- Styled consistently with luxury theme

## Key Features
- **Responsive** — fl
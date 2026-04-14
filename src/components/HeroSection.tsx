import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export function HeroSection({ image, title, subtitle, compact }: HeroSectionProps) {
  return (
    <section className={`relative ${compact ? "h-[50vh]" : "h-screen"} flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}

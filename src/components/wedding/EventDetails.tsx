import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloralSVG from "./FloralSVG";

const getMapUrl = () => {
  const address = "Sub Registrar Office, Sembiam, 340, Paper Mills Road, Jagannathan Colony, Perambur, Chennai, Tamil Nadu 600011";
  const encoded = encodeURIComponent(address);
  const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  return isApple
    ? `https://maps.apple.com/?q=${encoded}`
    : `https://www.google.com/maps/search/?api=1&query=${encoded}`;
};

const EventDetails = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="relative py-16 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(39 40% 96%), hsl(160 20% 92%), hsl(39 40% 96%))" }}>
      {/* Floral accents behind card */}
      <div className="absolute top-4 right-0 md:top-8 md:right-8 pointer-events-none opacity-60">
        <FloralSVG variant="jasmine" className="w-24 h-32 md:w-36 md:h-44" />
      </div>
      <div className="absolute bottom-4 left-0 md:bottom-8 md:left-8 pointer-events-none opacity-60">
        <FloralSVG variant="mughal" className="w-24 h-32 md:w-36 md:h-44" />
      </div>

      <motion.div
        className="relative z-10 max-w-lg mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outer kolam-style border */}
        <div className="relative p-1">
          {/* Kolam corner SVG border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" stroke="hsl(42 55% 55%)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="8 4" />
          </svg>

          {/* Inner card */}
          <div className="bg-background/80 backdrop-blur-sm border border-gold/20 rounded-sm p-8 md:p-12 text-center" style={{ boxShadow: "0 8px 40px hsl(42 55% 55% / 0.08)" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-6">Ceremony Details</p>

              <div className="space-y-6">
                <div>
                  <p className="font-serif-display text-lg md:text-xl text-muted-foreground font-light">Date</p>
                  <p className="font-serif-display text-2xl md:text-3xl text-charcoal font-medium">Friday, 13 February 2026</p>
                </div>

                <div className="w-8 h-px bg-gold/30 mx-auto" />

                <div>
                  <p className="font-serif-display text-lg md:text-xl text-muted-foreground font-light">Time</p>
                  <p className="font-serif-display text-xl md:text-2xl text-charcoal font-medium">11:30 AM – 1:30 PM</p>
                </div>

                <div className="w-8 h-px bg-gold/30 mx-auto" />

                <div>
                  <p className="font-serif-display text-lg md:text-xl text-muted-foreground font-light">Venue</p>
                  <p className="font-serif-display text-xl md:text-2xl text-charcoal font-medium">Sub Registrar Office, Sembiam</p>
                </div>

                <div className="text-sm md:text-base text-muted-foreground font-sans font-light leading-relaxed">
                  <p>340, Paper Mills Road</p>
                  <p>Jagannathan Colony, Perambur</p>
                  <p>Chennai, Tamil Nadu – 600011</p>
                </div>

                <motion.a
                  href={getMapUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-emerald-light transition-colors font-sans text-sm tracking-wide group mt-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-base">📍</span>
                  <span className="border-b border-primary/30 group-hover:border-primary/60 transition-colors">View Location</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-ivory-warm overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto text-center px-8">
        <motion.p
          className="font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We would be honored by your presence
        </motion.p>
        <motion.p
          className="font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          and blessings on this special day.
        </motion.p>

        {/* Ornamental motif */}
        <motion.div
          className="my-8 md:my-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M10,20 Q30,5 60,20 Q90,5 110,20" stroke="hsl(42 55% 55%)" strokeWidth="0.8" fill="none" />
            <path d="M10,20 Q30,35 60,20 Q90,35 110,20" stroke="hsl(42 55% 55%)" strokeWidth="0.8" fill="none" />
            <circle cx="60" cy="20" r="3" fill="hsl(42 55% 55%)" opacity="0.5" />
            <circle cx="35" cy="20" r="1.5" fill="hsl(42 55% 55%)" opacity="0.3" />
            <circle cx="85" cy="20" r="1.5" fill="hsl(42 55% 55%)" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Signature */}
        <motion.p
          className="font-serif-display text-3xl md:text-4xl text-charcoal font-light tracking-wide"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Vahidha & Lokesh
        </motion.p>

        {/* Final gold divider */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="w-20 h-px bg-gold/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;

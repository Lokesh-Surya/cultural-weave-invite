import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MidPanel = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-background overflow-hidden">
      {/* Gold geometric frame */}
      <div className="max-w-md mx-auto relative px-8">
        <motion.div
          className="absolute inset-0 border border-gold/20 rounded-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          style={{ boxShadow: "0 0 40px hsl(42 55% 55% / 0.06)" }}
        />

        {/* Floral watermark */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
          <circle cx="150" cy="100" r="60" stroke="hsl(42 55% 55%)" strokeWidth="0.5" fill="none" />
          <path d="M150,40 Q180,70 150,100 Q120,70 150,40Z" fill="hsl(350 20% 75%)" />
          <path d="M210,100 Q180,130 150,100 Q180,70 210,100Z" fill="hsl(350 20% 75%)" />
          <path d="M150,160 Q120,130 150,100 Q180,130 150,160Z" fill="hsl(350 20% 75%)" />
          <path d="M90,100 Q120,70 150,100 Q120,130 90,100Z" fill="hsl(350 20% 75%)" />
        </svg>

        <div className="relative py-10 md:py-14 text-center">
          <motion.p
            className="font-serif-display text-xl md:text-2xl text-charcoal font-light italic leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Two traditions.
          </motion.p>
          <motion.p
            className="font-serif-display text-xl md:text-2xl text-charcoal font-light italic leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            One shared beginning.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MidPanel;

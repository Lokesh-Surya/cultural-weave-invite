import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UnityStatement = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Gentle floral overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <path d="M200,50 Q230,100 200,150 Q170,100 200,50Z" fill="hsl(350 20% 75%)" />
        <path d="M150,100 Q200,80 250,100 Q200,120 150,100Z" fill="hsl(140 15% 60%)" />
        <path d="M200,200 Q220,250 200,280 Q180,250 200,200Z" fill="hsl(350 20% 75%)" />
        <circle cx="200" cy="150" r="40" stroke="hsl(42 55% 55%)" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 100px 40px hsl(39 40% 96%)" }} />

      <div className="relative z-10 max-w-lg mx-auto text-center px-8">
        <motion.p
          className="font-serif-display text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          A promise beyond language.
        </motion.p>
        <motion.p
          className="font-serif-display text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A future beyond boundaries.
        </motion.p>
      </div>
    </section>
  );
};

export default UnityStatement;

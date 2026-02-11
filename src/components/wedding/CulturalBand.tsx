import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const CulturalBand = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div ref={ref} className="relative py-8 md:py-12 overflow-hidden bg-ivory-warm">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        {/* Kolam + calligraphic pattern band */}
        <svg className="w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
          {/* Repeating kolam diamonds */}
          {Array.from({ length: 15 }).map((_, i) => (
            <g key={i} opacity="0.08">
              <polygon
                points={`${80 * i + 40},10 ${80 * i + 55},40 ${80 * i + 40},70 ${80 * i + 25},40`}
                stroke="hsl(42 55% 55%)"
                strokeWidth="0.6"
                fill="none"
              />
              <circle cx={80 * i + 40} cy={40} r="3" fill="hsl(42 55% 55%)" opacity="0.3" />
            </g>
          ))}
          {/* Flowing calligraphic curves */}
          <path
            d="M0,40 Q100,15 200,40 T400,40 T600,40 T800,40 T1000,40 T1200,40"
            stroke="hsl(42 35% 68%)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M0,45 Q100,65 200,45 T400,45 T600,45 T800,45 T1000,45 T1200,45"
            stroke="hsl(42 35% 68%)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.08"
          />
        </svg>
      </motion.div>

      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(42 55% 55% / 0.03) 50%, transparent 100%)" }} />
    </div>
  );
};

export default CulturalBand;

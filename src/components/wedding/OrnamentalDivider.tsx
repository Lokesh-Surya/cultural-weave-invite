import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OrnamentalDivider = () => {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <div ref={ref} className="py-6 md:py-10 flex items-center justify-center bg-background overflow-hidden">
      <motion.svg
        width="100%"
        height="40"
        viewBox="0 0 800 40"
        preserveAspectRatio="xMidYMid meet"
        className="max-w-2xl px-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Left flourish */}
        <motion.path
          d="M50,20 Q120,5 180,20 Q120,35 50,20"
          stroke="hsl(42 55% 55%)"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.line
          x1="180" y1="20" x2="350" y2="20"
          stroke="hsl(42 55% 55%)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Center kolam emblem */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: "400px 20px" }}
        >
          <polygon points="400,6 414,20 400,34 386,20" stroke="hsl(42 55% 55%)" strokeWidth="0.8" fill="none" />
          <polygon points="400,10 410,20 400,30 390,20" stroke="hsl(42 55% 55%)" strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="20" r="3" fill="hsl(42 55% 55%)" opacity="0.5" />
        </motion.g>

        {/* Right flourish */}
        <motion.line
          x1="450" y1="20" x2="620" y2="20"
          stroke="hsl(42 55% 55%)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d="M620,20 Q680,5 750,20 Q680,35 620,20"
          stroke="hsl(42 55% 55%)"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </motion.svg>
    </div>
  );
};

export default OrnamentalDivider;

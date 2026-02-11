import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InvitationSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const lines = [
    "With the blessings of our families,",
    "we invite you to grace the occasion of our",
    "Marriage Registration",
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-ivory-warm overflow-hidden">
      {/* Faint script textures */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tamil-inspired decorative texture - left */}
        <svg className="absolute left-0 top-0 h-full w-1/3 opacity-[0.04]" viewBox="0 0 200 400" preserveAspectRatio="none">
          <text x="20" y="50" fontSize="28" fill="hsl(220 10% 20%)" fontFamily="serif" transform="rotate(-5)">
            <tspan x="10" dy="40">வாழ்த்துக்கள்</tspan>
            <tspan x="30" dy="45">மங்கலம்</tspan>
            <tspan x="15" dy="40">திருமணம்</tspan>
            <tspan x="25" dy="45">அழைப்பு</tspan>
            <tspan x="10" dy="40">வாழ்த்துக்கள்</tspan>
            <tspan x="30" dy="45">மங்கலம்</tspan>
          </text>
        </svg>
        {/* Urdu-inspired decorative texture - right */}
        <svg className="absolute right-0 top-0 h-full w-1/3 opacity-[0.04]" viewBox="0 0 200 400" preserveAspectRatio="none">
          <text x="20" y="50" fontSize="28" fill="hsl(220 10% 20%)" fontFamily="serif" direction="rtl" transform="rotate(3)">
            <tspan x="180" dy="40">دعوت</tspan>
            <tspan x="170" dy="45">مبارک</tspan>
            <tspan x="175" dy="40">نکاح</tspan>
            <tspan x="165" dy="45">برکت</tspan>
            <tspan x="180" dy="40">دعوت</tspan>
            <tspan x="170" dy="45">مبارک</tspan>
          </text>
        </svg>
      </div>

      {/* Floral side accents */}
      <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-40 md:w-16 md:h-60 opacity-[0.08]" viewBox="0 0 60 200" fill="none">
        <path d="M30,10 Q45,50 30,90 Q15,50 30,10Z" fill="hsl(140 15% 60%)" />
        <path d="M30,70 Q45,110 30,150 Q15,110 30,70Z" fill="hsl(140 15% 60%)" />
        <line x1="30" y1="10" x2="30" y2="190" stroke="hsl(140 15% 60%)" strokeWidth="0.5" />
      </svg>
      <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-40 md:w-16 md:h-60 opacity-[0.08] scale-x-[-1]" viewBox="0 0 60 200" fill="none">
        <path d="M30,10 Q45,50 30,90 Q15,50 30,10Z" fill="hsl(140 15% 60%)" />
        <path d="M30,70 Q45,110 30,150 Q15,110 30,70Z" fill="hsl(140 15% 60%)" />
        <line x1="30" y1="10" x2="30" y2="190" stroke="hsl(140 15% 60%)" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-xl mx-auto text-center px-8">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`${
              i === 2
                ? "font-serif-display text-2xl md:text-3xl text-primary font-medium mt-2"
                : "font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed"
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default InvitationSection;

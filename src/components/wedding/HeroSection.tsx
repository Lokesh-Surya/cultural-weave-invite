import { motion } from "framer-motion";
import KolamSVG from "./KolamSVG";
import FloralSVG from "./FloralSVG";
import CalligraphicStroke from "./CalligraphicStroke";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-ivory-warm to-background">
      {/* Kolam pattern center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <KolamSVG size={600} opacity={0.06} className="hidden md:block" />
        <KolamSVG size={350} opacity={0.06} className="block md:hidden" />
      </motion.div>

      {/* Calligraphic background strokes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CalligraphicStroke variant={1} className="absolute top-[15%] left-[-5%] w-[60%] h-20 opacity-60" />
        <CalligraphicStroke variant={2} className="absolute top-[65%] right-[-5%] w-[55%] h-20 opacity-50" />
        <CalligraphicStroke variant={3} className="absolute bottom-[20%] left-[10%] w-[40%] h-16 opacity-40" />
      </div>

      {/* Floral corners */}
      <motion.div
        className="absolute top-4 right-0 md:top-8 md:right-4 pointer-events-none"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.8 }}
      >
        <FloralSVG variant="jasmine" className="w-28 h-36 md:w-44 md:h-52 animate-float" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 md:bottom-12 md:left-4 pointer-events-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 1.0 }}
      >
        <FloralSVG variant="mughal" className="w-28 h-36 md:w-44 md:h-52 animate-float [animation-delay:3s]" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="text-gold-muted text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-sans font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          request the pleasure of your presence
        </motion.p>

        <motion.h1
          className="font-serif-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-charcoal tracking-wide leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          Vahidha
          <span className="block text-3xl sm:text-4xl md:text-5xl text-gold my-2 md:my-4 font-serif-display italic font-light">&amp;</span>
          Lokesh
        </motion.h1>

        <motion.div
          className="mt-8 md:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="w-16 h-px bg-gold opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

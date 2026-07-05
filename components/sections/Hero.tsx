"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
      {/* Background Image with Fade-in */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/Hero.png"
          alt="DevDash Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Bottom Vignette Overlay to Blend Background */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-linear-to-t from-[#0A0A0A] to-transparent z-10" />
      </motion.div>

      {/* Bottom overlay graphic (Hero-2.png) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full h-[100dvh] z-20 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/Hero-2.png"
          alt="DevDash Hero Bottom Graphic"
          fill
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Hero Content Overlay (Bottom Left Corner, Smaller) */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 z-30 max-w-sm md:max-w-md text-left flex flex-col items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-xs md:text-sm font-semibold font-mono tracking-[0.25em] text-signal-green-glow uppercase mb-2"
          variants={itemVariants}
        >
          // MISSION: INITIALIZE
        </motion.span>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-modern-warfare text-white tracking-wider leading-[1.1]"
          variants={itemVariants}
        >
          BUILD YOUR
          <br />
          <span className="text-signal-green-glow">SOLUTION</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-signal-green-glow text-[0.85em]">
            DEFEND THE
            <br />
            FUTURE
          </span>
        </motion.h1>

        <motion.p
          className="text-xs md:text-sm font-mono tracking-wider text-gray-400 uppercase mt-4 leading-relaxed max-w-sm"
          variants={itemVariants}
        >
          A 8 hour hackathon to
          <span className="block mt-1 font-bold text-signal-green-glow tracking-[0.1em] font-sans text-sm md:text-base">
            BUILD. BATTLE. CONQUER.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
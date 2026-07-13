"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";
import { LimeButton } from "@/components/ui/Button";
import PixelBlast from "@/components/PixelBlast";
import ScrollFloat from "@/components/ScrollFloat";

export default function Registration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  } as const;

  return (
    <section id="register" className="relative w-full py-24 md:py-32 bg-[#0A0A0A] overflow-hidden flex flex-col items-center px-6 border-t border-white/5">
      {/* Background PixelBlast for premium feel */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#00ef4f"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              variants={itemVariants}
              className="text-[var(--color-accent-green)] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block uppercase"
            >
              // REGISTER
            </motion.span>

            <div className="w-full relative z-10 flex justify-center">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase text-center"
              >
                READY TO BUILD <br /><span className="text-[var(--color-accent-green)]">THE FUTURE?</span>
                <span className="text-[var(--color-accent-green)] animate-cursor-blink font-mono">|</span>
              </ScrollFloat>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mt-2 text-center"
            >
              Join hundreds of developers, designers and innovators for 24 hours of
              collaboration, learning and creation.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <LimeButton
                onClick={() => window.open(REGISTER_URL, "_blank", "noopener,noreferrer")}
                className="flex items-center gap-2"
                size="lg"
              >
                REGISTER NOW <ArrowUpRight className="w-5 h-5" />
              </LimeButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

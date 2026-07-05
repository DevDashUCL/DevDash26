"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function MissionBrief() {
  // Staggered fade-up variant configuration for clean animations
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] as const, // Smooth cubic-bezier easeOut
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black flex items-center justify-end px-6 md:px-16 lg:px-32 overflow-hidden border-t border-[#2A2A2A]/60"
    >
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/About-1.png"
          alt="Mission Brief Background"
          fill
          priority
          className="object-cover object-left md:object-center"
        />
      </div>

      {/* 2. Cyberpunk Vignette & Linear Fade Overlay (Black on right, blends to transparent on left) */}
      <div className="absolute inset-0 z-0 bg-black/60 md:bg-black/0 md:bg-linear-to-l md:from-[#0A0A0A] md:via-[#0A0A0A]/90 md:to-transparent" />

      {/* 3. Tactical Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-60 bg-[linear-gradient(rgba(31,122,61,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,122,61,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* 4. Right-Aligned Content Container */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-start text-left gap-6 md:gap-8">
        {/* Mock Tag/Label */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
          className="flex items-center gap-2"
        >
          <span className="text-xs font-mono text-signal-green-glow/40">[</span>
          <span className="text-xs font-mono tracking-[0.2em] text-signal-green-glow uppercase text-right">
            MISSION BRIEF
          </span>
          <span className="text-xs font-mono text-signal-green-glow/40">]</span>
        </motion.div>

        {/* Mock Header */}
        <motion.h2
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-modern-warfare text-white tracking-wider leading-tight"
        >
          THE MISSION <br />
          <span className="text-signal-green-glow">NEEDS BUILDERS.</span>
        </motion.h2>

        {/* Mock Body Paragraphs */}
        <div className="flex flex-col gap-6 text-[#A0A0A0] font-sans text-base md:text-lg leading-relaxed font-light">
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUpVariant}
          >
            DevDash &apos;26 is UCL&apos;s first-ever university-wide hackathon created to bring
            together passionate students ready to innovate, collaborate, and push the boundaries
            of technology. It&apos;s where creativity meets problem-solving, where ideas become
            working systems, and where teams engineer real solutions in a single, high-stakes day.
          </motion.p>

          <motion.p
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUpVariant}
          >
            Open to builders of every experience level, DevDash &apos;26 turns curiosity into
            capability in a competitive yet supportive environment. Whether you&apos;re compiling
            your first lines of code or already leading ambitious projects, this is your mission
            briefing: challenge yourself, connect with like-minded operatives, and stand alongside
            a growing community of future tech leaders.
          </motion.p>

          <motion.p
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUpVariant}
          >
            This isn&apos;t just a competition — it&apos;s the beginning of a culture. One built on
            creativity, continuous learning, and technological excellence at UCL.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
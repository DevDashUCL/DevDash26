"use client";

import React from "react";
import Image from "next/image";
import { Rocket, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutDevDash() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
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
        duration: 0.5
      }
    }
  } as const;

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#0A0A0A] flex items-center justify-center px-6 overflow-hidden min-h-[600px]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about-us.png"
          alt="About Us Background"
          fill
          priority
          className="object-cover object-center md:object-right opacity-100"
        />
        {/* Left side gradient overlay to ensure text readability */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[80%] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent"></div>

        {/* Vignette on the right edge */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent"></div>

        {/* Vignettes on top and bottom edges */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Text Elements Container - bound width for left alignment and readability */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl flex flex-col gap-6 text-left"
        >
          {/* Label */}
          <motion.span
            variants={itemVariants}
            className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block"
          >
            // ABOUT DEVDASH
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase"
          >
            DON&apos;T <br />
            JUST CODE. <br />
            <span className="text-[#00ef4f] text-1xl sm:text-4xl md:text-5xl lg:text-6xl">CREATE</span> <br />
            <span className="text-[#00ef4f] text-2xl sm:text-4xl md:text-5xl lg:text-6xl">WHAT&apos;S NEXT.</span>
          </motion.h2>

          {/* Divider Line: Horizontal Two Green Structure */}
          <motion.div variants={itemVariants} className="flex items-center w-full gap-3 my-2">
            <div className="h-[2px] bg-[#00ef4f] w-[65%]"></div>
            <div className="h-[2px] bg-[#00ef4f] w-[30%]"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl"
          >
            DevDash is UCL's inaugural hackathon where innovation meets collaboration. Designed for students of all skill levels, the event empowers participants to think creatively, solve real-world challenges, and showcase their potencial trough technology.
          </motion.p>

          {/* Features Inline Box */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 p-5 rounded-xl border border-white/10 bg-[#111111]/30 backdrop-blur-sm mt-4 w-full"
          >
            {/* Innovate */}
            <div className="flex items-center gap-3 pr-2">
              <Rocket className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div>
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-white">INNOVATE</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-tight">Build bold ideas</p>
              </div>
            </div>

            {/* Collaborate */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-4 pr-2">
              <Users className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div>
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-white">COLLABORATE</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-tight">Work as a team</p>
              </div>
            </div>

            {/* Impact */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-4">
              <Zap className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div>
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-white">IMPACT</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-tight">Create real change</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

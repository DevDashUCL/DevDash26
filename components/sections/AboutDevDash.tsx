"use client";

import React from "react";
import Image from "next/image";
import { Rocket, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollFloat from "@/components/ScrollFloat";

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
          className="object-cover object-right opacity-10 md:opacity-100"
        />
        {/* Mobile Base Overlay - Semi-transparent so image is visible behind text */}
        <div className="absolute inset-0 bg-[#0A0A0A]/20 md:hidden pointer-events-none"></div>

        {/* Desktop Gradients */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-[80%] bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent"></div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#0A0A0A] to-transparent"></div>

        {/* Universal Top/Bottom Vignettes */}
        <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-linear-to-b from-[#0A0A0A] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Text Elements Container - bound width for left alignment and readability */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl flex flex-col gap-6 items-start text-left mx-auto md:mx-0"
        >
          {/* Label */}
          <motion.span
            variants={itemVariants}
            className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block"
          >
            {"// ABOUT DEVDASH"}
          </motion.span>

          {/* Heading */}

          <div className="w-full relative z-10 flex justify-start text-left">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase"
            >
              DON<span className="font-sans">&apos;</span>T <br />
              JUST CODE <br />
              <span className="text-[#00ef4f] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">CREATE</span> <br />
              <span className="text-[#00ef4f] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">WHAT<span className="font-sans">&apos;</span>S NEXT.</span>
            </ScrollFloat>
          </div>


          {/* Divider Line: Horizontal Two Green Structure */}
          <motion.div variants={itemVariants} className="flex items-center justify-start w-full gap-3 my-2">
            <div className="h-[2px] bg-[#00ef4f] w-[65%]"></div>
            <div className="h-[2px] bg-[#00ef4f] w-[30%]"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl space-y-4 text-left"
          >
            <p>
              <span className="text-[#00ef4f] font-medium">DevDash is UCL&apos;s inaugural 24-hour hackathon where innovation meets collaboration</span>, bringing together the next generation of developers, designers, entrepreneurs, and problem solvers. Designed for students of all skill levels, the event provides an opportunity to transform bold ideas into impactful solutions while working alongside talented peers in a fast-paced, collaborative environment.
            </p>
            <p>
              Throughout the hackathon event, participants will tackle real-world challenges, receive guidance from industry mentors, expand their technical and creative skills, and compete for exciting prizes. Whether you&apos;re building your very first project or pushing the limits of your expertise, DevDash is your chance to learn, network, innovate, and showcase what you can create.
            </p>
          </motion.div>

          {/* Features Inline Box */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 p-5 rounded-xl border border-white/10 bg-[#111111]/30 backdrop-blur-sm mt-4 w-full"
          >
            {/* Innovate */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pr-2">
              <Rocket className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div className="text-left">
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-white">INNOVATE</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-tight">Build bold ideas</p>
              </div>
            </div>

            {/* Collaborate */}
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:border-l sm:border-white/10 sm:pl-4 pr-2">
              <Users className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div className="text-left">
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-white">COLLABORATE</h4>
                <p className="text-[10px] text-gray-400 font-sans leading-tight">Work as a team</p>
              </div>
            </div>

            {/* Impact */}
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:border-l sm:border-white/10 sm:pl-4">
              <Zap className="w-5 h-5 text-[#00ef4f] shrink-0" />
              <div className="text-left">
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

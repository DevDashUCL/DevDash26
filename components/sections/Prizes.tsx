"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Lock, Unlock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ElectricBorder from "@/components/ElectricBorder";
import ScrollFloat from "@/components/ScrollFloat";

export default function Prizes() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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
    <section id="prizes" className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden flex flex-col items-center px-6 border-t border-white/5">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        @keyframes ripple {
          0%, 100% {
            transform: scaleY(0.4);
            opacity: 0.3;
          }
          50% {
            transform: scaleY(1.2);
            opacity: 0.9;
          }
        }
        @keyframes slide-stripes {
          from { background-position: 0 0; }
          to { background-position: 34px 0; }
        }
        .animate-stripes {
          animation: slide-stripes 1.5s linear infinite;
        }
        @keyframes lightning-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(0, 239, 79, 0.55)) drop-shadow(0 0 25px rgba(0, 239, 79, 0.3));
            opacity: 0.85;
          }
          50% {
            filter: drop-shadow(0 0 28px rgba(0, 239, 79, 0.85)) drop-shadow(0 0 50px rgba(0, 239, 79, 0.5));
            opacity: 1.0;
          }
        }
        @keyframes card-glow-pulse {
          0%, 100% {
            box-shadow: 0 0 25px rgba(0, 239, 79, 0.1), inset 0 0 10px rgba(0, 239, 79, 0.05);
            border-color: rgba(0, 239, 79, 0.55);
          }
          50% {
            box-shadow: 0 0 45px rgba(0, 239, 79, 0.28), inset 0 0 20px rgba(0, 239, 79, 0.15);
            border-color: rgba(0, 239, 79, 1.0);
          }
        }
        @keyframes pool-glow-pulse {
          0%, 100% {
            box-shadow: 0 0 25px rgba(0, 239, 79, 0.03);
            border-color: rgba(0, 239, 79, 0.25);
          }
          50% {
            box-shadow: 0 0 45px rgba(0, 239, 79, 0.12);
            border-color: rgba(0, 239, 79, 0.55);
          }
        }
        @keyframes text-glow-pulse {
          0%, 100% {
            text-shadow: 0 0 15px rgba(0, 239, 79, 0.4);
          }
          50% {
            text-shadow: 0 0 30px rgba(0, 239, 79, 0.85), 0 0 10px rgba(0, 239, 79, 0.4);
          }
        }
        @keyframes line-glow-pulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 2px rgba(0, 239, 79, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(0, 239, 79, 0.85));
          }
        }
      `}} />

      <div className="max-w-6xl w-full relative z-10">

        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4 text-left"
          >
            <motion.span
              variants={itemVariants}
              className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block"
            >
              {"// REWARDS"}
            </motion.span>

            <div className="w-full relative z-10 flex justify-start lg:justify-start md:justify-start">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase text-left"
              >
                BUILD. <br />
                COMPETE. <br />
                <span className="text-[#00ef4f] animate-[text-glow-pulse_3.5s_ease-in-out_infinite] inline-block">WIN.</span>
              </ScrollFloat>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-lg mt-2"
            >
              The brightest minds don&apos;t just build products. They build the future—and earn recognition.
            </motion.p>

            {/* Custom line indicator */}
            <motion.div variants={itemVariants} className="flex items-center w-full max-w-[200px] gap-2 mt-2">
              <div className="h-[2px] bg-[#00ef4f] w-[70%] animate-[line-glow-pulse_3s_ease-in-out_infinite]" />
              <div className="h-[2px] bg-[#00ef4f]/40 w-[20%] animate-[line-glow-pulse_3s_ease-in-out_infinite] [animation-delay:0.3s]" />
              <div className="h-[2px] bg-[#00ef4f]/10 w-[10%] animate-[line-glow-pulse_3s_ease-in-out_infinite] [animation-delay:0.6s]" />
            </motion.div>
          </motion.div>

          {/* Right side energy bolt graphic */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden border border-white/5 bg-[#111111]/10 rounded-2xl">
            {/* Audio equalizer wave lines */}
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-20 px-8">
              {Array.from({ length: 45 }).map((_, i) => {
                const height = 40 + Math.sin(i * 0.25) * 35 + Math.cos(i * 0.35) * 15;
                return (
                  <div
                    key={i}
                    className="w-[3px] bg-[#00ef4f] rounded-full"
                    style={{
                      height: `${Math.max(8, height)}px`,
                      animation: `ripple 2.5s ease-in-out infinite`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                );
              })}
            </div>

            {/* Lightning bolt vector overlay */}
            <div className="relative z-10 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 animate-[lightning-pulse_3s_ease-in-out_infinite]"
              >
                <path
                  d="M58 5 L22 52 H44 L32 95 L78 40 H52 L68 5 Z"
                  fill="#00ef4f"
                  className="opacity-90"
                />
              </svg>
            </div>

            {/* Cyberpunk HUD overlays */}
            <div className="absolute top-3 right-4 text-[8px] sm:text-[9px] font-mono text-[#00ef4f]/60 uppercase tracking-widest flex items-center gap-1.5">
              DATA STREAM <span className="w-1.5 h-1.5 bg-[#00ef4f] rounded-full animate-ping" />
            </div>
            <div className="absolute bottom-3 left-4 text-[7px] sm:text-[8px] font-mono text-white/20 uppercase tracking-wider">
              REWARDS MATRIX V1.0.26
            </div>
          </div>
        </div>

        {/* Total Prize Pool Section */}
        <ElectricBorder
          color="#00ef4f"
          speed={0.8}
          chaos={0.11}
          thickness={2}
          borderRadius={16}
          className="w-full mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-[#00ef4f]/15 bg-[#00ef4f]/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm text-center overflow-hidden animate-[pool-glow-pulse_6s_ease-in-out_infinite] w-full h-full"
          >
            {/* Tech border brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00ef4f]" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00ef4f]" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00ef4f]" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00ef4f]" />

            {/*<span className="text-[#00ef4f] text-xs md:text-sm font-mono tracking-[0.2em] font-bold block uppercase mb-1">
              TOTAL PRIZE POOL
            </span>*/}

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide my-4 font-modern-warfare uppercase leading-relaxed">
              <span className="text-[#00ef4f] text-2xl sm:text-3xl md:text-4xl">CASH PRIZES AWAIT</span><br />
              <span className="text-lg sm:text-xl md:text-2xl normal-case font-sans">the 1st place winner!</span>
            </h3>

            <span className="text-white/40 text-[9px] md:text-[11px] font-mono tracking-[0.25em] font-medium block uppercase">
              2ND &amp; 3RD PLACE RECEIVE CERTIFICATES &bull; ALL PARTICIPANTS RECEIVE E-CERTIFICATES
            </span>

            {/* Glowing Animated Progress Bar */}
            {/*<div className="w-full max-w-xl mx-auto h-7 md:h-9 bg-black/50 border border-[#00ef4f]/30 rounded-full overflow-hidden p-1 my-6 relative shadow-[inner_0_2px_4px_rgba(0,0,0,0.5)]">
              <div
                style={{
                  width: "95%",
                  background: 'repeating-linear-gradient(-45deg, #00ef4f, #00ef4f 12px, #002c0f 12px, #002c0f 24px)',
                  backgroundSize: '34px 34px',
                }}
                className="h-full rounded-full animate-stripes shadow-[0_0_15px_rgba(0,239,79,0.7)]"
              />
            </div>*/}

            {/*<div className="flex items-center justify-center gap-2 text-[#00ef4f] text-xs font-mono tracking-wider uppercase">
              <Unlock className="w-4 h-4" />
              <span>PRIZE POOL UNLOCKED</span>
            </div>*/}
          </motion.div>
        </ElectricBorder>

        {/* Prize Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {/* Card 1: Champion */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center justify-between border border-[#00ef4f] bg-[#0A0A0A] rounded-2xl p-8 backdrop-blur-sm animate-[card-glow-pulse_4s_ease-in-out_infinite] text-center h-[340px] sm:h-[380px] md:h-[420px]"
          >
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#00ef4f]" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#00ef4f]" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#00ef4f]" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#00ef4f]" />

            <div className="flex flex-col items-center w-full">
              <div
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                className="w-16 h-18 sm:w-18 sm:h-20 md:w-20 md:h-22 bg-[#00ef4f]/10 border border-[#00ef4f]/30 flex items-center justify-center mb-5"
              >
                <Trophy className="text-[#facc15] w-10 h-10 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              </div>

              <h4 className="text-xl font-bold text-white tracking-wide uppercase font-modern-warfare mb-1">CHAMPION</h4>
              <span className="text-white/40 text-xs font-mono tracking-widest font-bold uppercase block mb-4">FIRST PLACE</span>

              <div className="flex items-center justify-center w-full gap-2 my-1 opacity-60">
                <div className="h-[1px] bg-[#00ef4f]/40 w-10" />
                <div className="w-2 h-2 rotate-45 border border-[#00ef4f] bg-black" />
                <div className="h-[1px] bg-[#00ef4f]/40 w-10" />
              </div>

              <ul className="mt-4 space-y-2 text-sm font-mono text-[#00ef4f]/80 tracking-wide">
                <li>Cash Prize</li>
                <li>Physical Certificate</li>
                <li>E-Certificate</li>
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-[220px] border border-[#00ef4f] text-[#00ef4f] bg-[#00ef4f]/10 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,239,79,0.1)]">
                <span>REWARD UNLOCKED</span>
                <Unlock className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Second Place */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center justify-between border border-white/20 bg-[#0A0A0A] rounded-2xl p-8 backdrop-blur-sm text-center h-[340px] sm:h-[380px] md:h-[420px] hover:border-[#00ef4f]/50 hover:shadow-[0_0_30px_rgba(0,239,79,0.1)] transition-all duration-300"
          >
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/40" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/40" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/40" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/40" />

            <div className="flex flex-col items-center w-full">
              <div
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                className="w-16 h-18 sm:w-18 sm:h-20 md:w-20 md:h-22 bg-[#00ef4f]/10 border border-[#00ef4f]/30 flex items-center justify-center mb-5"
              >
                <Trophy className="text-[#00ef4f] w-10 h-10 drop-shadow-[0_0_8px_rgba(0,239,79,0.6)]" />
              </div>

              <h4 className="text-xl font-bold text-white tracking-wide uppercase font-modern-warfare mb-1">RUNNER-UP</h4>
              <span className="text-white/40 text-xs font-mono tracking-widest font-bold uppercase block mb-4">SECOND PLACE</span>

              <div className="flex items-center justify-center w-full gap-2 my-1 opacity-50">
                <div className="h-[1px] bg-white/60 w-10" />
                <div className="w-2 h-2 rotate-45 border border-white bg-black" />
                <div className="h-[1px] bg-white/60 w-10" />
              </div>

              <ul className="mt-4 space-y-2 text-sm font-mono text-white/60 tracking-wide">
                <li>Physical Certificate</li>
                <li>E-Certificate</li>
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-[220px] border border-[#00ef4f]/50 text-[#00ef4f]/80 bg-[#00ef4f]/5 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,239,79,0.05)]">
                <span>REWARD UNLOCKED</span>
                <Unlock className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Third Place */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center justify-between border border-white/20 bg-[#0A0A0A] rounded-2xl p-8 backdrop-blur-sm text-center h-[340px] sm:h-[380px] md:h-[420px] hover:border-[#00ef4f]/50 hover:shadow-[0_0_30px_rgba(0,239,79,0.1)] transition-all duration-300"
          >
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/40" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/40" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/40" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/40" />

            <div className="flex flex-col items-center w-full">
              <div
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                className="w-16 h-18 sm:w-18 sm:h-20 md:w-20 md:h-22 bg-white/10 border border-white/30 flex items-center justify-center mb-5"
              >
                <Trophy className="text-[#cbd5e1] w-10 h-10 drop-shadow-[0_0_12px_rgba(203,213,225,0.6)]" />
              </div>

              <h4 className="text-xl font-bold text-white tracking-wide uppercase font-modern-warfare mb-1">THIRD PLACE</h4>
              <span className="text-white/40 text-xs font-mono tracking-widest font-bold uppercase block mb-4">THIRD PLACE</span>

              <div className="flex items-center justify-center w-full gap-2 my-1 opacity-50">
                <div className="h-[1px] bg-white/60 w-10" />
                <div className="w-2 h-2 rotate-45 border border-white bg-black" />
                <div className="h-[1px] bg-white/60 w-10" />
              </div>

              <ul className="mt-4 space-y-2 text-sm font-mono text-white/60 tracking-wide">
                <li>Physical Certificate</li>
                <li>E-Certificate</li>
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-[220px] border border-[#00ef4f]/50 text-[#00ef4f]/80 bg-[#00ef4f]/5 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,239,79,0.05)]">
                <span>REWARD UNLOCKED</span>
                <Unlock className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: All Other Participants */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center justify-between border border-white/10 bg-[#0A0A0A] rounded-2xl p-8 backdrop-blur-sm text-center h-[340px] sm:h-[380px] md:h-[420px] hover:border-[#00ef4f]/50 hover:shadow-[0_0_30px_rgba(0,239,79,0.1)] transition-all duration-300"
          >
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/20" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/20" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/20" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/20" />

            <div className="flex flex-col items-center w-full">
              <div
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                className="w-16 h-18 sm:w-18 sm:h-20 md:w-20 md:h-22 bg-white/5 border border-white/20 flex items-center justify-center mb-5"
              >
                <Trophy className="text-white/40 w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold text-white tracking-wide uppercase font-modern-warfare mb-1">ALL PARTICIPANTS</h4>
              <span className="text-white/40 text-xs font-mono tracking-widest font-bold uppercase block mb-4">EVERYONE ELSE</span>

              <div className="flex items-center justify-center w-full gap-2 my-1 opacity-40">
                <div className="h-[1px] bg-white/40 w-10" />
                <div className="w-2 h-2 rotate-45 border border-white/40 bg-black" />
                <div className="h-[1px] bg-white/40 w-10" />
              </div>

              <ul className="mt-4 space-y-2 text-sm font-mono text-white/40 tracking-wide">
                <li>E-Certificate</li>
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-[220px] border border-[#00ef4f]/30 text-[#00ef4f]/60 bg-[#00ef4f]/5 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,239,79,0.05)]">
                <span>REWARD UNLOCKED</span>
                <Unlock className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

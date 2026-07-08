"use client";

import React from "react";
import Image from "next/image";
import { GridScan } from "@/components/GridScan";
import { REGISTER_URL } from "@/lib/constants";
import { ArrowUpRight, ChevronDown, Calendar, Clock, MapPin } from "lucide-react";
import { LimeButton, OutlineButton } from "@/components/ui/Button";
import TextType from '@/components/TextType';
import Particles from '@/components/Particles';


export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col justify-center overflow-hidden">
      {/* Background grid scan */}
      <div className="absolute inset-0 w-full h-full z-0">
        <GridScan
          sensitivity={0.6}
          lineThickness={0.5}
          linesColor="#051e0d"
          scanColor="#84CC16"
          scanOpacity={0.5}
          gridScale={0.06}
          lineStyle="solid"
          lineJitter={0.1}
          scanDirection="pingpong"
          noiseIntensity={0}
          scanGlow={0.8}
          scanSoftness={1.7}
          scanDuration={3}
          scanDelay={2}
          scanOnClick
        />

        <div className="absolute inset-0 w-full h-full">
          <Particles
            particleColors={["#22D66B"]}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-4 max-w-full gap-10">
        <span className="text-[11px] md:text-[13px] font-mono font-bold text-white/50 tracking-[0.2em] uppercase mb-2 select-none pointer-events-none">
        Computer Science Community of UCL presents
        </span>

        {/* Tagline tag */}
        <div className="text-xs md:text-sm font-mono tracking-[0.25em] text-white/90 flex items-center justify-center gap-1 select-none pointer-events-none">
          <span className="text-[#84CC16] font-bold">[</span>
          <span className="text-[#84CC16]">CODE.</span>
          <span>COLLABORATE.</span>
          <span>CREATE IMPACT.</span>
          <span className="text-[#84CC16] font-bold">]</span>

        </div>

        <Image
          src="/devdash.png"
          alt="DevDash Logo"
          width={800}
          height={400}
          priority
          className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[800px] h-auto object-contain drop-shadow-[0_0_60px_rgba(132,204,22,0.35)] relative z-10"
        />
        <div className="text-center flex flex-col items-center mt-2 md:mt-4 select-none pointer-events-none gap-4">
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-gray-400 uppercase mb-2">
            A 8-Hour Hackathon To
          </span>


          <TextType
            text={["BUILD THE FUTURE"]}
            as="h2"
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-accent-green uppercase mt-5"
            typingSpeed={200}
            pauseDuration={1000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={100}
            cursorBlinkDuration={0.5}
          />


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 gap-4 mt-8 md:mt-5 w-full max-w-[500px] pointer-events-auto">
            <LimeButton
              onClick={() => window.open(REGISTER_URL, "_blank", "noopener,noreferrer")}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              REGISTER NOW <ArrowUpRight className="w-6 h-6" />
            </LimeButton>

            <OutlineButton
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              LEARN MORE <ChevronDown className="w-4 h-4" />
            </OutlineButton>
          </div>
        </div>


      </div>
    </section>
  );
}
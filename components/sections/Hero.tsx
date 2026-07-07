"use client";

import React from "react";
import Image from "next/image";
import { GridScan } from "@/components/GridScan";
import { REGISTER_URL } from "@/lib/constants";
import { ArrowUpRight, ChevronDown, Calendar, Clock, MapPin } from "lucide-react";
import { LimeButton, OutlineButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
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
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-4 max-w-full">
        <span className="text-[11px] md:text-[13px] font-mono font-bold text-white/50 tracking-[0.2em] uppercase mb-2 select-none pointer-events-none">
          UCL IT Club Presents
        </span>
        <div className="absolute top-20 md:top-50 z-20 text-xs md:text-sm font-mono tracking-[0.25em] text-white/90 flex items-center justify-center gap-1 select-none pointer-events-none">
          <span className="text-[#84CC16] font-bold">[</span>
          <span className="text-[#84CC16]">CODE.</span>
          <span>COLLABORATE.</span>
          <span>CREATE IMPACT.</span>
          <span className="text-[#84CC16] font-bold">]</span>
        </div>
        <Image
          src="/devdash.png"
          alt="DevDash Logo"
          width={900}
          height={500}
          priority
          className="w-full max-w-[500px] sm:max-w-[700px] md:max-w-[800px] h-auto object-contain drop-shadow-[0_0_60px_rgba(132,204,22,0.35)] relative z-10"
        />
      </div>
      <div className="absolute bottom-10 md:bottom-25 z-20 flex-col text-xs md:text-sm font-mono tracking-[0.25em] text-white/90 flex items-center justify-center gap-5 select-none pointer-events-none">
        <div className="text-center flex flex-col gap-3 md:gap-6 items-center mt-2 md:mt-4 select-none pointer-events-none">
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-gray-400 uppercase">
            A 8-Hour Hackathon To
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-extrabold tracking-widest text-[#84CC16] uppercase mt-2 flex items-center">
            BUILD THE FUTURE
            <span className="text-[#84CC16] ml-1 animate-[blink_1s_infinite]">|</span>
          </h2>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-4 gap-4 mt-8 md:mt-20 w-full max-w-[500px] pointer-events-auto">
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
    </section>
  );
}
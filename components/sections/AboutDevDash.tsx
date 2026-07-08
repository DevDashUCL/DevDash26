"use client";

import React from "react";
import Image from "next/image";
import { Rocket, Users, Zap } from "lucide-react";

export default function AboutDevDash() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#0A0A0A] flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Elements */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
          {/* Label */}
          <span className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold">
            // ABOUT DEVDASH
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase">
            WE DON&apos;T <br />
            JUST CODE. <br />
            <span className="text-[#00ef4f]">WE CREATE</span> <br />
            <span className="text-[#00ef4f]">WHAT&apos;S NEXT.</span>
          </h2>

          {/* Divider Line: Horizontal Two Green Structure */}
          <div className="flex items-center w-full gap-3 my-2">
            <div className="h-[2px] bg-[#00ef4f] w-[65%]"></div>
            <div className="h-[2px] bg-[#00ef4f] w-[30%]"></div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl">
            DevDash is a high-energy 24-hour hackathon bringing together developers, designers, innovators, and creators to solve real-world problems and build impactful solutions. Collaborate. Innovate. Bring your ideas to life.
          </p>

          {/* Features Inline Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 p-5 rounded-xl border border-white/10 bg-[#111111]/30 backdrop-blur-sm mt-4 w-full max-w-2xl">
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
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 w-full">
          <div className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden group">
            {/* Subtle glow behind the image */}
            <div className="absolute inset-0 bg-[#00ef4f]/10 filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
            
            <Image
              src="/thunder.jpeg"
              alt="DevDash Thunder"
              fill
              priority
              className="object-cover rounded-lg relative z-10 border border-white/5 shadow-[0_0_40px_rgba(0,239,79,0.15)]"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
import React from "react";
import { Timeline } from "@/components/Timeline";
import DotGrid from "@/components/DotGrid";

export function Schedule() {
  const data = [
    {
      title: "Sept 3, 2026",
      content: (
        <div className="max-w-xl bg-neutral-900/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm relative z-10">
          <div className="text-xs text-[#00ef4f] font-mono tracking-wider mb-2">10:00 AM – 12:00 PM (2h)</div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans tracking-wide">
            Introduction to Hackathon
          </h4>
          <div className="flex items-center gap-4 mt-4">
            <img src="/team/mr.rukshan.jpg" alt="Mr. Rukshan Senanayake" className="w-25 h-25 rounded-full object-cover border-2 border-[#00ef4f]/30 bg-neutral-800" />
            <div className="flex flex-col gap-1 text-sm text-neutral-400 font-sans">
              <span className="text-neutral-500 font-mono">Conducted by:</span>
              <a href="https://www.linkedin.com/in/rukshanjs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:text-[#00ef4f] transition-colors">
                <span>Mr. Rukshan Senanayake</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sept 7, 2026",
      content: (
        <div className="max-w-xl bg-neutral-900/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm relative z-10">
          <div className="text-xs text-[#00ef4f] font-mono tracking-wider mb-2">10:00 AM – 12:00 PM (2h)</div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans tracking-wide">
            GitHub & Version Control
          </h4>
          <div className="flex items-center gap-4 mt-4">
            <img src="/team/MircoFernando.jpeg" alt="Mirco Fernando" className="w-25 h-25 rounded-full object-cover border-2 border-[#00ef4f]/30 bg-neutral-800" />
            <div className="flex flex-col gap-1 text-sm text-neutral-400 font-sans">
              <span className="text-neutral-500 font-mono">Conducted by:</span>
              <a href="https://www.linkedin.com/in/mircofernando" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:text-[#00ef4f] transition-colors">
                <span>Mr. Mirco Fernando</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sept 9, 2026",
      content: (
        <div className="max-w-xl bg-neutral-900/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm relative z-10">
          <div className="text-xs text-[#00ef4f] font-mono tracking-wider mb-2">10:00 AM – 01:15 PM (3h)</div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans tracking-wide">
            AI-Powered Development: Modern AI Tools
          </h4>
          <div className="flex items-center gap-4 mt-4">
            <img src="/team/Mr.Dinod.jpeg" alt="Mr. Dinod Manjith" className="w-25 h-25 rounded-full object-cover border-2 border-[#00ef4f]/30 bg-neutral-800" />
            <div className="flex flex-col gap-1 text-sm text-neutral-400 font-sans">
              <span className="text-neutral-500 font-mono">Conducted by:</span>
              <a href="https://www.linkedin.com/in/dinod-imanjith-withanawasam-06014034a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:text-[#00ef4f] transition-colors">
                <span>Mr. Dinod Imanjith</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sept 19, 2026",
      content: (
        <div className="max-w-xl bg-[#00ef4f]/5 border border-[#00ef4f]/25 p-6 rounded-xl backdrop-blur-sm shadow-[0_0_30px_rgba(0,239,79,0.08)] relative z-10">
          <div className="text-xs text-[#00ef4f] font-mono tracking-wider mb-2">08:00 AM – 07:00 PM (Tentative)</div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans tracking-wide uppercase">
            DevDash &apos;26 Hackathon
          </h4>
          <div className="flex items-center gap-2 text-sm text-neutral-400 font-sans">
            <span className="text-neutral-500 font-mono">Main Event:</span>
            <span className="text-[#00ef4f] font-bold tracking-wider">Inaugural University Hackathon</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="schedule" className="relative w-full bg-[#0A0A0A] overflow-hidden">
      {/* Interactive Dot Grid Background covering the whole section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#00ef4f"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Timeline
          data={data}
          description="Prepare for DevDash with a series of interactive workshops designed to strengthen your technical skills, introduce emerging technologies, and provide practical guidance on building successful hackathon projects."
        />
      </div>
    </section>
  );
}

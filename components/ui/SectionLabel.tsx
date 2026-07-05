import React from "react";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-[10px] md:text-xs font-mono text-signal-green-glow/40">[</span>
      <span className="text-xs font-medium font-mono tracking-[0.2em] text-signal-green-glow uppercase">
        {text}
      </span>
      <span className="text-[10px] md:text-xs font-mono text-signal-green-glow/40">]</span>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
    onComplete: () => void;
}

interface BootLine {
    text: string;
    delay: number;
    type?: "system" | "input" | "success" | "warning" | "highlight";
}

const BOOT_LINES: BootLine[] = [
    { text: "[    0.000000] Linux version 6.12.0-ucl-devdash (gcc version 14.1.0)", delay: 60, type: "system" },
    { text: "[    0.012543] BIOS-provided physical RAM map:", delay: 50, type: "system" },
    { text: "[    0.012545] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable", delay: 30, type: "system" },
    { text: "[    0.012550] BIOS-e820: [mem 0x0000000000100000-0x000000007fffffff] usable", delay: 30, type: "system" },
    { text: "[    0.023910] ACPI: Core revision 20260705", delay: 50, type: "system" },
    { text: "[    0.158231] CPU0: Intel(R) Core(TM) i9-ucl-devdash (family: 0x6, model: 0x1f)", delay: 80, type: "system" },
    { text: "[    0.289123] usbcore: registered new interface driver usbfs", delay: 50, type: "system" },
    { text: "[    0.412495] EXT4-fs (sda1): mounted filesystem with ordered data mode.", delay: 80, type: "system" },
    { text: "[    0.589124] systemd[1]: Detected architecture x86_64.", delay: 60, type: "system" },
    { text: "[    0.712495] systemd[1]: Inserted module 'ucl_ict_club'", delay: 80, type: "system" },
    { text: "ucl@devdash:~$ ./initialize_hackathon.sh", delay: 500, type: "input" },
    { text: "[    1.129314] Loading DevDash '26 system resources... OK", delay: 180, type: "system" },
    { text: "[    1.482910] Configuring network parameters... OK", delay: 120, type: "system" },
    { text: "[    1.682912] Starting Reactor Core Power Loop...", delay: 200, type: "system" },
    { text: "  [PROGRESS] Reactor Core Power Level: 28%", delay: 120, type: "warning" },
    { text: "  [PROGRESS] Reactor Core Power Level: 57%", delay: 120, type: "warning" },
    { text: "  [PROGRESS] Reactor Core Power Level: 84%", delay: 120, type: "warning" },
    { text: "  [PROGRESS] Reactor Core Power Level: 100% [READY]", delay: 180, type: "success" },
    { text: "[    2.582912] Bootstrapping battle protocols... OK", delay: 200, type: "system" },
    { text: "[    2.891234] Initialization complete. Status: ACTIVE.", delay: 150, type: "success" },
    { text: "ucl@devdash:~$ echo \"BUILD YOUR TECH!\"", delay: 400, type: "input" },
    { text: "BUILD YOUR TECH!", delay: 400, type: "highlight" },
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [visibleLines, setVisibleLines] = useState<BootLine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlashActive, setIsFlashActive] = useState(false);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of the terminal
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [visibleLines]);

    // Execute terminal lines typing simulation
    useEffect(() => {
        if (currentIndex < BOOT_LINES.length) {
            const line = BOOT_LINES[currentIndex];
            const timer = setTimeout(() => {
                setVisibleLines((prev) => [...prev, line]);
                setCurrentIndex((prev) => prev + 1);
            }, line.delay);
            return () => clearTimeout(timer);
        } else {
            // Trigger Green Flash overlay and complete
            const flashTimer = setTimeout(() => {
                setIsFlashActive(true);
                const exitTimer = setTimeout(() => {
                    onComplete();
                }, 400); // Wait for flash out transition
                return () => clearTimeout(exitTimer);
            }, 600);
            return () => clearTimeout(flashTimer);
        }
    }, [currentIndex, onComplete]);

    const getLineColorClass = (type?: string) => {
        switch (type) {
            case "input":
                return "text-[#FFFFFF] font-semibold";
            case "success":
                return "text-[#39FF6A] font-semibold";
            case "warning":
                return "text-[#E8A33D]";
            case "highlight":
                return "text-[#39FF6A] font-black text-lg md:text-2xl tracking-[0.15em] py-2 block border-y border-[#39FF6A]/20 my-2";
            case "system":
            default:
                return "text-[#39FF6A]/80";
        }
    };

    return (
        <>
            {/* Green Flash Discharge Overlay */}
            <AnimatePresence>
                {isFlashActive && (
                    <motion.div
                        className="fixed inset-0 bg-[#39FF6A] z-[1000] pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.9, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, times: [0, 0.5, 1], ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>

            <section className="fixed inset-0 z-[999] bg-[#0A0A0A] font-mono p-4 md:p-10 select-none overflow-hidden flex flex-col justify-start">
                {/* CRT Scanline Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-50 opacity-[0.07]"
                    style={{
                        background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                         linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
                        backgroundSize: "100% 4px, 6px 100%"
                    }}
                />

                {/* CRT Screen Flicker */}
                <div className="absolute inset-0 pointer-events-none z-50 bg-[#39FF6A]/[0.01] animate-pulse" />

                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-[#1F7A3D]/30 pb-3 mb-4 text-[#39FF6A]/50 text-xs tracking-wider select-none">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A3D]/40" />
                        <span>DEVDASH KERNEL BOOT SEQUENCE [v1.0]</span>
                    </div>
                    <div>STATUS: BOOTING</div>
                </div>

                {/* Terminal Text Console */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-1.5 scrollbar-thin scrollbar-thumb-[#1F7A3D]/30 text-xs md:text-sm">
                    {visibleLines.map((line, idx) => (
                        <div key={idx} className={`leading-relaxed ${getLineColorClass(line.type)}`}>
                            {line.text}
                        </div>
                    ))}

                    {/* Terminal Input Cursor */}
                    {currentIndex < BOOT_LINES.length && (
                        <div className="flex items-center text-white">
                            <span className="inline-block w-2.5 h-4 bg-[#39FF6A] animate-pulse ml-0.5" />
                        </div>
                    )}

                    <div ref={terminalEndRef} />
                </div>
            </section>
        </>
    );
}

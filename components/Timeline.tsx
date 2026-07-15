"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ScrollFloat from "@/components/ScrollFloat";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data, description }: { data: TimelineEntry[], description?: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent font-sans md:px-10"
            ref={containerRef}
        >
            {/* Redesigned header matching proposal and site theme */}
            <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-8 lg:px-10 flex flex-col gap-2">
                <span className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block">
                    {"// EVENT TIMELINE"}
                </span>
                <div className="w-full relative z-10 flex justify-start lg:justify-start md:justify-start mt-2">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        containerClassName="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase text-left"
                    >
                        THE MISSION <br /><span className="text-[#00ef4f]">BEGINS HERE.</span>
                    </ScrollFloat>
                </div>
                {description && (
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mt-4 text-left font-sans leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-32 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-[#00ef4f] border border-[#00ef4f] shadow-[0_0_10px_rgba(0,239,79,0.5)]" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-extrabold text-[#00ef4f] font-mono tracking-wider">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-extrabold text-[#00ef4f] font-mono tracking-wider">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}

                {/* Background Connecting Rail Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    {/* Animated Line drawing in on scroll */}
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-b from-[#00ef4f] via-[#00ef4f] to-transparent from-[0%] via-[80%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

"use client";

import { useEffect, useRef } from "react";
import { FONT_SIZE, CHARS } from "@/lib/constants";

export default function TerminalBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      cols = Math.floor(canvas!.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.font = `${FONT_SIZE}px JetBrains Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;
        const alpha = 0.12 + Math.random() * 0.18;
        ctx!.fillStyle = `rgba(0,204,68,${alpha})`;
        ctx!.fillText(ch, i * FONT_SIZE, y);
        if (y > canvas!.height && Math.random() > 0.99) drops[i] = 0;
        drops[i] += 0.1;
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

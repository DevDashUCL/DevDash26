"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/Hero.png"
          alt="DevDash Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}

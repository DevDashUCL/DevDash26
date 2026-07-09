"use client";

import React from "react";
import Image from "next/image";
import "../ui/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section border-t border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="footer-inner max-w-7xl">
        <div className="footer-logo-left">
          <Image
            src="/logos/csc-ucl-transparent.png"
            alt="CSC UCL"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="footer-center">
          <p>&copy; DevDash&apos;26</p>
        </div>

        <div className="footer-logos-right">
          <Image
            src="/ucl.png"
            alt="UCL"
            width={80}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />
          <Image
            src="/logos/uclan-stacked-transparent.png"
            alt="UCLan"
            width={100}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />
        </div>
      </div>
    </footer>
  );
}

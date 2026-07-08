"use client";

import React from "react";

export default function AboutDevDash() {
  return (
    <section id="about" className="relative w-full py-32 md:py-40 bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="section-header">
          {/* <div className="section-label">ABOUT DEVDASH</div> */}
          <h2 className="section-title">
            WE DON&apos;T JUST CODE.
            <br />
            <span className="highlight">WE CREATE WHAT&apos;S NEXT.</span>
          </h2>
          <p className="section-desc">
            DevDash is a high-energy innovation hackathon bringing together
            developers, designers, entrepreneurs and problem solvers.
          </p>
          <p className="section-desc">
            Over 24 hours, participants transform ideas into working solutions
            while collaborating with mentors, industry professionals and fellow
            innovators.
          </p>
          <p className="section-desc">
            Whether you&apos;re building your first project or your next
            startup, DevDash is where innovation begins.
          </p>
        </div>
      </div>
    </section>
  );
}
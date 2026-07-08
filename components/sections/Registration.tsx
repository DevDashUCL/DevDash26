"use client";

import { LimeButton } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Registration() {
  return (
    <section id="register" className="bg-section-register">
      <div className="os-container">
        <div className="section-header">
          <p className="section-label">Registration</p>
          <h2 className="section-title">
            READY TO BUILD <span className="highlight">THE FUTURE?</span>
          </h2>
          <p className="section-desc">
            Join hundreds of developers, designers and innovators for 24 hours of collaboration, learning and creation.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <LimeButton
            onClick={() => window.open(REGISTER_URL, "_blank", "noopener,noreferrer")}
            size="lg"
          >
            REGISTER NOW <ArrowUpRight className="w-5 h-5" />
          </LimeButton>
        </div>
      </div>
    </section>
  );
}

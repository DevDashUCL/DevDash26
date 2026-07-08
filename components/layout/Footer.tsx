"use client";

import React from "react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-section-footer">
      <div className="os-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo-club">
              <Image
                src="/logos/csc-ucl-transparent.png"
                alt="UCL Computer Science Community"
                width={60}
                height={60}
                className="footer-logo-img"
                style={{ objectFit: 'contain', height: 60, width: 60 }}
              />
            </div>
          </div>
          <div className="footer-middle">
            <p className="footer-line brand">@DevDash&apos;26</p>
            <p className="closing">&copy; 2026 DevDash. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <div className="footer-logos">
              <Image
                src="/logos/uclan-stacked-transparent.png"
                alt="UCLan"
                width={51}
                height={60}
                className="footer-logo-img"
                style={{ objectFit: 'contain', height: 60, width: 'auto' }}
              />
              <Image
                src="/ucl.png"
                alt="UCL"
                width={56}
                height={60}
                className="footer-logo-img"
                style={{ objectFit: 'contain', height: 60, width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

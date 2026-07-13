"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import "../sections/Footer.css"; // Keep for any base styles, but we'll use Tailwind mostly

export default function Footer() {
  const sections = [
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
    { name: "Team", href: "#team" },
    { name: "Register", href: "#register" },
  ];

  const contacts = [
    { icon: <Mail className="w-4 h-4" />, text: "contact@devdash26.com", href: "mailto:contact@devdash26.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+44 (0) 1234 567890", href: "tel:+441234567890" },
    { icon: <MapPin className="w-4 h-4" />, text: "UCL Computer Science Dept.", href: "#" },
  ];

  const socials = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ), 
      href: "#" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 10c1-1 3-1 4-1-2-1-3-4-2-6 2 2 6 5 10 5s2-5 6-2c0 2-2 3-2 3z"></path>
        </svg>
      ), 
      href: "#" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: "#" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: "#" 
    },
  ];

  return (
    <footer className="w-full border-t border-[#2A2A2A] bg-[#0A0A0A] relative z-10 pt-16 pb-8 px-6 sm:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logos/csc-ucl-transparent.png"
              alt="CSC UCL"
              width={160}
              height={60}
              className="h-14 w-auto object-contain object-left"
            />
            <p className="text-sm leading-relaxed">
              DevDash&apos;26 is the premier hackathon hosted by the UCL IT Club, bringing together the brightest minds to build the future of tech.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socials.map((social, i) => (
                <Link key={i} href={social.href} className="text-gray-400 hover:text-[#00ef4f] transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 lg:ml-8">
            <h3 className="text-white font-semibold font-mono tracking-wider text-sm uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {sections.map((section, i) => (
                <li key={i}>
                  <Link href={section.href} className="text-sm hover:text-[#00ef4f] transition-colors">
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold font-mono tracking-wider text-sm uppercase">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              {contacts.map((contact, i) => (
                <li key={i}>
                  <Link href={contact.href} className="flex items-center gap-3 text-sm hover:text-[#00ef4f] transition-colors group">
                    <span className="p-2 rounded-md bg-white/5 group-hover:bg-[#00ef4f]/10 transition-colors">
                      {contact.icon}
                    </span>
                    {contact.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Extra */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold font-mono tracking-wider text-sm uppercase">Stay Updated</h3>
            <p className="text-sm">Join our newsletter to receive the latest updates and announcements.</p>
            <form className="mt-2 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ef4f] transition-colors w-full"
              />
              <button 
                type="submit"
                className="bg-[#00ef4f] text-black font-semibold rounded-md px-4 py-2 text-sm hover:bg-[#00ef4f]/90 transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright & Logos */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs tracking-wide">&copy; {new Date().getFullYear()} DevDash. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Image
              src="/ucl.png"
              alt="UCL"
              width={80}
              height={40}
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/logos/uclan-stacked-transparent.png"
              alt="UCLan"
              width={100}
              height={40}
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

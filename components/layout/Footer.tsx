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
    // { icon: <Mail className="w-4 h-4" />, text: "contact@devdash26.com", href: "mailto:contact@devdash26.com" },
    // { icon: <Phone className="w-4 h-4" />, text: "+44 (0) 1234 567890", href: "tel:+94 " },
    { icon: <MapPin className="w-4 h-4" />, text: "Universal College Lanka", href: "#" },
  ];

  const socials = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "https://www.instagram.com/ucl.csc/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "https://www.linkedin.com/company/ucl-csc/"
    },
    {
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: "https://chat.whatsapp.com/DX8O19B42EE1vDtb6EZ2A6?s=cl&p=a&ilr=1"
    }
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
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ef4f] transition-colors">
                  {social.icon}
                </a>
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
            <div className="text-sm">
              <p className="mb-3 text-gray-400">Stay connected with us for:</p>
              <ul className="flex flex-col gap-2 mb-4 text-gray-300">
                <li className="flex items-center gap-2"><span>💻</span> Workshops & Tech Events</li>
                <li className="flex items-center gap-2"><span>🚀</span> Hackathons</li>
                <li className="flex items-center gap-2"><span>🎙️</span> Guest Sessions</li>
                <li className="flex items-center gap-2"><span>🤝</span> Community Activities</li>
                <li className="flex items-center gap-2"><span>📢</span> Latest Updates & Opportunities</li>
              </ul>
            </div>
            <a
              href="https://chat.whatsapp.com/DX8O19B42EE1vDtb6EZ2A6?s=cl&p=a&ilr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#00ef4f] text-black font-semibold rounded-md px-4 py-2.5 text-sm hover:bg-[#00ef4f]/90 transition-colors w-full text-center flex items-center justify-center gap-2"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join WhatsApp Group
            </a>
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

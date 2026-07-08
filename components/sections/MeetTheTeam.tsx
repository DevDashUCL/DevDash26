"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export default function MeetTheTeam() {
  const eventLead: TeamMember = {
    name: "Shehani Mukadange",
    role: "Event Lead / Marketing Communicator",
    email: "shehanikav@gmail.com",
    phone: "0742885971",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  };

  const coordinators: TeamMember[] = [
    {
      name: "Mahdi Hannan",
      role: "Program Coordinator / Secretary",
      email: "hannanmahdi009@gmail.com",
      phone: "0773927351",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vinuki Gunesekara",
      role: "Judging & Evaluation / Budget Manager",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vinuli Ranasinghe",
      role: "Logistics & Communication Lead",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ];

  const remainingTeam: TeamMember[] = [
    {
      name: "Mirco Fernando",
      role: "Technical Coordinator",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Moksha Sandavirage",
      role: "Technical Coordinator",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ovin Perera",
      role: "Design Coordinator",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Eeshal Ali",
      role: "Design Coordinator",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
      },
    },
  } as const;

  const renderCard = (member: TeamMember) => (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center justify-between bg-[#111111]/30 border border-white/10 hover:border-[#00ef4f]/40 hover:shadow-[0_0_20px_rgba(0,239,79,0.06)] rounded-xl p-5 backdrop-blur-sm transition-all duration-300 w-full max-w-[270px] sm:max-w-[290px] md:max-w-[310px] h-[340px] sm:h-[370px] md:h-[390px] overflow-hidden text-center group"
    >
      {/* Tech corner brackets */}
      <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-[#00ef4f]/40 transition-colors" />
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-[#00ef4f]/40 transition-colors" />
      <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-[#00ef4f]/40 transition-colors" />
      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-[#00ef4f]/40 transition-colors" />

      {/* Cyberpunk headshot / avatar placeholder (Larger size) */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-black/40 border border-white/10 group-hover:border-[#00ef4f]/30 rounded-xl shrink-0 overflow-hidden relative flex items-center justify-center transition-colors">
        {/* Radar/pulse glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,239,79,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
        
        {/* Animated matrix scanline */}
        <div className="absolute inset-x-0 h-[1px] bg-[#00ef4f]/40 top-0 group-hover:animate-[scanline_2s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />

        {/* Futuristic profile outline */}
        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white/10 group-hover:text-[#00ef4f]/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>

        {/* Small tech target crosshairs */}
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/30 group-hover:border-[#00ef4f]/40" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-white/30 group-hover:border-[#00ef4f]/40" />
        <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-white/30 group-hover:border-[#00ef4f]/40" />
        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/30 group-hover:border-[#00ef4f]/40" />
      </div>

      {/* Details layout below avatar */}
      <div className="flex flex-col items-center flex-1 justify-center w-full min-w-0">
        <span className="text-[#00ef4f] text-[9px] sm:text-[10px] md:text-xs font-mono tracking-wider font-semibold uppercase block mb-1">
          {member.role}
        </span>
        <h4 className="text-sm sm:text-base md:text-lg font-extrabold text-white tracking-wide uppercase font-sans line-clamp-2 max-w-[220px] mb-2 sm:mb-3 group-hover:text-[#00ef4f]/90 transition-colors">
          {member.name}
        </h4>

        {/* Contact Links & Phone Numbers */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Social Icons row */}
          <div className="flex items-center gap-3 text-white/40">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ef4f] transition-colors" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ef4f] transition-colors" title="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="hover:text-[#00ef4f] transition-colors" title={`Email: ${member.email}`}>
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
          
          {/* Compact phone number displays for Lead / Marketing & Coord */}
          {member.phone && (
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] md:text-[11px] font-mono text-white/30 group-hover:text-[#00ef4f]/40 transition-colors mt-0.5">
              <Phone className="w-3 h-3 shrink-0" />
              <span>{member.phone}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden flex flex-col items-center px-6 border-t border-white/5">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ripple-wave {
          0%, 100% {
            transform: scaleY(0.4);
            opacity: 0.3;
          }
          50% {
            transform: scaleY(1.2);
            opacity: 0.9;
          }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes scanline {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .animate-cursor-blink {
          animation: blink-cursor 1s step-end infinite;
        }
      `}} />

      <div className="max-w-[1500px] w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span 
              variants={itemVariants}
              className="text-[#00ef4f] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block"
            >
              // TEAM
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase text-center"
            >
              MEET THE <span className="text-[#00ef4f]">TEAM</span>
              <span className="text-[#00ef4f] animate-cursor-blink font-mono">|</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mt-2 text-center"
            >
              A passionate group of builders, creators and problem solvers working behind the scenes to make DevDash possible.
            </motion.p>

            {/* Custom tag */}
            <motion.div 
              variants={itemVariants} 
              className="border border-[#00ef4f]/30 bg-[#00ef4f]/5 rounded px-3 py-1.5 text-[#00ef4f] font-mono text-[10px] md:text-xs uppercase tracking-widest inline-block w-fit mt-1 text-center"
            >
              &gt; COLLABORATE. ORGANIZE. EXECUTE.
            </motion.div>
          </motion.div>
        </div>

        {/* Pyramid Grid of Member Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center gap-8 w-full"
        >
          {/* Row 1: Event Lead (1 Card, Centered) */}
          <div className="flex justify-center w-full">
            {renderCard(eventLead)}
          </div>

          {/* Row 2: Coordinators (3 Cards, Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
            {coordinators.map((member, index) => (
              <React.Fragment key={index}>
                {renderCard(member)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 3: Remaining Coordinators (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
            {remainingTeam.map((member, index) => (
              <React.Fragment key={index}>
                {renderCard(member)}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom slogan */}
          <motion.span 
            variants={itemVariants}
            className="text-center font-mono text-[10px] md:text-xs text-[#00ef4f]/60 uppercase tracking-[0.25em] mt-12 block"
          >
            [ UNITED BY PURPOSE. DRIVEN BY IMPACT. ]
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}

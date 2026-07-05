"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "Team", href: "#team" },
];

export function Navbar() {
    const scrolled = useScrolled(20);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Monitor scroll position to determine active section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the middle part of the screen
            threshold: 0.1,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observe hero section
        const heroElement = document.getElementById("hero");
        if (heroElement) {
            observer.observe(heroElement);
        }

        navLinks.forEach((link) => {
            const id = link.href.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Focus trap and prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileMenuOpen]);

    const isHidden = !scrolled || activeSection === "hero" || activeSection === "";

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-signal-green focus:text-black font-bold font-mono"
            >
                SKIP TO MAIN CONTENT
            </a>

            <motion.header
                className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-center transition-all duration-300"
                initial={{ y: -80, opacity: 0 }}
                animate={{
                    y: isHidden ? -80 : 0,
                    opacity: isHidden ? 0 : 1,
                    backgroundColor: "rgba(6, 6, 8, 0.85)",
                    backdropFilter: "blur(12px)",
                    borderBottomColor: "rgba(31, 122, 61, 0.12)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}
            >
                <div className="w-full container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex flex-row items-center gap-1">
                        <Link href="/" className="flex items-center gap-1 group z-50 relative">
                            <Image
                                src="/devdash.png"
                                alt="DevDash Logo"
                                width={150}
                                height={46}
                                priority
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isLinkActive = activeSection === link.href.replace("#", "");
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative py-1 text-xs font-semibold font-mono tracking-widest transition-colors duration-200 group uppercase ${isLinkActive ? "text-signal-green-glow" : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {/* Hover / Active underline */}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-signal-green-glow transition-transform duration-300 origin-left ${isLinkActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 z-50 relative">
                        <Button
                            variant="primary"
                            className="hidden md:inline-flex font-mono tracking-widest text-xs uppercase"
                            onClick={() => {
                                window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
                            }}
                        >
                            ./register
                        </Button>

                        <button
                            className="md:hidden text-white p-2 hover:text-signal-green-glow transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[#060608]/98 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <nav className="flex flex-col items-center gap-8 text-center w-full px-6">
                            {navLinks.map((link, i) => {
                                const isLinkActive = activeSection === link.href.replace("#", "");
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`font-mono text-2xl tracking-widest transition-colors block uppercase ${isLinkActive ? "text-signal-green-glow" : "text-gray-300 hover:text-white"
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="mt-4 w-full max-w-sm"
                            >
                                <Button
                                    className="w-full text-lg h-14 font-mono uppercase tracking-widest"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setTimeout(() => {
                                            window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
                                        }, 300);
                                    }}
                                >
                                    ./register
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

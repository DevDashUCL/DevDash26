"use client";

import { useState } from "react";
import { FAQS } from "../../lib/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 md:py-32 relative overflow-hidden flex items-center justify-center px-4 bg-[#0A0A0A]">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-green)] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-green)] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 } }
              }}
              className="text-[var(--color-accent-green)] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold block uppercase"
            >
              {"// FAQ"}
            </motion.span>

            <div className="w-full relative z-10 flex justify-center">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-modern-warfare uppercase text-center"
              >
                FA<span className="text-[var(--color-accent-green)]">Q</span>s
                <span className="text-[var(--color-accent-green)] animate-cursor-blink font-mono">|</span>
              </ScrollFloat>
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 } }
              }}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mt-2 text-center"
            >
              Everything you need to know about DevDash&apos;26. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isOpen
                    ? "bg-[rgba(20,20,20,0.8)] border-[var(--color-accent-green)] shadow-[0_0_20px_rgba(34,214,107,0.15)]"
                    : "bg-[rgba(20,20,20,0.4)] border-white/10 hover:border-white/20 hover:bg-[rgba(30,30,30,0.6)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 outline-none cursor-pointer group"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-[var(--color-text-primary)] group-hover:text-white"}`}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-[var(--color-accent-green)] text-black" : "bg-white/5 text-[var(--color-accent-green)] group-hover:bg-white/10"
                    }`}
                  >
                    <Plus size={18} strokeWidth={isOpen ? 3 : 2} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
                        <div className="w-full h-px bg-linear-to-r from-[var(--color-accent-green)]/0 via-[var(--color-accent-green)]/20 to-[var(--color-accent-green)]/0 mb-5" />
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
export { Faq as FAQSection };

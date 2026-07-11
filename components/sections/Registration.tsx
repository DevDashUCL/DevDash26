"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";
import "@/components/ui/Registration.css";

export default function Registration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  } as const;

  return (
    <section id="register" className="registration-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="registration-inner"
      >
        <motion.span variants={itemVariants} className="registration-label">
          // REGISTER
        </motion.span>

        <motion.h2 variants={itemVariants} className="registration-heading">
          READY TO BUILD{" "}
          <span className="highlight">THE FUTURE?</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="registration-divider">
          <div className="registration-divider-line registration-divider-line-lg" />
          <div className="registration-divider-line registration-divider-line-sm" />
        </motion.div>

        <motion.p variants={itemVariants} className="registration-body">
          Join hundreds of developers, designers and innovators for 24 hours of
          collaboration, learning and creation.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            window.open(REGISTER_URL, "_blank", "noopener,noreferrer")
          }
          className="registration-cta"
        >
          REGISTER NOW <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}

"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Existing Button component
interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        // FIX: Added whitespace-nowrap and shrink-0
        const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 focus:ring-offset-background";

        const variants = {
            primary: "bg-accent-red text-white hover:bg-red-700",
            ghost: "bg-transparent text-white hover:bg-white/10",
            outline: "border border-border text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

// Theme Button 1: LimeButton (Filled Neon Green)
export interface LimeButtonProps extends HTMLMotionProps<"button"> {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const LimeButton = React.forwardRef<HTMLButtonElement, LimeButtonProps>(
    ({ className, size = "md", children, ...props }, ref) => {
        // FIX: Added whitespace-nowrap and shrink-0
        const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 font-mono font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.25)] bg-[#84CC16] hover:bg-[#72B013] text-black focus:outline-none focus:ring-2 focus:ring-[#84CC16] focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-12 px-8 text-sm",
            lg: "h-14 px-10 text-base",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, sizes[size], className)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
LimeButton.displayName = "LimeButton";

// Theme Button 2: OutlineButton (Transparent with White/Gray Border)
export interface OutlineButtonProps extends HTMLMotionProps<"button"> {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
    ({ className, size = "md", children, ...props }, ref) => {
        // FIX: Added whitespace-nowrap and shrink-0
        const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 font-mono font-bold uppercase tracking-wider rounded-md transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-12 px-8 text-sm",
            lg: "h-14 px-10 text-base",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, sizes[size], className)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
OutlineButton.displayName = "OutlineButton";
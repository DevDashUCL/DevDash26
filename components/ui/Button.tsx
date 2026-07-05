"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 focus:ring-offset-background";

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

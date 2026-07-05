import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
        
        const variants = {
            primary: "bg-[#00cc44] text-black hover:bg-[#33dd77] active:scale-98 font-bold",
            secondary: "bg-gray-800 text-white hover:bg-gray-700 active:scale-98",
            outline: "border border-[#00cc44] text-[#00cc44] hover:bg-[#00cc44]/10 active:scale-98",
            ghost: "text-gray-300 hover:text-white hover:bg-gray-800",
        };

        const sizes = {
            sm: "h-9 px-3 text-xs",
            md: "h-10 px-4 py-2 text-sm",
            lg: "h-12 px-6 text-base",
        };

        const variantClass = variants[variant] || variants.primary;
        const sizeClass = sizes[size] || sizes.md;

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

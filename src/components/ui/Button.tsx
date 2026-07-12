import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-95";
    
    const variants = {
      primary: "bg-[#2563EB] text-primary-foreground hover:bg-[#1D4ED8] hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-300",
      secondary: "bg-muted text-foreground hover:bg-muted/80 hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300",
      outline: "border border-white/5 bg-transparent hover:bg-transparent hover:border-white/10 text-foreground hover:text-accent hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]",
      ghost: "hover:bg-transparent hover:text-[#2563EB] text-muted-foreground hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300",
    };
    
    const sizes = {
      sm: "min-h-[44px] h-[44px] md:min-h-0 md:h-8 px-3 text-xs",
      md: "min-h-[44px] h-[44px] md:min-h-0 md:h-10 px-4 py-2 text-sm",
      lg: "min-h-[48px] h-12 px-8 text-base",
    };

    const Comp = asChild ? (props as any).children.type : "button";
    const childProps = asChild ? { ...props, ...((props as any).children.props) } : props;

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...childProps}
      />
    );
  }
);
Button.displayName = "Button";

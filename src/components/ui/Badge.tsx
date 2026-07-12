import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  const variants = {
    default: "bg-accent/10 text-accent hover:bg-accent/20 border border-transparent",
    outline: "text-foreground border border-muted-foreground/30",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
};

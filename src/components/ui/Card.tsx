import { cn } from "@/lib/utils";
import React from "react";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-3xl border border-white/5 bg-muted/10 p-6 md:p-8 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)]", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

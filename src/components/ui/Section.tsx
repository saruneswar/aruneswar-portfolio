import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, children, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      {children}
    </section>
  );
};

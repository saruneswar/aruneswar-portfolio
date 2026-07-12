"use client";

import { cn } from "@/lib/utils";
import { Stat } from "@/types";
import { Card } from "./Card";
import * as Icons from "lucide-react";
import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    const numericMatch = value.match(/(\d+)(.*)/);
    const endValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
    const suffix = numericMatch ? numericMatch[2] : "";

    if (isInView && numericMatch && ref.current) {
      const controls = animate(0, endValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString() + suffix;
          }
        },
      });
      return controls.stop;
    } else if (ref.current && !numericMatch) {
      ref.current.textContent = value;
    }
  }, [isInView, value]);

  const initialDisplay = value.match(/(\d+)(.*)/) ? `0${value.match(/(\d+)(.*)/)?.[2] || ""}` : value;

  return <span ref={ref}>{initialDisplay}</span>;
}

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export const StatCard = ({ stat, className }: StatCardProps) => {
  // @ts-ignore
  const Icon = Icons[stat.icon] || Icons.HelpCircle;

  return (
    <Card className={cn("flex flex-col items-center justify-center text-center p-6 border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300", className)}>
      <div className="mb-4 rounded-full bg-accent/10 p-3 text-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl font-bold tracking-tight text-foreground">
        <AnimatedCounter value={stat.value} />
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </Card>
  );
};

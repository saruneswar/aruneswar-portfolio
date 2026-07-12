"use client";

import { TimelineEvent } from "@/types";
import { CircleDot } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  item: TimelineEvent;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return (
    <motion.div 
      className="relative pl-8 md:pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="absolute left-[-13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary-foreground ring-4 ring-background shadow-[0_0_10px_rgba(37,99,235,0.18)]">
        <CircleDot size={12} strokeWidth={3} />
      </div>
      
      <div className="mb-2">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wide mb-3">
          {item.year}
        </span>
        <h3 className="text-lg md:text-xl font-medium text-foreground leading-snug">
          {item.title}
        </h3>
      </div>
      
      {item.description && (
        <p className="text-base text-muted-foreground mb-3 leading-relaxed">
          {item.description}
        </p>
      )}
      
      {item.points && item.points.length > 0 && (
        <ul className="space-y-2 mt-3">
          {item.points.map((point, i) => (
            <li key={i} className="text-sm md:text-base text-muted-foreground/90 relative pl-5">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/50 shadow-[0_0_5px_rgba(37,99,235,0.18)]"></span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

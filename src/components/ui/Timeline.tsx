"use client";

import { TimelineEvent } from "@/types";
import { TimelineItem } from "./TimelineItem";

interface TimelineProps {
  items: TimelineEvent[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-10">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface EngineeringFocusProps {
  focusAreas: string[];
}

export const EngineeringFocus = ({ focusAreas }: EngineeringFocusProps) => {
  return (
    <motion.div 
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
        <span className="h-px bg-muted-foreground/20 flex-1"></span>
        Engineering Focus
        <span className="h-px bg-muted-foreground/20 flex-1"></span>
      </h3>
      <div className="flex flex-wrap gap-3">
        {focusAreas.map((area, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="px-4 py-2 text-sm font-medium bg-muted/10 backdrop-blur-sm border-accent/30 text-foreground/90 hover:bg-accent/10 hover:border-accent hover:shadow-[0_4px_14px_rgba(37,99,235,0.08)] transition-all cursor-default"
          >
            {area}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

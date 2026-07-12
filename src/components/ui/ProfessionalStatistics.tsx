"use client";

import { motion } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
}

interface ProfessionalStatisticsProps {
  stats: StatItem[];
}

export const ProfessionalStatistics = ({ stats }: ProfessionalStatisticsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-muted-foreground/10 rounded-2xl overflow-hidden mt-20 border border-muted-foreground/20 shadow-xl">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="bg-background/90 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center h-full group hover:bg-muted/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.label}
          </span>
          <span className="text-sm font-medium text-muted-foreground whitespace-pre-line leading-relaxed">
            {stat.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

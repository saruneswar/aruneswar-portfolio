"use client";

import { SkillCategory } from "@/types";
import { SkillBadge } from "./SkillBadge";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./Card";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCategoryCard = ({ category, index }: SkillCategoryCardProps) => {
  // @ts-ignore
  const Icon = Icons[category.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="h-full p-6 border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-5 border-b border-muted-foreground/10 pb-4">
          <div className="p-2.5 rounded-xl bg-muted/10 text-muted-foreground group-hover:text-accent group-hover:bg-accent/5 transition-colors duration-300 border border-transparent group-hover:border-accent/20">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

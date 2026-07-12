"use client";

import { Achievement } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Medal, Calendar, Building2, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import { Badge } from "./Badge";
import { DocumentViewer } from "./DocumentViewer";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const [frame, setFrame] = useState("aspect-[4/3]");
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const isWinner = achievement.achievementLevel.toLowerCase().includes("winner");
  const Icon = isWinner ? Trophy : Medal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="group flex flex-col md:flex-row gap-6 md:gap-8 rounded-3xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 relative"
    >
      {/* Glow effect behind the card */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {achievement.image && (
        <div className={`relative w-full md:w-1/3 ${frame} rounded-2xl overflow-hidden border border-muted-foreground/20 flex-shrink-0 bg-muted/30`}>
          <Image 
            src={achievement.image} 
            alt={achievement.title} 
            fill 
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.naturalHeight > target.naturalWidth) setFrame("aspect-[3/4]");
              else if (target.naturalHeight === target.naturalWidth) setFrame("aspect-square");
              else setFrame("aspect-video");
            }}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 justify-center z-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <Badge className={`px-4 py-1.5 flex items-center gap-2 border shadow-sm backdrop-blur-md
            ${isWinner 
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' 
              : 'bg-slate-300/10 text-slate-300 border-slate-300/30'}`}
          >
            <Icon size={16} className={isWinner ? "text-amber-500" : "text-slate-300"} />
            <span className="font-bold tracking-wider uppercase text-xs">{achievement.achievementLevel}</span>
          </Badge>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Calendar size={14} />
            {achievement.date}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 leading-snug">
          {achievement.title}
        </h3>

        <div className="flex items-center gap-2 text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
          <Building2 size={16} />
          {achievement.organization}
        </div>

        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {achievement.description}
        </p>

        {achievement.certificate && (
          <div className="flex flex-wrap items-center gap-4 mt-auto pt-2">
            <button
              onClick={() => setIsCertificateOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] md:min-h-0 bg-muted/10 hover:bg-accent/5 text-muted-foreground hover:text-accent rounded-full text-sm font-semibold transition-colors duration-300 border border-white/5 hover:border-white/10"
            >
              <ExternalLink size={16} />
              View Certificate
            </button>
            <a
              href={achievement.certificate}
              download
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] md:min-h-0 bg-muted hover:bg-muted/80 text-foreground rounded-full text-sm font-medium transition-colors duration-300 border border-muted-foreground/20"
            >
              <Download size={16} />
              Download Certificate
            </a>
          </div>
        )}
      </div>

      {achievement.certificate && (
        <DocumentViewer 
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
          fileUrl={achievement.certificate}
          title={`${achievement.title} Certificate`}
        />
      )}
    </motion.div>
  );
};

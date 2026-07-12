"use client";

import { Experience } from "@/types";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PremiumGallery } from "./PremiumGallery";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [frames, setFrames] = useState<Record<string, string>>({});

  const gallerySlice = experience.gallery?.slice(0, 3) || [];
  const isSingle = gallerySlice.length === 1;
  const isThreeImages = gallerySlice.length === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="relative w-full flex md:justify-end pl-10 md:pl-0 md:pr-[12.5%]"
    >
      {/* Timeline Center Dot (Visible on all sizes, centered on desktop, left on mobile) */}
      <div className="absolute left-[4px] md:left-[12.5%] md:-translate-x-1/2 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary-foreground ring-4 ring-background shadow-[0_0_10px_rgba(37,99,235,0.18)] z-10">
        <div className="h-2.5 w-2.5 rounded-full bg-background"></div>
      </div>

      <div className="w-full md:w-[calc(75%-40px)] md:text-left">
        <div className="flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300">
          
          <div className="flex flex-col w-full">
            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent/10 text-accent border border-accent shadow-sm">
              <Calendar size={14} />
              {experience.startDate} — {experience.endDate}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-muted-foreground/70" />
              {experience.location}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3 leading-snug">
            {experience.role}
          </h3>

          <div className="flex items-center gap-2 text-lg text-accent font-semibold mb-6">
            <Building size={18} />
            {experience.company}
          </div>

          {experience.focusAreas && experience.focusAreas.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {experience.focusAreas.map((focus, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md bg-muted/30 border border-muted-foreground/20 text-foreground/80">
                  {focus}
                </span>
              ))}
            </div>
          )}

          {experience.responsibilities && experience.responsibilities.length > 0 && (
            <div className="space-y-4 mb-8">
              {experience.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{resp}</p>
                </div>
              ))}
            </div>
          )}
          
          {experience.skillsGained && experience.skillsGained.length > 0 && (
            <div className="mt-8 pt-6 border-t border-muted-foreground/20">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/90 mb-4">Key Learnings & Skills Gained</h4>
              <ul className="space-y-3">
                {experience.skillsGained.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>

          {gallerySlice.length > 0 && (
            <>
              <div className="block lg:hidden mt-6">
                <PremiumGallery images={gallerySlice} />
              </div>
              <div className={`hidden lg:grid mb-8 md:mb-0 md:mt-10 mx-auto w-full md:w-fit max-w-full gap-4 md:gap-5 ${
                isSingle 
                  ? 'grid-cols-1' 
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}>
              {gallerySlice.map((img, i) => {
                const frame = frames[img] || (experience.company === "Dot World Technologies" && i === 0 ? "aspect-[4/5]" : "aspect-video");
                
                return (
                  <div 
                    key={i} 
                    className={`relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 opacity-90 hover:opacity-100 transition-opacity shadow-sm ${frame} ${
                      isSingle 
                        ? 'w-full sm:w-[480px] md:w-[560px]' 
                        : 'w-full sm:w-[280px] md:w-[360px]'
                    } ${
                      isThreeImages && i === 0 
                        ? 'sm:row-span-2 sm:h-full' 
                        : ''
                    } max-w-full mx-auto`}
                  >
                    <Image 
                      src={img} 
                      alt="Internship documentation" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="hover:scale-105 transition-transform duration-700 object-cover object-top"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        let newFrame = 'aspect-video';
                        if (target.naturalHeight > target.naturalWidth) newFrame = 'aspect-[3/4]';
                        else if (target.naturalHeight === target.naturalWidth) newFrame = 'aspect-square';
                        if (frames[img] !== newFrame) setFrames(prev => ({...prev, [img]: newFrame}));
                      }}
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
                  </div>
                );
              })}
            </div>
            </>
          )}

        </div>
      </div>
    </motion.div>
  );
};

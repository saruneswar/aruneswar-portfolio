"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, CheckCircle2 } from "lucide-react";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [frame, setFrame] = useState("aspect-[16/10]");

  return (
    <motion.div
      id={`project-${project.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className={`relative ${frame} w-full overflow-hidden bg-muted/30 border-b border-muted-foreground/20`}>
        {project.demoVideo ? (
          <video
            src={project.demoVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onLoadedData={(e) => {
              const target = e.target as HTMLVideoElement;
              if (target.videoHeight > target.videoWidth) setFrame("aspect-[3/4]");
              else if (target.videoHeight === target.videoWidth) setFrame("aspect-square");
              else setFrame("aspect-video");
            }}
          />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.naturalHeight > target.naturalWidth) setFrame("aspect-[3/4]");
              else if (target.naturalHeight === target.naturalWidth) setFrame("aspect-square");
              else setFrame("aspect-video");
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
        
        {project.status && (
          <div className="absolute top-5 right-5">
            <Badge className="bg-accent/20 text-accent border border-accent backdrop-blur-md flex items-center gap-1.5 shadow-md px-3 py-1">
              <CheckCircle2 size={14} />
              {project.status}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8 relative">
        <Link 
          href={`/projects/${project.slug}`}
          className="absolute top-0 right-8 -translate-y-1/2 p-3 rounded-full bg-accent text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_10px_rgba(0,0,0,0.15)] opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1/2 md:translate-y-4 group-hover:-translate-y-1/2 z-10"
          aria-label={`View details for ${project.title}`}
        >
          <ArrowRight size={20} strokeWidth={2.5} />
        </Link>

        <div className="flex items-center gap-4 mb-4 text-xs md:text-sm text-muted-foreground">
          {project.category && (
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-foreground/80">
              <Tag size={14} className="text-accent" />
              {project.category}
            </span>
          )}
          {project.category && project.duration && <span className="text-muted-foreground/30">•</span>}
          {project.duration && (
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar size={14} className="text-muted-foreground/70" />
              {project.duration}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3 line-clamp-2 leading-snug">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-8 flex-1 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-muted/40 border border-muted-foreground/20 text-foreground/90">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-muted/20 border border-muted-foreground/10 text-muted-foreground">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl font-bold uppercase tracking-wider text-sm bg-muted/10 text-muted-foreground border border-white/5 hover:bg-transparent hover:text-accent hover:border-accent transition-all duration-300"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
};

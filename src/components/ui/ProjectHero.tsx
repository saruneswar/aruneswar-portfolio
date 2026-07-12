"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Tag, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "./Badge";

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (document.referrer.includes(window.location.host)) {
      router.back();
    } else {
      router.push('/#projects');
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-muted-foreground/20">
      <div className="absolute inset-0 z-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover object-top opacity-20 blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <button 
            onClick={handleBack}
            className="group flex items-center gap-2 mb-12 px-4 py-2 bg-muted/20 hover:bg-accent/5 border border-white/5 hover:border-white/10 backdrop-blur-md rounded-full text-muted-foreground hover:text-foreground transition-all duration-300 w-fit shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Projects</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.status && (
              <Badge className="bg-accent/20 text-accent border border-accent px-3 py-1 text-sm font-medium">
                {project.status}
              </Badge>
            )}
            {project.category && (
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground border border-muted-foreground/30 px-3 py-1 rounded-full bg-muted/20 backdrop-blur-sm">
                <Tag size={14} className="text-accent" />
                {project.category}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-8 text-sm md:text-base text-muted-foreground border-y border-muted-foreground/20 py-6 bg-muted/5 backdrop-blur-sm rounded-2xl px-6 md:px-8">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-accent" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold mb-1">Timeline</span>
                <span className="font-medium text-foreground">{project.duration}</span>
              </div>
            </div>
            <div className="w-px h-10 bg-muted-foreground/20 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <User size={18} className="text-accent" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold mb-1">Role</span>
                <span className="font-medium text-foreground">{project.role}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { useState } from "react";

export const Hero = () => {
  const [frame, setFrame] = useState("aspect-[4/5]");
  return (
    <Section id="home" className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32 lg:min-h-[90vh] lg:flex lg:items-center">
      {/* Background Gradient & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Premium Dark Gradient */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-muted/30 via-background to-background"></div>
         
         {/* Subtle Animated Particles / Circuit Pattern */}
         <motion.svg 
            className="absolute inset-0 w-full h-full opacity-[0.02]" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 2 }}
         >
            <defs>
              <pattern id="bg-circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 h 20 v 20 h 20" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="30" r="1.5" fill="currentColor" />
                <path d="M50 30 h 30 v 40 h 10" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-circuit)" />
         </motion.svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Side */}
          <div className="flex flex-col space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-muted-foreground text-lg md:text-xl font-medium tracking-wide mb-2">
                Hello, I&apos;m
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {profileData.name}
              </h1>
              <h3 className="text-2xl md:text-3xl text-accent font-medium tracking-tight">
                {profileData.role}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-balance">
                Specializing in <strong className="text-foreground font-medium">Industrial Automation</strong>, <strong className="text-foreground font-medium">Power Systems</strong>, and <strong className="text-foreground font-medium">Electrical Design</strong>. Passionate about leveraging <strong className="text-foreground font-medium">Smart Grid Technologies</strong> and <strong className="text-foreground font-medium">Embedded Systems</strong> to architect robust, scalable energy infrastructure.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto font-semibold gap-2">
                <a href={profileData.resumeUrl} download aria-label="Download Resume">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold gap-2">
                <Link href="#projects" aria-label="View Projects">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6 border-t border-muted-foreground/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-muted-foreground/20 text-sm font-medium text-foreground/90 backdrop-blur-sm shadow-sm transition-colors hover:bg-muted/60">
                🏆 Smart India Hackathon Winner
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-muted-foreground/20 text-sm font-medium text-foreground/90 backdrop-blur-sm shadow-sm transition-colors hover:bg-muted/60">
                ⚡ Industrial Automation
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-muted-foreground/20 text-sm font-medium text-foreground/90 backdrop-blur-sm shadow-sm transition-colors hover:bg-muted/60">
                🎓 Final Year EEE Student
              </span>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div 
            className="relative lg:ml-auto w-full max-w-md mx-auto mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Animated subtle circuit behind the card */}
            <motion.svg 
              className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] text-muted-foreground/20 z-0 pointer-events-none"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.path 
                d="M10 50 H 30 V 20 H 70 V 80 H 90" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="30" cy="20" r="1.5" fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5] }}
                transition={{ duration: 3, times: [0, 0.8, 1] }}
              />
              <motion.circle 
                cx="70" cy="80" r="1.5" fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5] }}
                transition={{ duration: 3, times: [0, 0.8, 1] }}
              />
            </motion.svg>

            <div className={`relative z-10 ${frame} w-full rounded-2xl overflow-hidden border border-muted-foreground/20 bg-muted/30 shadow-2xl backdrop-blur-md`}>
              <Image 
                src="/images/profile/profile.png" 
                alt={`${profileData.name} - Profile Picture`}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.naturalHeight > target.naturalWidth) setFrame("aspect-[3/4]");
                  else if (target.naturalHeight === target.naturalWidth) setFrame("aspect-square");
                  else setFrame("aspect-video");
                }}
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none"></div>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

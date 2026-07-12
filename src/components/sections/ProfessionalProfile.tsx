"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { ProfessionalCard } from "../ui/ProfessionalCard";
import { EngineeringFocus } from "../ui/EngineeringFocus";
import { Timeline } from "../ui/Timeline";
import { ProfessionalStatistics } from "../ui/ProfessionalStatistics";
import { profileData, professionalSummary, engineeringFocus, timelineData, professionalStats } from "@/data/profile";
import { motion } from "framer-motion";

export const ProfessionalProfile = () => {
  return (
    <Section id="profile" className="py-20 md:py-32 bg-background relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5 pointer-events-none"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Professional Profile
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <ProfessionalCard profile={profileData} />
            
            <motion.div 
              className="mt-10 space-y-4 text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {professionalSummary.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            <EngineeringFocus focusAreas={engineeringFocus} />
          </div>

          {/* Right Column (Career Journey) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">Career Journey</h3>
              <p className="text-muted-foreground">The path of continuous learning and engineering excellence.</p>
            </motion.div>
            
            <Timeline items={timelineData} />
          </div>

        </div>

        {/* Bottom Section (Statistics) */}
        <ProfessionalStatistics stats={professionalStats} />
      </Container>
    </Section>
  );
};

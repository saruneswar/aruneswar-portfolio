"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { experienceData } from "@/data/experience";
import { ExperienceCard } from "../ui/ExperienceCard";
import { motion } from "framer-motion";

export const ProfessionalExperience = () => {
  return (
    <Section id="experience" className="py-20 md:py-32 bg-muted/5 relative overflow-hidden">
      <Container className="relative z-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-world engineering internships focusing on industrial automation, panel manufacturing, and embedded systems development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[16px] md:left-[12.5%] top-0 bottom-0 w-1 bg-muted-foreground/10 md:-translate-x-1/2 rounded-full z-0"></div>

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {experienceData.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { skillsData } from "@/data/skills";
import { SkillCategoryCard } from "../ui/SkillCategoryCard";
import { motion } from "framer-motion";

export const TechnicalSkills = () => {
  return (
    <Section id="skills" className="py-20 md:py-32 bg-background relative">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set bridging core electrical engineering, industrial automation, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

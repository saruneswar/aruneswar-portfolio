"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { ResumePreview } from "../ui/ResumePreview";
import { motion } from "framer-motion";

export const ResumeSection = () => {
  return (
    <Section id="resume" className="py-20 md:py-32 bg-muted/5 relative overflow-hidden border-t border-muted-foreground/10">
      <Container className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my academic background, technical proficiencies, and professional engineering experience.
          </p>
        </motion.div>

        <ResumePreview />
      </Container>
    </Section>
  );
};

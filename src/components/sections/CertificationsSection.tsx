"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { certificationsData } from "@/data/certifications";
import { CertificationCard } from "../ui/CertificationCard";
import { motion } from "framer-motion";

export const CertificationsSection = () => {
  return (
    <Section id="certifications" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <Container className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional credentials and completion certificates validating hands-on engineering experience and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {certificationsData.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

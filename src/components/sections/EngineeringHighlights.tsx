"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { StatCard } from "../ui/StatCard";
import { highlightsData } from "@/data/profile";

export const EngineeringHighlights = () => {
  return (
    <Section className="py-20 md:py-16 bg-background relative z-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <StatCard 
                stat={stat} 
                className="h-full bg-muted/20 backdrop-blur-md shadow-xl hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-accent" 
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

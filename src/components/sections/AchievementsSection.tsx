"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { achievementsData } from "@/data/achievements";
import { AchievementCard } from "../ui/AchievementCard";
import { motion } from "framer-motion";

export const AchievementsSection = () => {
  return (
    <Section id="achievements" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <Container className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Official Recognitions
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Major awards and achievements representing excellence in engineering, innovation, and technical hackathons.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

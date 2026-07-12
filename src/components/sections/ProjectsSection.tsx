"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  return (
    <Section id="projects" className="py-20 md:py-32 bg-muted/5 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Engineering case studies demonstrating real-world problem solving in industrial automation, embedded systems, and power distribution.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

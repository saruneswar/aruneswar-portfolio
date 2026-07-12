"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { seekingRoles, interestedIndustries } from "@/data/profile";
import * as Icons from "lucide-react";
import { Badge } from "../ui/Badge";

export const CurrentlySeeking = () => {
  return (
    <Section className="py-20 md:py-24 bg-muted/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Currently Seeking
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            I am actively seeking opportunities where I can contribute to real-world electrical engineering systems while continuously learning from industry experts.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
          {seekingRoles.map((role, index) => {
            // @ts-ignore
            const Icon = Icons[role.icon] || Icons.Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <div className="group h-full flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-muted-foreground/10 bg-muted/20 backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:border-accent hover:shadow-[0_4px_14px_rgba(37,99,235,0.08)] hover:-translate-y-1">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-muted/10 text-muted-foreground group-hover:bg-accent/5 group-hover:text-accent transition-colors duration-300 border border-transparent group-hover:border-accent/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                    {role.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interested Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Interested Industries</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interestedIndustries.map((industry, index) => (
              <Badge 
                key={index} 
                className="px-4 py-2 text-sm font-medium bg-muted/10 backdrop-blur-sm border border-[#374151] hover:border-accent hover:bg-accent/5 transition-colors text-muted-foreground hover:text-accent"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

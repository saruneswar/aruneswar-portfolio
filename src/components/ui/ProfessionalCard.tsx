"use client";

import { Profile } from "@/types";
import { MapPin, GraduationCap } from "lucide-react";
import { Card } from "./Card";
import { motion } from "framer-motion";

interface ProfessionalCardProps {
  profile: Profile;
}

export const ProfessionalCard = ({ profile }: ProfessionalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] p-6 md:p-8">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
              Professional Summary
            </h2>
            <p className="text-foreground/80 text-sm md:text-base mb-4 leading-relaxed">
              Final-year Electrical & Electronics Engineering student with hands-on experience in Industrial Automation, Electrical Panel Manufacturing, PLC-based Control Systems, and Smart Grid Technologies through academic projects and industry internships. Passionate about designing reliable electrical systems, industrial automation solutions, and next-generation power infrastructure.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {profile.university && (
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent/80" />
                  {profile.university}
                </span>
              )}
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent/80" />
                {profile.location}
              </span>
              <div className="flex items-center gap-4 mt-1">
                {profile.cgpa && <span className="font-semibold text-foreground/80">{profile.cgpa}</span>}
                {profile.expectedGraduation && <span className="font-semibold text-foreground/80">{profile.expectedGraduation}</span>}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

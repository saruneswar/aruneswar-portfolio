"use client";

import { Certificate } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { DocumentViewer } from "./DocumentViewer";

interface CertificationCardProps {
  certification: Certificate;
  index: number;
}

export const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  const [frame, setFrame] = useState("aspect-[4/3]");
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {certification.image && (
        <div className={`relative w-full ${frame} overflow-hidden border-b border-muted-foreground/20 bg-muted/30`}>
          <Image 
            src={certification.image} 
            alt={certification.title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.naturalHeight > target.naturalWidth) setFrame("aspect-[3/4]");
              else if (target.naturalHeight === target.naturalWidth) setFrame("aspect-square");
              else setFrame("aspect-video");
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="p-2.5 bg-background/50 backdrop-blur-md rounded-xl border border-white/5 text-muted-foreground group-hover:text-accent group-hover:border-white/10 group-hover:bg-accent/5 transition-all duration-300">
              <Award size={24} />
            </div>
            
            {certification.credentialUrl && (
              <div className="z-20">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-2 bg-background/60 backdrop-blur-md border-white/5 text-foreground hover:bg-transparent hover:border-white/10 hover:text-accent transition-colors shadow-sm"
                  onClick={() => setIsCertificateOpen(true)}
                >
                  <FileText size={16} />
                  <span className="font-semibold">View PDF</span>
                  <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between z-10">
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-3 leading-snug">
            {certification.title}
          </h3>
          
          <p className="text-base text-accent font-semibold mb-6">
            {certification.issuer}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mt-auto pt-5 border-t border-muted-foreground/20">
          <Calendar size={16} />
          <span>Issued: {certification.date}</span>
        </div>
      </div>
      
      {certification.credentialUrl && (
        <DocumentViewer 
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
          fileUrl={certification.credentialUrl}
          title={`${certification.title} Certificate`}
        />
      )}
    </motion.div>
  );
};

"use client";

import { Certificate } from "@/types";
import { Card } from "./Card";
import { Button } from "./Button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { DocumentViewer } from "./DocumentViewer";

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [frame, setFrame] = useState("aspect-[4/3]");
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  return (
    <Card className="flex flex-col overflow-hidden p-0 border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300">
      <div className={`relative ${frame} w-full bg-muted/30 border-b border-muted-foreground/20`}>
        {certificate.image ? (
          <Image 
            src={certificate.image} 
            alt={certificate.title} 
            fill 
            className="object-cover object-top transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.naturalHeight > target.naturalWidth) setFrame("aspect-[3/4]");
              else if (target.naturalHeight === target.naturalWidth) setFrame("aspect-square");
              else setFrame("aspect-video");
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Certificate Preview</div>
        )}
        {certificate.image && <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none" />}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight text-foreground">{certificate.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}</p>
        <p className="text-xs text-muted-foreground/70 mt-1">{certificate.date}</p>
        {certificate.credentialUrl && (
          <div className="mt-auto pt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full gap-2 text-xs" 
              onClick={() => setIsCertificateOpen(true)}
            >
              View Credential <ExternalLink size={12} />
            </Button>
          </div>
        )}
      </div>

      {certificate.credentialUrl && (
        <DocumentViewer 
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
          fileUrl={certificate.credentialUrl}
          title={`${certificate.title} Certificate`}
        />
      )}
    </Card>
  );
};

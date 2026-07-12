"use client";

import { Container } from "./Container";
import { profileData } from "@/data/profile";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <Container className="flex flex-col items-center justify-center text-center gap-6">
        
        {/* Main Copyright & Tech Stack */}
        <div className="space-y-2">
          <p className="text-muted-foreground font-medium">
            &copy; 2026 Aruneswar S. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/60 text-sm">
            Built with Next.js &bull; TypeScript &bull; Tailwind CSS
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a 
            href={profileData.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground/30">&bull;</span>
          <a 
            href={profileData.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground/30">&bull;</span>
          <a 
            href={`mailto:${profileData.email}`} 
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
};

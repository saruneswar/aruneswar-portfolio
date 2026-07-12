"use client";

import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Send,
  Check
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone.replace(/\s/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };
  return (
    <Section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Container className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Thank you for visiting my portfolio. If you'd like to discuss graduate engineering opportunities, technical projects, or professional collaborations, I'd be happy to connect.
            </p>

            <div className="h-px w-full bg-muted-foreground/20 mb-10"></div>

            <div className="flex flex-col gap-8 mb-10">
              {/* Email */}
              <div className="group flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-muted/10 flex items-center justify-center text-muted-foreground shrink-0 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-white/10 group-hover:text-accent group-hover:bg-accent/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground font-semibold text-lg">{profileData.email}</p>
                    <button 
                      onClick={handleCopyEmail}
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      aria-label="Copy Email address to clipboard"
                    >
                      {copiedEmail ? <Check size={16} className="text-[#22C55E]" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-muted/10 flex items-center justify-center text-muted-foreground shrink-0 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-white/10 group-hover:text-accent group-hover:bg-accent/5">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground font-semibold text-lg">{profileData.phone}</p>
                    <button 
                      onClick={handleCopyPhone}
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      aria-label="Copy Phone"
                    >
                      {copiedPhone ? <Check size={16} className="text-[#22C55E]" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-muted/10 flex items-center justify-center text-muted-foreground shrink-0 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-white/10 group-hover:text-accent group-hover:bg-accent/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                  <p className="text-foreground font-semibold text-lg">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-muted-foreground/20 mb-10"></div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground font-medium mb-4">Connect Online</p>
              <div className="flex items-center gap-4">
                <a 
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-14 w-14 rounded-full bg-muted/10 border border-muted-foreground/20 backdrop-blur-md flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/40 hover:shadow-[0_0_20px_rgba(0,119,181,0.15)] hover:scale-110 transition-all duration-300"
                  title="LinkedIn"
                  aria-label="Visit LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                <a 
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-14 w-14 rounded-full bg-muted/10 border border-muted-foreground/20 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:scale-110 transition-all duration-300"
                  title="GitHub"
                  aria-label="Visit GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col pt-4 lg:pt-0"
          >
            <div className="flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-muted/10 border border-white/5 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.1)] hover:border-white/10 transition-all duration-300 relative overflow-hidden">
              
              {/* Subtle accent glow in corner */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-[60px] pointer-events-none"></div>
              
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-6 relative z-10">
                Let's Connect
              </h3>
              
              <p className="text-foreground/90 font-medium text-lg mb-6 relative z-10">
                I am interested in opportunities involving:
              </p>
              
              <div className="flex flex-col gap-5 mb-10 relative z-10">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(37,99,235,0.18)]"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-base">Graduate Engineer Trainee (GET) Roles</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(37,99,235,0.18)]"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-base">Industrial Automation</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(37,99,235,0.18)]"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-base">Power Systems</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(37,99,235,0.18)]"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-base">Smart Grid Technologies</span>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <a 
                  href={`mailto:${profileData.email}`}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#2563EB] hover:bg-[#3B82F6] text-primary-foreground rounded-2xl font-bold tracking-wide transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 text-lg group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                  <Send size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </Container>
    </Section>
  );
};

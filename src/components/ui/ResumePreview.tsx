"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { resumeData } from "@/data/resume";
import { useEffect, useRef, useState } from "react";
import { DocumentViewer } from "./DocumentViewer";

export const ResumePreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    let isMounted = true;

    const renderPdf = async () => {
      try {
        if (!(window as any).pdfjsLib) {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
          document.head.appendChild(script);
          
          await new Promise((resolve) => {
            script.onload = resolve;
          });
          
          (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        }
        
        const pdfjsLib = (window as any).pdfjsLib;
        const loadingTask = pdfjsLib.getDocument(resumeData.pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        
        // Use a high scale for sharp rendering on retina displays
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = canvasRef.current;
        if (!canvas || !isMounted) return;
        
        const context = canvas.getContext("2d");
        if (!context) return;
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        
        await page.render(renderContext).promise;
        if (isMounted) setIsLoading(false);
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    };
    
    renderPdf();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      {/* Left side - Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-muted/10 flex items-center justify-center text-muted-foreground border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <FileText size={28} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Professional Resume</h3>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {resumeData.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {resumeData.statistics.map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl border border-white/5 bg-muted/10 backdrop-blur-lg flex flex-col justify-center items-center text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300">
              <span className="text-3xl font-bold text-accent mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          
          <a href={resumeData.pdfUrl} download="Aruneswar_S_Resume.pdf">
            <Button variant="outline" className="gap-2 px-6 h-12 bg-transparent border-white/5 text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-transparent hover:border-white/10 hover:text-accent transition-all duration-300">
              <Download size={18} />
              <span className="font-semibold tracking-wide">Download PDF</span>
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Right side - PDF Preview */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <div 
          className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-white border border-black/5 dark:border-white/5 shadow-[0_2px_15px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] group hover:shadow-[0_8px_25px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10">
              <div className="w-6 h-6 border-3 border-muted-foreground/20 border-t-muted-foreground rounded-full animate-spin mb-3"></div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Loading</p>
            </div>
          )}
          {/* Dynamically generated PDF preview on a canvas */}
          <canvas 
            ref={canvasRef}
            className={`w-full h-auto relative z-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] z-20">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md text-white mb-3 shadow-lg">
              <Search size={24} />
            </div>
            <p className="text-white font-medium tracking-wide shadow-sm">Click to Enlarge</p>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <DocumentViewer 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fileUrl={resumeData.pdfUrl}
        title="Resume Fullscreen"
      />
    </div>
  );
};

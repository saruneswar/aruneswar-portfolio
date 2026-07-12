"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface DocumentViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  title?: string;
}

export const DocumentViewer = ({ isOpen, onClose, fileUrl, title = "Document Viewer" }: DocumentViewerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    const handlePopState = () => {
      if (isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      
      // Push state to intercept Android back button
      window.history.pushState({ modal: 'document-viewer' }, '');
      window.addEventListener("popstate", handlePopState);
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      
      if (isOpen) {
        window.removeEventListener("popstate", handlePopState);
        // If modal closes by other means (X button, backdrop click), clean up the history stack
        if (window.history.state && window.history.state.modal === 'document-viewer') {
          window.history.back();
        }
      }
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  const isPdf = fileUrl.toLowerCase().endsWith('.pdf');

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-0 md:p-8 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          onClick={onClose}
        >
          {/* Header Actions */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-3 z-[10000]">
            <a 
              href={fileUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 backdrop-blur-md transition-all duration-200"
              title="Open in new tab"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href={fileUrl} 
              download
              className="flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 backdrop-blur-md transition-all duration-200"
              title="Download Document"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={20} />
            </a>
            <button 
              className="flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 backdrop-blur-md transition-all duration-200 ml-1 md:ml-2"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full md:max-w-5xl md:h-[85vh] md:rounded-2xl overflow-hidden bg-white md:shadow-2xl flex flex-col pt-20 md:pt-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Viewer - EXACTLY Unchanged layout-wise, but using iframe */}
            <div className="hidden md:flex w-full h-full flex-1 bg-zinc-100">
              <iframe 
                src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full border-none"
                title={title}
              />
            </div>

            {/* Mobile Viewer */}
            <div className="flex md:hidden w-full h-full flex-1 bg-zinc-100/50">
              {isPdf ? (
                <object 
                  data={`${fileUrl}#view=FitH`} 
                  type="application/pdf" 
                  className="w-full h-full"
                >
                  {/* Fallback when PDF cannot be rendered natively */}
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white rounded-t-3xl">
                    <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mb-6">
                      <FileText size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Preview Unavailable</h3>
                    <p className="text-sm text-muted-foreground mb-8 max-w-[280px] leading-relaxed">
                      Your mobile browser doesn't support viewing PDFs directly inside the app.
                    </p>
                    <div className="flex flex-col w-full gap-3 max-w-[280px]">
                      <a 
                        href={fileUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-xl font-medium text-sm transition-transform active:scale-95 shadow-lg"
                      >
                        <ExternalLink size={18} />
                        Open in Browser
                      </a>
                      <a 
                        href={fileUrl} 
                        download
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-muted/30 text-foreground border border-muted-foreground/20 rounded-xl font-medium text-sm transition-transform active:scale-95"
                      >
                        <Download size={18} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </object>
              ) : (
                <div className="w-full h-full overflow-auto touch-pan-x touch-pan-y flex items-center justify-center p-4 bg-black/5 rounded-t-3xl">
                  <img 
                    src={fileUrl} 
                    alt={title} 
                    className="max-w-full h-auto object-contain shadow-sm rounded-md"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

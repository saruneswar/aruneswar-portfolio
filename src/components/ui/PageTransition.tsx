"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isProjectPage = pathname.startsWith("/projects/");
  
  // Track scroll positions for specific paths to fix mode="wait" scroll jumps
  const scrollPositions = useRef<{ [key: string]: number }>({});
  // Track path history to know which case study we came from
  const pathHistory = useRef<string[]>([pathname]);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    
    // Update path history
    if (pathHistory.current[pathHistory.current.length - 1] !== pathname) {
      pathHistory.current = [...pathHistory.current, pathname].slice(-2);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleExitComplete = () => {
    // Forward Navigation: Always start at the top of the Case Study
    if (pathname.startsWith("/projects/")) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // Back Navigation: Restore previous scroll position on Home page
    const savedScroll = scrollPositions.current[pathname];
    const previousPath = pathHistory.current[0];

    // If we came back from a specific project, scroll exactly to that card
    if (pathname === "/" && previousPath?.startsWith("/projects/")) {
      const slug = previousPath.split("/projects/")[1];
      
      // First, instantly restore to the approximate saved general position to avoid flashing the top of the page
      if (savedScroll !== undefined) {
        window.scrollTo({ top: savedScroll, behavior: "instant" });
      }

      // Then smoothly scroll directly to the exact Project Card
      setTimeout(() => {
        const projectCard = document.getElementById(`project-${slug}`);
        if (projectCard) {
          const rect = projectCard.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          // Position it 25% from the top of the viewport
          const targetY = rect.top + scrollTop - (window.innerHeight * 0.25);
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }, 50);
      return;
    }

    // Standard Fallback: Restore previous scroll position
    if (savedScroll !== undefined) {
      setTimeout(() => {
        window.scrollTo({ top: savedScroll, behavior: "instant" });
      }, 10);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div
        key={pathname}
        initial={
          isProjectPage 
            ? { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 30 } 
            : { opacity: 0 }
        }
        animate={
          isProjectPage 
            ? { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" }
              } 
            : { 
                opacity: 1,
                transition: { duration: 0.2, ease: "easeOut" }
              }
        }
        exit={
          isProjectPage 
            ? { 
                opacity: 0, 
                scale: shouldReduceMotion ? 1 : 1.02, 
                y: shouldReduceMotion ? 0 : -20,
                transition: { duration: 0.45, ease: "easeOut" }
              } 
            : { 
                opacity: 0,
                transition: { duration: 0.2, ease: "easeOut" }
              }
        }
        className="flex-1 flex flex-col w-full"
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

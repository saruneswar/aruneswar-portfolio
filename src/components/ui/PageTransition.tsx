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

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
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

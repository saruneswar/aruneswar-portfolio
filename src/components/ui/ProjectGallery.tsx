"use client";

import { motion } from "framer-motion";

// Extracted true intrinsic aspect ratios (naturalWidth / naturalHeight)
const ASPECT_RATIOS: Record<string, number> = {
  '/images/projects/Prosthetic_Arm/1.jpg.jpeg': 1.333,
  '/images/projects/Prosthetic_Arm/2.jpg.jpeg': 0.478,
  '/images/projects/Prosthetic_Arm/3.jpg.jpeg': 0.75,
  '/images/projects/Prosthetic_Arm/4.jpg.jpeg': 1.333,
  '/images/projects/Prosthetic_Arm/5.jpg.jpeg': 1.777,
  '/images/projects/Power_Line_Fault_Detection/1.jpg.jpeg': 0.562,
  '/images/projects/Power_Line_Fault_Detection/2.jpg.jpeg': 1.5,
  '/images/projects/Power_Line_Fault_Detection/3.jpg.jpeg': 1.333,
};

interface ProjectGalleryProps {
  images: string[] | undefined;
}

import { PremiumGallery } from "./PremiumGallery";

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="my-10 w-[92%] md:w-[85%] mx-auto block lg:hidden">
        <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Project Gallery</h3>
        <PremiumGallery images={images} />
      </div>
      <div className="hidden lg:block w-full">
        <DesktopGallery images={images} />
      </div>
    </>
  );
};

const DesktopGallery = ({ images }: { images: string[] }) => {
  // Detect 5-image bespoke editorial layout (e.g., Prosthetic Arm: 3 Landscapes, 2 Portraits)
  if (images.length === 5) {
    const r0 = ASPECT_RATIOS[images[0]] || 1.333; // Hero (Prototype)
    const r1 = ASPECT_RATIOS[images[1]] || 1.777; // Testing (Landscape)
    const r2 = ASPECT_RATIOS[images[2]] || 1.333; // Team (Landscape)
    const r3 = ASPECT_RATIOS[images[3]] || 0.478; // Newspaper (Portrait)
    const r4 = ASPECT_RATIOS[images[4]] || 0.75;  // Award (Portrait)

    // Ensure the pattern matches L, L, L, P, P
    if (r0 >= 1 && r1 >= 1 && r2 >= 1 && r3 < 1 && r4 < 1) {
      
      // User request: Remove the first image and perfectly rebalance the remaining 4 images.
      // We create a striking 2-row layout. Top row: Landscapes. Bottom row: Massive Portraits.
      
      return (
        <div className="my-20 w-[92%] md:w-[80%] mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center">Project Gallery</h3>
          
          <div className="flex flex-col gap-4 lg:gap-6">
            
            {/* ROW 1: Landscapes (Testing & Team) */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 w-full">
              {/* Testing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ flexGrow: r1 * 100, aspectRatio: r1 }}
                className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group w-full basis-auto md:basis-0"
              >
                {images[1].endsWith('.mp4') ? (
                  <video src={images[1]} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                ) : (
                  <img src={images[1]} alt="Testing" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
              </motion.div>

              {/* Team / SIH */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ flexGrow: r2 * 100, aspectRatio: r2 }}
                className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group w-full basis-auto md:basis-0"
              >
                {images[2].endsWith('.mp4') ? (
                  <video src={images[2]} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                ) : (
                  <img src={images[2]} alt="Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
              </motion.div>
            </div>

            {/* ROW 2: Portraits (Newspaper & Award) */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 w-full">
              {/* Newspaper Clipping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ flexGrow: r3 * 100, aspectRatio: r3 }}
                className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group w-full basis-auto md:basis-0"
              >
                {images[3].endsWith('.mp4') ? (
                  <video src={images[3]} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                ) : (
                  <img src={images[3]} alt="Newspaper Feature" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
              </motion.div>

              {/* Award Presentation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ flexGrow: r4 * 100, aspectRatio: r4 }}
                className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group w-full basis-auto md:basis-0"
              >
                {images[4].endsWith('.mp4') ? (
                  <video src={images[4]} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                ) : (
                  <img src={images[4]} alt="Award Presentation" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
              </motion.div>
            </div>
            
          </div>
        </div>
      );
    }
  }

  const heroImage = images[0];
  const supportImages = images.slice(1);

  return (
    <div className="my-20 w-[92%] md:w-[80%] mx-auto">
      <h3 className="text-2xl font-bold text-foreground mb-10 text-center">Project Gallery</h3>
      
      <div className="flex flex-col gap-4 lg:gap-6">
        
        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group mx-auto w-fit max-w-full"
        >
          {heroImage.endsWith('.mp4') ? (
            <video
              src={heroImage}
              autoPlay
              muted
              loop
              playsInline
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
            />
          ) : (
            <img
              src={heroImage}
              alt="Project Hero"
              loading="lazy"
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
        </motion.div>

        {/* SUPPORT IMAGES (JUSTIFIED EDITORIAL GALLERY) */}
        {supportImages.length > 0 && (
          <div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-6">
            {supportImages.map((img, i) => {
              // Get the exact intrinsic aspect ratio or default to standard landscape
              const ratio = ASPECT_RATIOS[img] || 1.333;
              
              // Base height target for the row
              const targetHeight = 280; 
              const flexBasis = ratio * targetHeight;
              
              // Caps to prevent single-image rows from blowing up
              const maxMultiplier = 1.4;
              const maxHeight = targetHeight * maxMultiplier;
              const maxWidth = flexBasis * maxMultiplier;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    flexGrow: ratio * 100, 
                    flexBasis: `${flexBasis}px`,
                    aspectRatio: ratio,
                    maxHeight: `${maxHeight}px`,
                    maxWidth: `${maxWidth}px`
                  }}
                  className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group"
                >
                  {img.endsWith('.mp4') ? (
                    <video
                      src={img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={img}
                      alt={`Gallery Image ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

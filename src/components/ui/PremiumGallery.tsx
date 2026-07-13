"use client";

import { motion } from "framer-motion";

interface PremiumGalleryProps {
  images: string[] | undefined;
}

export const PremiumGallery = ({ images }: PremiumGalleryProps) => {
  if (!images || images.length === 0) return null;

  const renderItem = (src: string, index: number) => {
    const isVideo = src.endsWith('.mp4');
    return (
      <motion.div
        key={`${src}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        className="relative rounded-2xl overflow-hidden border border-white/5 bg-muted/10 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.08)] hover:border-white/10 transition-all duration-300 group w-full"
      >
        {isVideo ? (
          <video 
            src={src} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700" 
          />
        ) : (
          <img 
            src={src} 
            alt={`Gallery Image ${index + 1}`} 
            loading="lazy" 
            className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700" 
          />
        )}
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none rounded-2xl" />
      </motion.div>
    );
  };

  return (
    <div className="w-full block lg:hidden my-8">
      {/* Mobile Grid (2 columns) */}
      <div className="grid md:hidden grid-cols-2 gap-3 items-start">
        {images.map((src, i) => renderItem(src, i))}
      </div>

      {/* Tablet Grid (3 columns) */}
      <div className="hidden md:grid grid-cols-3 gap-4 items-start">
        {images.map((src, i) => renderItem(src, i))}
      </div>
    </div>
  );
};

export const TechnologyBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-muted/20 border border-white/5 text-foreground/90 hover:bg-transparent hover:border-white/10 hover:text-accent transition-colors cursor-default shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      {tech}
    </span>
  );
};

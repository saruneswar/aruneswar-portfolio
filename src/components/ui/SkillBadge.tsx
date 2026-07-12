"use client";

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const isLearning = skill.includes("(Learning)");
  const isBasic = skill.includes("(Basic)");
  const displaySkill = skill.replace(" (Learning)", "").replace(" (Basic)", "");

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border backdrop-blur-sm transition-colors cursor-default
      ${isLearning ? 
        'bg-muted/10 border-white/5 text-muted-foreground hover:border-white/10 hover:text-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]' : 
        'bg-muted/20 border-white/5 text-foreground/90 hover:bg-transparent hover:border-white/10 hover:text-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
      }`}>
      {displaySkill}
      {isLearning && <span className="ml-2 text-[10px] uppercase tracking-wider font-bold text-accent/80 border border-accent rounded px-1.5 py-0.5">Learning</span>}
      {isBasic && <span className="ml-2 text-[10px] uppercase tracking-wider font-bold text-muted-foreground/80 border border-muted-foreground/30 rounded px-1.5 py-0.5">Basic</span>}
    </span>
  );
};

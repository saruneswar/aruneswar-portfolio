import { CheckCircle2, ChevronRight } from "lucide-react";

interface ProjectTimelineProps {
  title: string;
  items: string[] | undefined;
  type?: "check" | "chevron";
}

export const ProjectTimeline = ({ title, items, type = "check" }: ProjectTimelineProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-foreground mb-8">{title}</h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-muted/5 border border-white/5 hover:border-white/10 hover:bg-accent/5 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            {type === "check" ? (
              <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-0.5" />
            ) : (
              <ChevronRight size={24} className="text-accent flex-shrink-0 mt-0.5" />
            )}
            <p className="text-muted-foreground leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

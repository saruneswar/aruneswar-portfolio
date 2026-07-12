interface SpecificationTableProps {
  title: string;
  items: string[] | undefined;
}

export const SpecificationTable = ({ title, items }: SpecificationTableProps) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
        {title}
        <div className="h-px bg-muted-foreground/20 flex-1"></div>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/10 border border-white/5 hover:border-white/10 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_8px_rgba(37,99,235,0.18)] flex-shrink-0"></span>
            <span className="text-muted-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

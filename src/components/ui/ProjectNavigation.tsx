import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export const ProjectNavigation = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 mb-10 pt-10 border-t border-muted-foreground/20">
      <Link 
        href="/#projects" 
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold uppercase tracking-wider text-sm bg-[#2563EB] hover:bg-[#3B82F6] text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <LayoutGrid size={18} />
        Back to Portfolio
      </Link>
    </div>
  );
};

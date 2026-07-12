import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectHero } from "@/components/ui/ProjectHero";
import { ProjectTimeline } from "@/components/ui/ProjectTimeline";
import { SpecificationTable } from "@/components/ui/SpecificationTable";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { ProjectNavigation } from "@/components/ui/ProjectNavigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  const title = `${project.title} | Aruneswar S`;
  const description = project.shortDescription;
  const imageUrl = project.coverImage || (project.gallery && project.gallery.length > 0 ? project.gallery[0] : "");
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/projects/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <ProjectHero project={project} />

      <div className="container mx-auto px-6 max-w-4xl py-20 md:py-32">
        
        {project.problemStatement && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Problem Statement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.problemStatement}</p>
          </div>
        )}

        {project.workingPrinciple && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">System Architecture & Working Principle</h2>
            {project.systemArchitecture && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.systemArchitecture}</p>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">{project.workingPrinciple}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <SpecificationTable title="Hardware Used" items={project.hardwareUsed} />
          <SpecificationTable title="Software Used" items={project.softwareUsed} />
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <TechnologyBadge key={i} tech={tech} />
            ))}
          </div>
        </div>

        <ProjectGallery images={project.gallery} />
        
        <VideoPlayer src={project.demoVideo} />

        <ProjectTimeline title="Project Objectives" items={project.objectives} type="chevron" />
        
        <ProjectTimeline title="Engineering Challenges" items={project.engineeringChallenges} type="chevron" />
        
        <ProjectTimeline title="Solutions Implemented" items={project.solutionsImplemented} type="check" />
        
        <ProjectTimeline title="Results & Impact" items={project.resultsAndImpact} type="check" />
        
        <ProjectTimeline title="Key Learnings" items={project.keyLearnings} type="check" />
        
        <ProjectNavigation />
      </div>
    </main>
  );
}

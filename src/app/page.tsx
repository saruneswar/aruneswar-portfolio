import { Hero } from "@/components/sections/Hero";
import { EngineeringHighlights } from "@/components/sections/EngineeringHighlights";
import { CurrentlySeeking } from "@/components/sections/CurrentlySeeking";
import { ProfessionalProfile } from "@/components/sections/ProfessionalProfile";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <EngineeringHighlights />
      <CurrentlySeeking />
      <ProfessionalProfile />
      <ProfessionalExperience />
      <TechnicalSkills />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

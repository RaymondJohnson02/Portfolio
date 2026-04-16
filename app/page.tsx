import { ExperienceSection } from "@/components/Experience/ExperienceSection";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ContactSection } from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

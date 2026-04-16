import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/Experience/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";
import {
  experience,
  hero,
  projects,
  skills,
  social,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <SiteHeader hero={hero} />
      <main>
        <HeroSection content={hero} />
        <ExperienceSection items={experience} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection links={social} />
      </main>
    </>
  );
}

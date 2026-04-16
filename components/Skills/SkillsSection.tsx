import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const skills: readonly string[] = [
  "Python",
  "Go",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Distributed systems",
  "System design",
  "CI/CD",
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-zinc-800 py-16 sm:py-20">
      <Container>
        <SectionHeading>Skills &amp; technologies</SectionHeading>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex rounded-md border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}


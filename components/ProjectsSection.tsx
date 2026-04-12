import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { ProjectItem } from "@/lib/site-content";

function ProjectCard({ project }: { project: ProjectItem }) {
  const inner = (
    <>
      <span className="mb-3 inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
        {project.kind}
      </span>
      <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <p className="mt-4 text-xs text-zinc-500">{project.stack}</p>
    </>
  );

  const className =
    "flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

export function ProjectsSection({ projects }: { projects: readonly ProjectItem[] }) {
  return (
    <section id="projects" className="border-b border-zinc-800 py-16 sm:py-20">
      <Container>
        <SectionHeading>Projects</SectionHeading>
        <p className="-mt-4 mb-8 max-w-2xl text-sm text-zinc-500">
          Selected work—impact first, stack second.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

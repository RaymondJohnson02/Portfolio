import { Container } from "@/components/Container";
import type { ExperienceItem } from "@/lib/site-content";

export function ExperienceSection({
  items,
}: {
  items: readonly ExperienceItem[];
}) {
  return (
    <section
      id="experience"
      className="border-b border-zinc-800 bg-zinc-950 py-20 sm:py-24"
    >
      <Container>
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </h2>
          <p className="text-sm leading-relaxed text-zinc-500">
            Roles and impact—details live in my CV; this is the short version for a
            quick scan.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/25 p-6 sm:p-8 lg:p-10">
          <div className="divide-y divide-zinc-800">
            {items.map((job) => (
              <article
                key={`${job.company}-${job.dates}`}
                className="grid grid-cols-1 gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-12 lg:py-12"
              >
                <div className="lg:border-r lg:border-zinc-800 lg:pr-8">
                  <p className="text-sm tabular-nums text-zinc-500">{job.dates}</p>
                  <p className="mt-3 text-base font-medium text-zinc-200">
                    {job.company}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{job.employment}</p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                    {job.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {job.summary}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400">
                    {job.highlights.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-zinc-600"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/Container";
import { CompanyLogo } from "./CompanyLogo";
import { SectionHeading } from "../SectionHeading";

interface ExperienceItem {
  title: string;
  company: string;
  /** Optional link to the company page (website, LinkedIn, etc). */
  companyHref?: string;
  employment: string;
  dates: string;
  highlights: readonly string[];
  /** Square logo under `public/`, e.g. `/logos/company.png`. Omit or null if not set. */
  logoSrc?: string | null;
  logoAlt?: string;
  /** Present role — accent styling and “Current” badge. */
  current?: boolean;
}

function ExperienceCard({ job }: { job: ExperienceItem }) {
  const isCurrent = job.current === true;

  return (
    <article
      className={[
        "grid grid-cols-1 gap-8 rounded-xl border p-6 transition-colors sm:p-8 lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-12",
        isCurrent
          ? "border-accent/35 bg-[linear-gradient(145deg,rgba(59,130,246,0.14)_0%,rgba(59,130,246,0.04)_42%,rgba(24,24,27,0.4)_70%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-accent/45 hover:bg-zinc-900/55"
          : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60",
      ].join(" ")}
    >
      <div className="lg:border-r lg:border-zinc-800 lg:pr-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4 lg:flex-col">
          {job.logoSrc ? (
            <CompanyLogo
              src={job.logoSrc}
              alt={job.logoAlt ?? `${job.company} logo`}
              href={job.companyHref}
            />
          ) : null}
          <div className="min-w-0">
            <p className="text-sm tabular-nums text-zinc-500">{job.dates}</p>
            <p className="mt-3 text-base font-medium text-zinc-200">
              {job.company}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{job.employment}</p>
          </div>
        </div>
      </div>
      <div className="min-w-0">
        {isCurrent ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="m-0 min-w-0 flex-1 text-xl font-semibold leading-snug tracking-tight text-zinc-50">
              {job.title}
            </h3>
            <span className="inline-flex shrink-0 items-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-sm font-semibold leading-none text-accent">
              Current
            </span>
          </div>
        ) : (
          <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
            {job.title}
          </h3>
        )}
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400">
          {job.highlights.map((line) => (
            <li key={line} className="flex gap-3">
              <span
                className={
                  isCurrent
                    ? "mt-2 size-1 shrink-0 rounded-full bg-accent/75"
                    : "mt-2 size-1 shrink-0 rounded-full bg-zinc-600"
                }
                aria-hidden
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const items: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Accelist Lentera Indonesia",
      employment: "Full-time",
      dates: "Oct 2024 — Present",
      current: true,
      logoSrc: "/photos/logo-accelist.jpg",
      companyHref: "https://accelist.com/",
      highlights: [
        "Develop and maintain enterprise-grade web applications for Toyota Astra Motor (TAM) using .NET 8 and Next.js (TypeScript)",
        "Design and implement backend APIs and frontend features for high-volume customer complaint management systems",
        "Build and manage background processing jobs using Hangfire to automate scheduled tasks and system workflows",
        "Implement data tokenization and detokenization to secure sensitive customer information across enterprise systems",
        "Write and maintain unit tests to improve API reliability and ensure system stability in production environments",
      ],
    },
    {
      title: "Application Developer Intern",
      company: "Freeport Indonesia",
      employment: "Full-time",
      dates: "Feb 2023 — Feb 2024",
      logoSrc: "/photos/logo-freeport.jpg",
      companyHref: "https://ptfi.co.id/",
      highlights: [
        "Collaborated with a team of developers to deliver internal applications using ASP.NET, SQL Server, and modern web technologies",
        "Contributed to systems built on microservices architecture to support internal business operations",
        "Performed testing, debugging, and validation to ensure stable production releases",
        "Utilized Azure DevOps for CI/CD pipelines, pull requests, and code reviews",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="border-b border-zinc-800 bg-zinc-950 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading>Experience</SectionHeading>

        <div className="flex flex-col gap-6">
          {items.map((job) => (
            <ExperienceCard key={`${job.company}-${job.dates}`} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

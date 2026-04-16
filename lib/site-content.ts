export const siteMeta = {
  title: "Raymond — Software Engineer",
  description:
    "Backend and infrastructure engineer. Portfolio, projects, and contact.",
} as const;

export type ProjectKind = "Open source" | "Work project" | "Side project";

export interface HeroContent {
  displayName: string;
  eyebrow: string;
  headline: string;
  subline: string;
  intro: string;
  cvHref: string | null;
  /** Image under `public/`, e.g. `/photos/profile.jpg`. Omit or null until you add the file. */
  photoSrc: string | null;
  /** Accessible label; defaults to “Photo of {displayName}” in the UI when omitted. */
  photoAlt?: string;
}

export interface ProjectItem {
  kind: ProjectKind;
  title: string;
  description: string;
  stack: string;
  href?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  /** Optional link to the company page (website, LinkedIn, etc). */
  companyHref?: string;
  employment: string;
  dates: string;
  summary: string;
  highlights: readonly string[];
  /** Square logo under `public/`, e.g. `/logos/company.png`. Omit or null if not set. */
  logoSrc?: string | null;
  logoAlt?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export const hero: HeroContent = {
  displayName: "Raymond Johnson",
  eyebrow: "Software Engineer · Jakarta, Indonesia",
  headline: "About Me",
  subline: "",
  intro:
    'I am a <span class="font-medium text-zinc-200">Software engineer</span> with almost <span class="font-medium text-zinc-200">3 years of experiences</span> building and maintaining applications using <span class="font-medium text-zinc-200">.NET</span>, <span class="font-medium text-zinc-200">SQL Server</span>, and <span class="font-medium text-zinc-200">PostgreSQL</span>. Focused on <span class="font-medium text-zinc-200">backend development</span> with an interest in <span class="font-medium text-zinc-200">system design</span> and <span class="font-medium text-zinc-200">performance optimization</span>, while also working with modern frontend tools like <span class="font-medium text-zinc-200">Next.js</span> and <span class="font-medium text-zinc-200">TypeScript</span>.',
  cvHref: "/cv.pdf",
  photoSrc: null,
  // photoSrc: "/photos/profile.jpg",
};

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
];

export const projects: readonly ProjectItem[] = [
  {
    kind: "Open source",
    title: "Rate limiter library",
    description:
      "Migrated legacy monolith rate limiting to a shared library, reducing p99 latency by 40%.",
    stack: "Go · Redis · Docker",
    href: "https://github.com",
  },
  {
    kind: "Work project",
    title: "Event pipeline hardening",
    description:
      "Improved delivery guarantees and observability for high-volume Kafka consumers.",
    stack: "Kafka · Kubernetes · AWS",
  },
  {
    kind: "Side project",
    title: "API contract testing toolkit",
    description:
      "Lightweight TypeScript tooling to keep service contracts aligned across teams.",
    stack: "TypeScript · gRPC · CI/CD",
    href: "https://github.com",
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Accelist Lentera Indonesia",
    employment: "Full-time",
    dates: "Oct 2024 — Present",
    logoSrc: "/photos/logo-accelist.jpg",
    companyHref: "https://accelist.com/",
    summary:
      "Own critical paths in core commerce and platform services—scaling for traffic spikes, tightening SLOs, and reducing operational toil.",
    highlights: [
      "Led migration of a legacy monolith subsystem to independently deployable services; cut p99 latency ~40% on hot paths.",
      "Introduced standardized observability (tracing, SLO dashboards) across teams, shortening MTTR for production incidents.",
      "Partnered with infra on capacity and rollout strategy for peak events; zero customer-facing outages during major sales.",
    ],
  },
  {
    title: "Application Developer Intern",
    company: "Freeport Indonesia",
    employment: "Full-time",
    dates: "Feb 2023 — Feb 2024",
    logoSrc: "/photos/logo-freeport.jpg",
    companyHref: "https://ptfi.co.id/",
    summary:
      "Built and maintained backend APIs and data pipelines for internal platforms used across the organization.",
    highlights: [
      "Designed PostgreSQL schemas and migration plans for zero-downtime deploys on high-write tables.",
      "Implemented async workers and dead-letter handling to make Kafka-based workflows safe under retries.",
      "Owned on-call rotation; drove postmortems and follow-up fixes that reduced repeat incidents.",
    ],
  },
];

export const social: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    external: false,
  },
];

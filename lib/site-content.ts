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
  employment: string;
  dates: string;
  summary: string;
  highlights: readonly string[];
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export const hero: HeroContent = {
  displayName: "Raymond Johnson",
  eyebrow: "SOFTWARE ENGINEER · JAKARTA, Indonesia",
  headline: "5 years building systems that scale.",
  subline: "Backend · Frontend · Distributed systems",
  intro:
    "I've spent the last several years on high-traffic backend systems—reliability, performance, and operability first. Currently open to full-time opportunities at product companies.",
  cvHref: "/cv.pdf",
};

export const skills: readonly string[] = [
  "Python",
  "Go",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Kubernetes",
  "Docker",
  "AWS",
  "gRPC",
  "Kafka",
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
    dates: "2022 — Present",
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

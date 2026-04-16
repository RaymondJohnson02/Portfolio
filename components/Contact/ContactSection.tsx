import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

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
] as const;

export function ContactSection() {
  return (
    <footer id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading>Get in touch</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-600 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}


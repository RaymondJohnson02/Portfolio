import { Container } from "@/components/Container";
import type { HeroContent } from "@/lib/site-content";

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="border-b border-zinc-800 py-16 sm:py-20"
    >
      <Container>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {content.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl"
        >
          {content.headline}
        </h1>
        <p className="mt-4 text-lg text-zinc-400">{content.subline}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
          {content.intro}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          {content.cvHref ? (
            <a
              href={content.cvHref}
              download
              className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-600 px-5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download CV
            </a>
          ) : null}
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-600 px-5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in touch
          </a>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/Container";

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

export const hero: HeroContent = {
  displayName: "Raymond Johnson",
  headline: "About Me",
  eyebrow: "Software Engineer · Jakarta, Indonesia",
  subline: "",
  intro:
    'I am a <span class="font-medium text-zinc-200">Software engineer</span> with almost <span class="font-medium text-zinc-200">3 years of experiences</span> building and maintaining applications using <span class="font-medium text-zinc-200">.NET</span>, <span class="font-medium text-zinc-200">SQL Server</span>, and <span class="font-medium text-zinc-200">PostgreSQL</span>. Focused on <span class="font-medium text-zinc-200">backend development</span> with an interest in <span class="font-medium text-zinc-200">system design</span> and <span class="font-medium text-zinc-200">performance optimization</span>, while also working with modern frontend tools like <span class="font-medium text-zinc-200">Next.js</span> and <span class="font-medium text-zinc-200">TypeScript</span>.',
  cvHref: "/CV.pdf",
  photoSrc: null,
  // photoSrc: "/photos/profile.jpg",
};

export function HeroSection() {
  const content = hero;
  const photoAlt = content.photoAlt ?? `Photo of ${content.displayName}`;
  const hasPhoto = Boolean(content.photoSrc);

  return (
    <section id="about" className="border-b border-zinc-800 py-16 sm:py-20">
      <Container>
        <div
          className={
            hasPhoto
              ? "grid grid-cols-1 gap-y-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-x-12 lg:gap-y-4 xl:gap-x-16"
              : "flex flex-col gap-4"
          }
        >
          <h1
            className={`text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl ${
              hasPhoto ? "row-start-2 lg:col-start-1" : ""
            }`}
          >
            {content.headline}
          </h1>
          <p
            className={`text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 ${
              hasPhoto ? "row-start-1 lg:col-start-1" : ""
            }`}
          >
            {content.eyebrow}
          </p>
          {hasPhoto && content.photoSrc ? (
            <figure className="relative row-start-4 aspect-[4/5] w-full max-w-[260px] justify-self-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:max-w-none lg:justify-self-end">
              <Image
                src={content.photoSrc}
                alt={photoAlt}
                fill
                sizes="(max-width: 1024px) 280px, 280px"
                className="object-cover"
                priority
              />
            </figure>
          ) : null}

          <p
            className={`max-w-2xl pt-2 text-base leading-relaxed text-zinc-400 ${
              hasPhoto ? "row-start-5 lg:col-start-1 lg:row-start-4 lg:pt-0" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: content.intro }}
          />
          <div
            className={`flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 ${
              hasPhoto ? "row-start-6 lg:col-start-1 lg:row-start-5 lg:pt-0" : ""
            }`}
          >
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
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


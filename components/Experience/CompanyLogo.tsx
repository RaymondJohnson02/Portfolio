import Image from "next/image";

export function CompanyLogo({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href?: string;
}) {
  const content = (
    <div className="relative size-24 shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="96px"
        className="object-contain"
      />
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={alt}
      className="inline-flex rounded-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {content}
    </a>
  );
}

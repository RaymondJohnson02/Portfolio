export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </p>
  );
}

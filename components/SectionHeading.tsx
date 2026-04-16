export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-3xl font-bold tracking-tight text-zinc-50 mb-5 sm:text-3xl">
        {children}
      </p>
    </div>
  );
}

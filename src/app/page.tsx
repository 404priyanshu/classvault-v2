const pillars = [
  "Rated notes",
  "University communities",
  "Live study rooms",
  "Personalized roadmaps",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-20 sm:px-10">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-zinc-500">
            ClassVault
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
            Study platform foundation ready.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js App Router is set up for ClassVault with TypeScript,
            Tailwind CSS, and ESLint.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

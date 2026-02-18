const LINKEDIN = "https://www.linkedin.com/in/brianmuhic/";
const GITHUB = "https://github.com/BrianMuhic";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-[var(--muted)]">
          I&apos;m open to new opportunities and conversations. Reach out via
          LinkedIn or check out my work on GitHub.
        </p>
        <p className="mt-4 text-[var(--muted)]">
          Email:{" "}
          <a
            href="mailto:brianmuhic@vt.edu"
            className="text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:decoration-[var(--accent)]"
          >
            brianmuhic@vt.edu
          </a>
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--card)]"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--card)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

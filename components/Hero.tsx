"use client";

import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-20">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--border)] shadow-lg bg-[var(--card)] flex items-center justify-center">
        {!imgError ? (
          <Image
            src="/Files/headshot.jpg"
            alt="Brian Muhic"
            fill
            className="object-cover"
            sizes="160px"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-4xl font-semibold text-[var(--muted)]">BM</span>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Brian Muhic
        </h1>
        <p className="mt-2 text-xl text-[var(--muted)]">
          Software Engineer
        </p>
        <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
          Software Engineer for General Dynamics Mission Systems.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href="/Files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--card)]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

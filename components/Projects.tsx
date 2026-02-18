export function Projects() {
  const projects = [
    {
      title: "HokieEats",
      description:
        "A web application for Virginia Tech students to request or fulfill meal requests for other students from VT dining halls.",
      tech: ["Next.js", "React", "Typescript", "Tailwind CSS", "PostgreSQL"],
      href: "https://github.com/BrianMuhic/HokieEats",
    },
    
  ];

  return (
    <section id="projects" className="border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--muted)]"
            >
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-[var(--muted)]">
                {project.tech.join(" · ")}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View project →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

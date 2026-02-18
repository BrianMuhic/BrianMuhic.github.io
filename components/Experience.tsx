export function Experience() {
  const items = [
    {
      role: "Software Engineer",
      company: "General Dynamics Mission Systems",
      period: "May 2024 – August 2024 & May 2025 – August 2025",
      bullets: [
        "Designed and implemented a unified configuration system by merging configuration files, backed by a Protobuf schema and parser.",
        "Wrote and integrated a Maven-based dependency management system, including a flexible script to automate downloading of third-party JARs based on custom arguments.",
        "Optimized configuration parsing by creating an efficient parser to ensure only required data elements are stored.",
        "Led a large-scale refactoring to update the logging system used across the codebase.",
        "Engineered a TCP-based data transfer protocol and implemented advanced data visualization functions to enhance accuracy in data analysis.",
        "Designed and implemented cross-language message handling interfaces between Java and C++ applications, facilitating real-time data exchange over TCP/IP for system performance optimization.",
        "Successfully executed a comprehensive code refactoring initiative, eliminating legacy CORBA dependencies to modernize and streamline the software architecture for improved maintainability.",
        "Developed a resilient feature for remote system status data preservation, enabling local backup on external computers to safeguard against data loss.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Centrifuge",
      period: "May 2023 – August 2023",
      bullets: [
        "Developed an image recognition system leveraging Python and YOLOv8, enabling real-time object classification from internet-streamed video feeds, enhancing surveillance capabilities.",
        "Enhanced model accuracy by meticulously training with diverse datasets, significantly boosting prediction confidence for critical object detection tasks.",
        "Implemented a robust PostgreSQL database solution to log object classifications, timestamps, and prediction confidences, ensuring detailed record-keeping and data integrity for analytics."
      ],
    },
  ];

  return (
    <section id="experience" className="border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="mt-8 space-y-10">
          {items.map((item) => (
            <li key={`${item.company}-${item.role}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{item.role}</h3>
                <span className="text-sm text-[var(--muted)]">{item.period}</span>
              </div>
              <p className="text-sm text-[var(--muted)]">{item.company}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

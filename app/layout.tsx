import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Muhic | Software Engineer",
  description: "Portfolio of Brian Muhic, Software Engineer.",
};

type LayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
      </body>
    </html>
  );
}

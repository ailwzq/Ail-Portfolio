import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ailey Weng — Design",
  description: "Design portfolio of Ailey Weng, a design student at Carnegie Mellon University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header">
      <Link href="/" className="monogram" aria-label="Ailey Weng, home">AW</Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link><Link href="/play">Play</Link><Link href="/about">About</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer><span>Ailey Weng</span><span>Designing with care &amp; curiosity</span><span>© {new Date().getFullYear()}</span></footer>
  </body></html>;
}

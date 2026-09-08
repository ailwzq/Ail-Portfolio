import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects().filter((project) => project.featured);
  return <>
    <section className="home-hero">
      <p className="eyebrow">Design at Carnegie Mellon University</p>
      <h1>AILEY<br/>WENG</h1>
      <div className="hero-bottom"><p>Objects, graphics,<br/>interactions &amp; systems.</p><span>Selected work ↓</span></div>
    </section>
    <section className="featured" aria-label="Featured projects">
      {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
    </section>
    <section className="work-link"><p>More experiments, processes and finished things.</p><Link href="/work">View all work <span>↗</span></Link></section>
  </>;
}

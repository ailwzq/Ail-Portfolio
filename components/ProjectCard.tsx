import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <article className={`project-card card-${index % 4}`}>
    <Link href={`/work/${project.slug}`}>
      <div className="project-image"><Image src={project.coverImage} alt={`${project.title} cover`} fill sizes="(max-width: 700px) 100vw, 70vw" /></div>
      <div className="project-meta"><div><h2>{project.title}</h2><p>{project.category} · {project.year}</p></div><p className="project-summary">{project.shortDescription}</p></div>
    </Link>
  </article>;
}

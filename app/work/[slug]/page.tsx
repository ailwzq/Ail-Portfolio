import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";

export function generateStaticParams() { return getProjects().map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projects = getProjects();
  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
  return <article className="case-study">
    <header className="case-header"><div className="case-kicker"><p className="eyebrow">{project.category} · {project.year}</p><span aria-hidden="true">Selected work / {project.slug.slice(-2)}</span></div><h1>{project.title}</h1>
      <div className="case-details"><p className="case-deck">{project.shortDescription}</p>
        <dl><div><dt>Course</dt><dd>{project.course}</dd></div><div><dt>Duration</dt><dd>{project.duration}</dd></div><div><dt>With</dt><dd>{project.collaborators}</dd></div></dl>
      </div>
    </header>
    <div className="case-hero"><Image src={project.coverImage} alt={`${project.title} hero`} fill priority sizes="100vw"/></div>
    <section className="case-intro"><span>Overview</span><p>{project.longDescription}</p></section>
    <section className="gallery">{project.gallery.map((item, index) => <figure className={item.size} key={item.src}><div className="gallery-image"><Image src={item.src} alt={item.caption} fill sizes={item.size === "full" ? "100vw" : "50vw"}/></div><figcaption><span>0{index + 1}</span>{item.caption}</figcaption></figure>)}</section>
    {project.video && <video className="project-video" controls src={project.video}/>} 
    {project.observation && <blockquote>“{project.observation}”</blockquote>}
    <Link className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title} →</strong><div><Image src={next.coverImage} alt="" fill sizes="100vw"/></div></Link>
  </article>;
}

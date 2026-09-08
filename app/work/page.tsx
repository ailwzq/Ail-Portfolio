import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getProjects();
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  return <div className="page-shell archive-page">
    <header className="page-title"><p className="eyebrow">Selected + ongoing</p><h1>WORK</h1><p className="intro">A growing archive of objects, identities, interactions and visual systems.</p></header>
    <div className="filter-row" aria-label="Project categories">{categories.map((category, index) => <span className={index === 0 ? "active" : ""} key={category}>{category}</span>)}</div>
    <section className="archive-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug}/>)}</section>
  </div>;
}

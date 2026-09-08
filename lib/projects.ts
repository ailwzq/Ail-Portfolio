import fs from "node:fs";
import path from "node:path";

export type GalleryImage = { src: string; caption: string; size: "full" | "half" };
export type Project = {
  slug: string; title: string; year: string; category: string;
  shortDescription: string; longDescription: string; coverImage: string;
  gallery: GalleryImage[]; video?: string; course: string;
  collaborators: string; duration: string; featured: boolean; observation?: string;
};

const directory = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".json"))
    .sort().map((file) => JSON.parse(fs.readFileSync(path.join(directory, file), "utf8")) as Project);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

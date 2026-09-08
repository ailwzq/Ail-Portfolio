# Ailey Weng — Portfolio

A contemporary portfolio built with Next.js and TypeScript. Project pages are generated automatically from simple JSON content files, so you never need to edit the website code to add work.

## Run it locally

1. Install [Node.js](https://nodejs.org/) (version 20 or newer).
2. Open this folder in a terminal.
3. Run `npm install` once.
4. Run `npm run dev`.
5. Visit `http://localhost:3000` in a browser.

## The two folders you will use

```text
content/projects/                 Project text and settings
public/projects/project-name/    Project images and videos
```

Each file in `content/projects` describes one project. The filename and `slug` should match its image folder. For example, `project-01.json` uses images in `public/projects/project-01/`.

## Add a new project (no coding required)

1. Duplicate `content/projects/project-01.json`.
2. Rename it, using lowercase letters and hyphens—for example `chair-study.json`.
3. Change `"slug": "project-01"` to `"slug": "chair-study"`.
4. Edit the title, year, category and other text between the quotation marks. Keep the commas and quotation marks in place.
5. Duplicate `public/projects/project-01`, rename the folder `chair-study`, and add your images.
6. Update the image paths in the content file, for example `"/projects/chair-study/cover.jpg"`.
7. Save. The project automatically appears on Work, and its page is created automatically.

### Project field guide

| Field | What to enter |
| --- | --- |
| `title` | Project name |
| `year` | Year as text, such as `"2026"` |
| `category` | Objects, Graphics, Interactions, etc. |
| `shortDescription` | One sentence used on project previews |
| `longDescription` | The main case-study introduction |
| `coverImage` | Image shown on the homepage, archive and page hero |
| `gallery` | A list of images. Each has a path, caption and `full` or `half` size |
| `video` | Optional video path. Delete this line if there is no video |
| `course` | Course name |
| `collaborators` | Names or `Independent project` |
| `duration` | For example `6 weeks` |
| `featured` | `true` shows it on the homepage; `false` keeps it in Work only |
| `observation` | Optional large pull quote |

## Common edits

### Replace a cover image

Put the new image in the project’s folder. Either give it the same name as the old cover, or update `coverImage` in the JSON file. JPG, PNG, WebP and SVG files work. Large images around 2000 pixels wide are recommended.

### Add process images

1. Add the image to the correct `public/projects/...` folder.
2. In that project’s `gallery` list, copy an existing `{ ... }` entry.
3. Add a comma between entries.
4. Change `src`, `caption` and `size`. Use `"size": "full"` for a wide image or `"size": "half"` for a paired image.

### Edit a description

Open the project’s JSON file and change `shortDescription` or `longDescription`. Keep the text inside the quotation marks. Save and refresh the browser.

### Reorder projects

Projects are ordered alphabetically by content filename. Rename files with number prefixes to control order, such as `01-chair-study.json`, `02-poster-series.json`, and `03-object-system.json`. The internal `slug` does not need to change.

### Change the accent color

Open `app/globals.css` and change `--accent:#ff4d24` on the first line to any hex color. This is the only design setting that requires opening a code file.

### Edit About and social links

Edit the plain text and links in `app/about/page.tsx`. Replace `public/about/portrait-placeholder.svg` with a portrait and update the image filename there if needed.

## Before publishing

Run `npm run build` to check the site. Push the folder to GitHub, import the repository at [vercel.com/new](https://vercel.com/new), and accept Vercel’s detected Next.js settings.

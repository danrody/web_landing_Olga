import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "public/index.html",
  "public/privacy.html",
  "public/resume.html",
  "public/terms.html",
  "public/legal.css",
  "public/styles.css",
  "public/resume.css",
  "public/app.js",
  "public/resume.js",
  "public/layout-data.json",
  "public/images/people/olga-perekopskaya-resume.jpg",
  "public/images/frame4/career-choice.png",
  "public/images/frame4/many-interests.png",
  "public/images/frame4/university-mistake.png",
  "public/images/frame4/major-master.png",
  "public/images/frame4/family-pressure.png",
  "public/images/frame4/first-job.png",
  "public/images/frame4/passed-over.png",
  "public/images/frame4/own-business.png",
  "public/images/frame4/accelerate-career.png"
];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const runtimeFiles = [
  "public/index.html",
  "public/privacy.html",
  "public/resume.html",
  "public/terms.html",
  "public/legal.css",
  "public/styles.css",
  "public/resume.css",
  "public/app.js",
  "public/resume.js",
  "public/layout-data.json",
  "server.js",
  "package.json"
];

for (const file of runtimeFiles) {
  const content = readFileSync(file, "utf8");
  for (const token of ["Untitled.fig", "/assets/", "fig-data.json"]) {
    if (content.includes(token)) {
      throw new Error(`Runtime file ${file} still references ${token}`);
    }
  }
}

const layoutData = JSON.parse(readFileSync("public/layout-data.json", "utf8"));
const imagePaths = new Set();

for (const frame of Object.values(layoutData.frames || {})) {
  walk(frame);
}

for (const imagePath of imagePaths) {
  if (!imagePath.startsWith("/images/figma/")) {
    throw new Error(`Image is not served from the clone image folder: ${imagePath}`);
  }

  const localPath = `public${imagePath}`;
  if (!existsSync(localPath)) {
    throw new Error(`Missing image referenced by layout-data.json: ${localPath}`);
  }
}

console.log("Node clone static check passed");

function walk(node) {
  if (node?.style?.image) {
    imagePaths.add(node.style.image);
  }

  for (const child of node.children || []) {
    walk(child);
  }
}

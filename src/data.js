import hero from "./assets/hero.jpg";
import kalki from "./assets/kalki.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";

export const heroImg = hero;

export const projects = [
  {
    title: "Iron Titan",
    type: "Feature Film",
    role: "FX Lead · Destruction",
    year: "2025",
    img: kalki,
    tools: ["Houdini", "Nuke", "Karma"],
  },
  {
    title: "Leviathan Rising",
    type: "Series",
    role: "FLIP / Water Simulation",
    year: "2024",
    img: work2,
    tools: ["Houdini", "Redshift"],
  },
  {
    title: "The Ember Gate",
    type: "Commercial",
    role: "Pyro & Particles",
    year: "2023",
    img: work3,
    tools: ["Houdini", "Nuke", "After Effects"],
  },
  {
    title: "Event Horizon",
    type: "Feature Film",
    role: "Environment & Comp",
    year: "2022",
    img: hero,
    tools: ["Maya", "Nuke", "Arnold"],
  },
];

export const skills = [
  { name: "Nuke Compositing", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "Mocha", level: 87 },
  { name: "Premier Pro", level: 80 },
  { name: "Silhouette", level: 50 },
];

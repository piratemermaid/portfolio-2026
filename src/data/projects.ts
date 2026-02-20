export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  year: string;
  tags: string[];
};

export const projectSummaries = [
  {
    name: "DMK Token Guide",
    description: `A companion app for the game Disney Magic Kingdoms. It 
            provided many features for its 11,000+ players over the 4 years it 
            was live under my ownership. It was my first full-stack application 
            as well as first deployed application with users. It was a fantastic 
            learning experience and I'm still so proud of what I accomplished.`,
    imgSrc: "/src/assets/dmk-token-guide/homepage.png",
    tags: [
      "React",
      "Redux",
      "Material UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Nginx",
    ],
    year: "2018 - 2022",
  },
  {
    name: "Hades Companion",
    description: `A very simple companion app for the game Hades. It allows 
        players to track their progress and quickly see what achievements they 
        have left to unlock.`,
    imgSrc: "/src/assets/hades-companion/hades-clears.png",
    year: "2025",
    tags: ["React", "TypeScript", "Material UI", "React Router", "Vercel"],
  },
  {
    name: "Palworld Companion",
    description: `A companion app for the game Palworld. It allows players to 
        quickly find which pals they need to catch, pal work suitability, good 
        breeding pairs, and more.`,
    imgSrc: "/src/assets/palworld-companion/work-suitability.png",
    year: "2024",
    tags: ["React", "TypeScript", "Material UI", "React Router", "Vercel"],
  },
];

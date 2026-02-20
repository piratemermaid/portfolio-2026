import playlistSummaryImage from "../assets/ballroom-playlist/playlist.png";
import dmkTokenGuideSummaryImage from "../assets/dmk-token-guide/homepage.png";
import hadesCompanionSummaryImage from "../assets/hades-companion/hades-clears.png";
import palworldCompanionSummaryImage from "../assets/palworld-companion/work-suitability.png";

export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  year: string;
  tags: string[];
  demoUrl?: string;
};

export const projectSummaries = [
  {
    name: "Ballroom Playlist",
    description: `A one-stop-shop playlist for ballroom teachers and students. 
            It removes unnecessary time spent searching for the right song for a 
            dance by combining all ballroom songs into one playlist and filtering 
            by dance type and BPM. It uses Spotify API for the music and allows users 
            to create an account and save their playlists and custom tags.`,
    imgSrc: playlistSummaryImage,
    year: "2026 - in progress!",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    name: "DMK Token Guide",
    description: `A companion app for the game Disney Magic Kingdoms. It 
            provided many features for its 11,000+ players over the 4 years it 
            was live under my ownership. It was my first full-stack application 
            as well as first deployed application with users. It was a fantastic 
            learning experience and I'm still so proud of what I accomplished. I 
            handed it down to a predecessor who has removed user accounts, but you 
            can still demo the app and see some of the features I built.`,
    imgSrc: dmkTokenGuideSummaryImage,
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Nginx"],
    year: "2018 - 2022",
    demoUrl: "https://dmktokenguide.com/",
  },
  {
    name: "Hades Companion",
    description: `A very simple companion app for the game Hades. It allows 
        players to track their progress and quickly see what achievements they 
        have left to unlock.`,
    imgSrc: hadesCompanionSummaryImage,
    year: "2025",
    tags: ["React", "TypeScript", "React Router", "Vercel"],
    demoUrl: "https://hades-companion.vercel.app/",
  },
  {
    name: "Palworld Companion",
    description: `A companion app for the game Palworld. It allows players to 
        quickly find which pals they need to catch, pal work suitability, good 
        breeding pairs, and more.`,
    imgSrc: palworldCompanionSummaryImage,
    year: "2024",
    tags: ["React", "TypeScript", "React Router", "Vercel"],
    demoUrl: "https://palworld-interactive-wiki-46o8.vercel.app/my_pals",
  },
];

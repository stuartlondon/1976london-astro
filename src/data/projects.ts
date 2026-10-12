export type ProjectStatus = "Live" | "In Development";

export interface Project {
    name: string;
    category: string;
    description: string;
    technologies: string[];
    status: ProjectStatus;
    featured: boolean;
    website?: string;
    image?: string;
    tone: "cyan" | "teal" | "slate";
}

export const projects: Project[] = [
    {
        name: "Fix My Car",
        category: "Mobile Mechanic Website",
        description:
            "A mobile mechanic website for drivers across North, East and South London, with clear service information, coverage details, and direct contact options.",
        technologies: ["Astro"],
        status: "Live",
        featured: true,
        website: "https://fixmycar.london",
        image: "/fixmycar.png",
        tone: "cyan"
    },
    {
        name: "Dragica Carlin",
        category: "Artist Portfolio",
        description:
            "A personal art portfolio focused on exhibitions, commissions, and visual storytelling.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://dragicacarlin.com",
        image: "/dragicacarlin.png",
        tone: "cyan"
    },
    {
        name: "Ben Stockley",
        category: "Filmmaker Portfolio",
        description:
            "A cinematic portfolio experience designed to highlight motion work and client projects.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://benstockley.com",
        image: "/benstockley.png",
        tone: "teal"
    },
    {
        name: "Reds Plastering",
        category: "Small Business Website",
        description:
            "A practical lead-focused site for a local trades business with clearer contact pathways.",
        technologies: ["WordPress"],
        status: "Live",
        featured: true,
        website: "https://redsplastering.co.uk",
        image: "/redsplastering.png",
        tone: "slate"
    },
];

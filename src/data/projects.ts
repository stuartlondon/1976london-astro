export type ProjectStatus = "Live" | "In Development";

export interface Project {
    name: string;
    category: string;
    description: string;
    technologies: string[];
    status: ProjectStatus;
    website?: string;
    image?: string;
    tone: "cyan" | "teal" | "slate";
}

export const projects: Project[] = [
    {
        name: "Dragica Carlin",
        category: "Artist Portfolio",
        description:
            "A personal art portfolio focused on exhibitions, commissions, and visual storytelling.",
        technologies: ["Astro", "TypeScript", "Content Collections"],
        status: "Live",
        website: "https://dragicacarlin.com",
        image: "/dragicacarlin.png",
        tone: "cyan"
    },
    {
        name: "Ben Stockley",
        category: "Filmmaker Portfolio",
        description:
            "A cinematic portfolio experience designed to highlight motion work and client projects.",
        technologies: ["Astro", "Responsive Video", "Performance Tuning"],
        status: "Live",
        website: "https://benstockley.com",
        image: "/benstockley.png",
        tone: "teal"
    },
    {
        name: "Reds Plastering",
        category: "Small Business Website",
        description:
            "A practical lead-focused site for a local trades business with clearer contact pathways.",
        technologies: ["Astro", "SEO Foundations", "Conversion Copy"],
        status: "Live",
        website: "https://redsplastering.co.uk",
        image: "/redsplastering.png",
        tone: "slate"
    },
    {
        name: "David Austen",
        category: "Creative Studio Website",
        description:
            "A studio website balancing artwork presentation, exhibitions, and editorial clarity.",
        technologies: ["Astro", "Image Optimisation", "Custom UI"],
        status: "Live",
        website: "https://www.davidaustenstudio.com/",
        image: "/davidaustenstudio.png",
        tone: "teal"
    },
    {
        name: "ABCars",
        category: "Local Service Website",
        description:
            "A modern rebuild in progress focused on trust signals, service pages, and local enquiries.",
        technologies: ["Astro", "Component Architecture", "Local SEO"],
        status: "In Development",
        image: "/fixmycar.png",
        tone: "cyan"
    }
];

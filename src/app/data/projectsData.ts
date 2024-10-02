export type Project = {
    name: string;
    description: string;
    link: string;
    github: string;
    image: string;
};

export const projectsData: Project[] = [
    {
        name: "Frontend Mentor Challenges",
        description: "My solutions to the Frontend Mentor challenges.",
        link: "https://danclubb-frontend-mentor-challenges.vercel.app/",
        github: "https://github.com/DanClubb/Frontend-Mentor-Challenges",
        image: "/images/project-images/frontend-mentor.webp",
    },
    {
        name: "Diamond Gymnastics",
        description: "",
        link: "https://www.diamond-gymnastics.com/",
        github: "",
        image: "/images/project-images/diamond.png",
    },
    {
        name: "Fragrance Finds",
        description: "",
        link: "https://fragrance-finds-delta.vercel.app/",
        github: "",
        image: "/images/project-images/frag-finds.png",
    },
];

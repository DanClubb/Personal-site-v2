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
    // {
    //     name: "Diamond Gymnastics",
    //     description:
    //         "I developed an engaging and user-friendly website for diamond gymnastics club, focusing on showcasing class schedules, coach profiles, and club events. This project highlights my ability to create appealing, functional designs tailored to client's needs.",
    //     link: "https://www.diamond-gymnastics.com/",
    //     github: "https://github.com/DanClubb/diamond",
    //     image: "/images/project-images/diamond.png",
    // },
    {
        name: "Fragrance Finds",
        description: "",
        link: "https://fragrance-finds-delta.vercel.app/",
        github: "https://github.com/DanClubb/fragrance-finds",
        image: "/images/project-images/frag-finds.png",
    },
    {
        name: "Drello",
        description: "",
        link: "https://trello-clone-three-nu.vercel.app/",
        github: "https://github.com/DanClubb/Trello-Clone",
        image: "/images/project-images/drello.webp",
    },
];

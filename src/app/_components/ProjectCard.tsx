import { Project } from "../data/projectsData";
import styles from "../styles/homepage.module.css";
import GithubLogo from "./icons/GithubLogo";

export default function ProjectCard({
    name,
    description,
    link,
    github,
    image,
}: Project) {
    return (
        <div className={styles.projectCard}>
            <div
                className={styles.projectCardImg}
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className={styles.projectCardInfo}>
                <h1 className={styles.projectCardTitle}>{name}</h1>
                <p className={styles.projectCardDescription}>{description}</p>
                <div className={styles.projectCardLinks}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.projectCardLink}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            width="30"
                            height="30"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                        <p>Website</p>
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.projectCardLink}
                    >
                        <GithubLogo color="black" size="30" />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

import { Project } from "../data/projectsData";
import styles from "../styles/homepage.module.css";

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
                        live
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.projectCardLink}
                    >
                        github
                    </a>
                </div>
            </div>
        </div>
    );
}

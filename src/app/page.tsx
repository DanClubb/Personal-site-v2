import Image from "next/image";
import Link from "next/link";
import heroDevices from "../../public/hero-devices.svg";
import ZoneLogo from "../../public/zone_straplinelogo_gunmetal-2020-rgb.svg";
import ContactForm from "./_components/ContactForm";
import Arrow from "./_components/icons/Arrow";
import GithubLogo from "./_components/icons/GithubLogo";
import HeroDevices from "./_components/icons/HeroDevices";
import LinkedInLogo from "./_components/icons/LinkedInLogo";
import ProjectCard from "./_components/ProjectCard";
import { projectsData } from "./data/projectsData";
import styles from "./styles/homepage.module.css";

export default function Home() {
    return (
        <>
            <section className={`${styles.hero} ${styles.section}`}>
                <div>
                    <div>
                        <h1>Dan Clubb</h1>
                        <h2>Software Developer</h2>
                        <p>
                            I am a software developer who loves problem solving
                            while creating complex functionality and
                            implementing designs with pixel-perfect accuracy.
                        </p>
                    </div>

                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.linkedin.com/in/dan-clubb/"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <LinkedInLogo />
                        </a>
                        <a
                            href="https://github.com/DanClubb"
                            target="_blank"
                            title="Github"
                        >
                            <GithubLogo />
                        </a>
                    </div>
                </div>

                <div>
                    <span className={styles.scroll}>SCROLL</span>
                    <div className={styles.arrow}>
                        <Arrow />
                    </div>
                </div>
            </section>
            <section
                className={`${styles.section} ${styles.experienceSection}`}
            >
                <div>
                    <p>
                        I am a passionate and versatile software developer with
                        2 years of experience at Zone, an experience
                        consultancy. During my time there, I worked in agile
                        teams on projects such as implementing responsive
                        e-commerce designs for{" "}
                        <span className={styles.electrolux}>Electrolux</span>,
                        improving the user experience of{" "}
                        <span className={styles.greeneKing}>Greene King’s</span>{" "}
                        table reservation app, and leading the development of a
                        car park booking system for{" "}
                        <span className={styles.zone}>Zone’s</span> Bristol
                        office. I also completed my Level 4 Software Development
                        apprenticeship, gaining a formal qualification while
                        contributing to impactful projects.
                    </p>

                    <Link href="/experience" className={styles.learnMore}>
                        Learn more{" "}
                        <span className={styles.learnMoreArrow}>→</span>
                    </Link>
                </div>

                <Image
                    src={ZoneLogo}
                    alt="Zone Logo"
                    width={375}
                    height={375}
                />
            </section>
            <section className={`${styles.section} ${styles.projectSection}`}>
                <p className={styles.projectSectionSummary}>
                    As a software developer, I spend my free time enhancing my
                    skills through personal projects, attending hackathons, and
                    going to London JS meetups. These activities allow me to
                    stay up-to-date with the latest industry trends, collaborate
                    with fellow developers, and continually grow my expertise in
                    JavaScript and other tech.
                </p>
                <div className={styles.projects}>
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            link={project.link}
                            github={project.github}
                            image={project.image}
                        />
                    ))}
                </div>
            </section>
            <section className={`${styles.section} ${styles.contactMeSection}`}>
                <ContactForm />
            </section>
        </>
    );
}

import Image from "next/image";
import Link from "next/link";
import TECH_LOGOS from "../../public/TechLogos";
import ZoneLogo from "../../public/zone_straplinelogo_gunmetal-2020-rgb.svg";
import ContactForm from "./_components/ContactForm";
import Arrow from "./_components/icons/Arrow";
import GithubLogo from "./_components/icons/GithubLogo";
import LinkedInLogo from "./_components/icons/LinkedInLogo";
import ProjectCard from "./_components/ProjectCard";
import { projectsData } from "./data/projectsData";
import styles from "./styles/homepage.module.css";

export default function Home() {
    const techLogosArray = Object.keys(TECH_LOGOS);
    const translates = () =>
        ({
            "--tranY": `translateY(${Math.random() > 0.5 ? "-" : ""}${
                Math.floor(Math.random() * 20) + 10
            }%)`,
            "--tranX": `translateX(${Math.random() > 0.5 ? "-" : ""}${
                Math.floor(Math.random() * 20) + 10
            }%)`,
        } as React.CSSProperties);
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
                            <LinkedInLogo color="var(--foreground)" />
                        </a>
                        <a
                            href="https://github.com/DanClubb"
                            target="_blank"
                            title="Github"
                        >
                            <GithubLogo color="var(--foreground)" />
                        </a>
                    </div>
                </div>
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.react}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "4rem",
                        zIndex: 1,
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="React Logo"
                />
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.tailwind}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "7rem",
                        left: "22rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="Tailwind Logo"
                />
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.javascript}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "7rem",
                        right: "22rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="Javascript Logo"
                />
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.typescript}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "16rem",
                        left: "12rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="Typescript Logo"
                />
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.css}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "16rem",
                        right: "12rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="CSS Logo"
                />{" "}
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.html}
                    width={50}
                    style={{
                        position: "absolute",

                        top: "28rem",
                        left: "22rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="HTML Logo"
                />
                <Image
                    className={styles.teachIcon}
                    src={TECH_LOGOS.git}
                    width={50}
                    style={{
                        position: "absolute",
                        top: "28rem",
                        right: "22rem",
                        animationDuration: `${
                            Math.floor(Math.random() * 7) + 7
                        }s`,
                        ...translates(),
                    }}
                    alt="Git Logo"
                />
                {/* <div>
                    <span className={styles.scroll}>SCROLL</span>
                    <div className={styles.arrow}>
                        <Arrow />
                    </div>
                </div> */}
            </section>
            <section
                className={`${styles.section} ${styles.experienceSection}`}
            >
                <Image
                    src={ZoneLogo}
                    alt="Zone Logo"
                    width={375}
                    height={375}
                />
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
            </section>
            <section className={`${styles.section} ${styles.projectSection}`}>
                <p className={styles.projectSectionSummary}>
                    As a software developer, I also spend my free time enhancing
                    my skills through personal projects, attending hackathons,
                    and going to London JS meetups. These activities allow me to
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
            <section
                id="contact-form"
                className={`${styles.section} ${styles.contactMeSection}`}
            >
                <ContactForm />
            </section>
        </>
    );
}

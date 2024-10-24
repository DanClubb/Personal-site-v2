import Link from "next/link";
import styles from "../styles/footer.module.css";
import EmailIcon from "./icons/EmailIcon";
import GithubLogo from "./icons/GithubLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.quickLinks}>
                    <h3>Quick Links</h3>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/experience">Experience</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/#contact-form">Contact</Link>
                    </nav>
                </div>
                <div className={styles.connect}>
                    <h3 className="text-lg font-semibold">Connect</h3>
                    <ul>
                        <li>
                            <a
                                className={styles.icon}
                                href="https://www.linkedin.com/in/dan-clubb/"
                                target="_blank"
                                title="LinkedIn"
                            >
                                <LinkedInLogo color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.icon}
                                href="https://github.com/DanClubb"
                                target="_blank"
                                title="Github"
                            >
                                <GithubLogo color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.icon}
                                href="mailto:daniel.clubb@outlook.com"
                                target="_blank"
                                title="Email"
                            >
                                <EmailIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © 2024 Dan Clubb. All rights reserved.
            </div>
        </footer>
    );
}

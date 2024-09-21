import Image from "next/image";
import heroDevices from "../../public/hero-devices.svg";
import Arrow from "./_components/icons/Arrow";
import GithubLogo from "./_components/icons/GithubLogo";
import HeroDevices from "./_components/icons/HeroDevices";
import LinkedInLogo from "./_components/icons/LinkedInLogo";
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
            <section className={styles.section}>Experience</section>
            <section className={styles.section}>Projects</section>
            <section className={styles.section}>Contact Me</section>
        </>
    );
}

import styles from "../styles/footer.module.css";
import GithubLogo from "./icons/GithubLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
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
        </footer>
    );
}

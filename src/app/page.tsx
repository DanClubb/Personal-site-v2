import styles from "./styles/homepage.module.css";

export default function Home() {
    return (
        <>
            <section className={styles.section}>Hero</section>
            <section className={styles.section}>Experience</section>
            <section className={styles.section}>Projects</section>
            <section className={styles.section}>Contact Me</section>
        </>
    );
}

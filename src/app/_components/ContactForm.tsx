import styles from "../styles/contact-form.module.css";

export default function ContactForm() {
    return (
        <form className={styles.form}>
            <h1>Contact Me</h1>
            <input
                type="text"
                placeholder="Name"
                className={styles.formInput}
                required
            />
            <input
                type="email"
                placeholder="Email"
                className={styles.formInput}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                className={styles.formInput}
            />
            <textarea
                placeholder="Message"
                className={styles.formInput}
                required
            ></textarea>
            <button className={styles.submitButton}>Submit</button>
        </form>
    );
}

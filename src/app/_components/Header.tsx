"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/header.module.css";
import Close from "./icons/Close";
import Hamburger from "./icons/Hamburger";

export default function Header() {
    const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.homeNavLink}>
                    DC
                </Link>
                <button
                    className={styles.mobileNavToggle}
                    aria-controls="nav"
                    aria-expanded={mobileNavExpanded}
                    onClick={() => setMobileNavExpanded((prev) => !prev)}
                >
                    {mobileNavExpanded ? <Close /> : <Hamburger />}
                </button>
                <ul
                    className={styles.navLinks}
                    data-visible={mobileNavExpanded}
                >
                    <li>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/#contact-form">Contact Me</Link>
                    </li>
                    <li>
                        <Link href="/cv.pdf" target="_blank">
                            Curriculum Vitae
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
